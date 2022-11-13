import React, { ButtonHTMLAttributes } from 'react';
import { SiApple } from 'react-icons/si';
import { CgGoogle } from 'react-icons/cg';
import { TfiMicrosoftAlt } from 'react-icons/tfi';
import { RiUserFill } from 'react-icons/ri';

import {
  Button
} from './styles';

type buttonType = "google" | "apple" | "microsoft" | "anonymous";

interface ButtonSocialLoginProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loginType: buttonType,
}

export const ButtonSocialLogin:React.FC<ButtonSocialLoginProps> = ({
  loginType,
}) => {
  const settings = {
    google: {
      title: "Entrar com Google",
      icon: <CgGoogle size={24}/>,
    },
    apple: {
      title: "Entrar com Apple",
      icon: <SiApple size={24}/>,
    },
    microsoft: {
      title: "Entrar com Microsoft",
      icon: <TfiMicrosoftAlt size={24}/>,
    },
    anonymous: {
      title: "Visitante",
      icon: <RiUserFill size={24}/>,
    }
  }

  return (
    <Button loginType={loginType}>
      <small>{settings[loginType].icon}</small>
      <strong>{settings[loginType].title}</strong>
    </Button>
  )
}
