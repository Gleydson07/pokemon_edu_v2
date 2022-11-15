import {
  createContext,
  ReactNode,
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
  user: UserProps,
  loading: Boolean,
  setUser: (user: UserProps) =>  void;
  handleGoogleSignIn: () =>  void;
  handleGoogleSignOut: () =>  void;
}

const MAX_LIFE = 3;

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({children}: AuthProviderProps) => {
  const [user, setUser] = useState<UserProps>(null);
  const [loading, setLoading] = useState(true);

  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();    
    signInWithPopup(auth, provider)
    .then((response) => {
      const userDatabase:User = response.user;
      const user = {
        id: userDatabase.uid,
        name: userDatabase.displayName,
        email: userDatabase.email,
        avatar: userDatabase.photoURL,
        life: MAX_LIFE,
        points: 0,
        maxPoints: 0,
      };

      set(ref(database, `users/${user.id}`), { ...user });

      const userFormatted = formatUser(user);
      setUser(userFormatted);
    })
    .catch((error) => console.log(error));
  };

  const handleGoogleSignOut = async () => {
    setUser(undefined);
    await auth.signOut();
    window.location.replace('/');
  };

  useEffect(() => {
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
          console.error(error);
        });
      }
    });
    setLoading(false);
    
    return () => {
      unsubscribe();
    }
  }, []);

  return (
    <AuthContext.Provider value={{
      user,
      setUser,
      loading,
      handleGoogleSignIn,
      handleGoogleSignOut,
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext);

