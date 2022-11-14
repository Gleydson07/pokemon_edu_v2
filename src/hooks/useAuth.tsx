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


interface UserProps {
  id: string,
  name: string,
  email: string,
  avatar?: string,
}

type AuthProviderProps = {
  children: ReactNode,
}

interface AuthContextProps {
  user: UserProps,
  loading: Boolean,
  handleGoogleSignIn: () =>  void;
  handleGoogleSignOut: () =>  void;
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({children}: AuthProviderProps) => {
  const [user, setUser] = useState<UserProps>(null);
  const [loading, setLoading] = useState(true);

  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();    
    signInWithPopup(auth, provider)
    .then((response) => {
      console.log({response})
      const userDatabase:User = response.user;
      const user = {
        id: userDatabase.uid,
        name: userDatabase.displayName,
        email: userDatabase.email,
        avatar: userDatabase.photoURL,
      };
      set(ref(database, `users/${user.id}`), { ...user });
      setUser(user);

      return user;
    })
    .catch((error) => console.log(error));
  };

  async function handleGoogleSignOut(){
    setUser(undefined);
    await auth.signOut();
    window.location.replace('/');
}

  useEffect(() => {
    setLoading(true);
    const unsubscribe = auth.onAuthStateChanged(userData => {
      if(userData){
        const {displayName, photoURL} = userData;
        if(!displayName || !photoURL){
          throw new Error("Missing information from Google Account");
        }
        
        const user = {
          id: userData.uid,
          name: userData.displayName,
          email: userData.email,
          avatar: userData.photoURL,
        };
        setUser(user);
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
      loading,
      handleGoogleSignIn,
      handleGoogleSignOut,
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext);