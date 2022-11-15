import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState
} from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  User,
} from 'firebase/auth';
import {
  ref,
  set,
  child,
  get,
} from 'firebase/database';
import {
  auth,
  database,
} from '../api/firebase';
import { formatUser } from "../utils/formatUser";

export interface UserProps {
  id: string,
  name: string,
  email: string,
  life: number,
  points: number,
  maxPoints: number,
  avatar?: string,
}

type AuthProviderProps = {
  children: ReactNode,
}

interface AuthContextProps {
  user: UserProps | undefined,
  loading: Boolean,
  setUser: (user: UserProps) =>  void;
  handleGoogleSignIn: () =>  void;
  handleGoogleSignOut: () =>  void;
}

const MAX_LIFE = 3;

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({children}: AuthProviderProps) => {
  const [user, setUser] = useState<UserProps | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  const loadUserExists = (userId: String) => {
    const dbRef = ref(database);
    let userExists = false;

    get(child(dbRef, `users/${userId}`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        const user = snapshot.val();
        if (user.uid) {
          userExists = true;
        }
      } else {
        userExists = false;
      }
    }).catch((error) => {
      console.error(error);
    });

    return userExists;
  };

  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    const dbRef = ref(database);

    signInWithPopup(auth, provider)
    .then(async (response) => {
      const userDatabase:User = response.user;
      const user = {
        id: userDatabase.uid,
        name: userDatabase.displayName!,
        email: userDatabase.email!,
        avatar: userDatabase.photoURL || undefined,
        life: MAX_LIFE,
        points: 0,
        maxPoints: 0,
      };

      const userSnapshot = await get(child(dbRef, `users/${user.id}`))
      const userData = userSnapshot.val();
      
      if (!userData?.id) {
        set(ref(database, `users/${user.id}`), { ...user });
      }

      const userFormatted = formatUser(user);
      setUser(userFormatted);
    })
    .catch((error) => console.log({error}));
  };

  const handleGoogleSignOut = async () => {
    setUser({} as UserProps);
    setLoading(true);
    await auth.signOut();
    setLoading(false);
  };

  const persistSession = () => {  
    setLoading(true);  
    const dbRef = ref(database);

    const unsubscribe = auth.onAuthStateChanged(userDatabase => {
      if(userDatabase){
        const {displayName, photoURL} = userDatabase;
        if(!displayName || !photoURL){
          throw new Error("Missing information from Google Account");
        }

        get(child(dbRef, `users/${userDatabase.uid}`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            const userFormatted = formatUser(snapshot.val());
            setUser(userFormatted);

          }
        }).catch((error) => {
          console.error({error});
        }).finally(() => {
          setLoading(false);
        });
      }
    });

    setLoading(false);
    return unsubscribe;
  };

  useEffect(() => {
    const unsubscribe = persistSession();
    
    return () => {
      unsubscribe();
    }
  }, []);

  return (
    <AuthContext.Provider value={{
      user,
      loading,
      setUser,
      handleGoogleSignIn,
      handleGoogleSignOut,
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext);

