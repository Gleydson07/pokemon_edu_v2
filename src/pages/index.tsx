import { useEffect } from "react";
import { useRouter } from 'next/router';
import { ButtonSocialLogin } from "../components/ButtonSocialLogin";
import { ContactMe } from "../components/ContactMe";
import { useAuth } from "../hooks/useAuth";
import { ContactMeWrapper, Container, LogoWrapper } from "../styles/login";
import { GetServerSideProps } from "next";

import {
  GoogleAuthProvider,
  signInWithPopup,
  User,
  setPersistence,
  browserSessionPersistence,
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

export default function Login() {
  const router = useRouter();
  const { user, loading, handleGoogleSignIn } = useAuth();

  useEffect(() => {
    if (user && !loading) {
      router.push('/dashboard');
    }
  }, [user]);

  return (
    <Container>
      <LogoWrapper>
        <h1>PokEdu</h1>
        <h4>Aprenda jogando</h4>
      </LogoWrapper>

      <ButtonSocialLogin
        loginType="google"
        onClick={handleGoogleSignIn}
      />

      <ContactMeWrapper>
        <ContactMe
          linkedin="https://www.linkedin.com/in/gsantosdev/"
          github="https://github.com/Gleydson07"
          whatsapp="https://api.whatsapp.com/send?phone=558281114246&text=Ol%C3%A1!!%20%F0%9F%98%80"
          webpage="https://gsantos.dev.br/"
          bg="light"
        />
      </ContactMeWrapper>
    </Container>
  )
};