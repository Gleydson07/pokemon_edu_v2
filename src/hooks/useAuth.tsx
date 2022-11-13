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
} from 'firebase/auth';
import {
  auth,
} from '../api/firebase';

type AuthProviderProps = {
  children: ReactNode
}

interface AuthContextProps {
  handleGoogleSignIn: () =>  Promise<void>;
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({children}: AuthProviderProps) => {
  async function handleGoogleSignIn(){
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
  }

  return (
    <AuthContext.Provider value={{
      handleGoogleSignIn,
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext);