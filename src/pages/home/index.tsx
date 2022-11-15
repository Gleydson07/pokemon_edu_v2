import { useEffect } from "react";
import { useRouter } from 'next/router';
import { ButtonSocialLogin } from "../../components/ButtonSocialLogin";
import { ContactMe } from "../../components/ContactMe";
import { useAuth } from "../../hooks/useAuth";
import { ContactMeWrapper, Container, LogoWrapper } from "../../styles/login";

export default function Home() {
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