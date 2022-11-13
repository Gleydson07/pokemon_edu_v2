import React from 'react';
import {
  WhatsappLogo,
  LinkedinLogo,
  GithubLogo,
  GoogleChromeLogo,
} from 'phosphor-react';

import {
  Container, SocialMediasContainer
} from './styles';
import Link from 'next/link';

type bgType = "dark" | "light";

interface ContactMeProps {
  whatsapp?: string,
  linkedin?: string,
  github?: string,
  webpage?: string,
  bg?: bgType,
}

export const ContactMe:React.FC<ContactMeProps> = ({
  bg,
  whatsapp,
  linkedin,
  github,
  webpage,
}) => {
  return (
    <Container bg={bg}>
      <p>Entre em contato</p>

      <SocialMediasContainer>
        <Link href={whatsapp} target="_blank">
          <WhatsappLogo size={28} />
        </Link>
        <Link href={linkedin} target="_blank">
          <LinkedinLogo size={28} />
        </Link>
        <Link href={github} target="_blank">
          <GithubLogo size={28} />
        </Link>
        <Link href={webpage} target="_blank">
          <GoogleChromeLogo size={28} />
        </Link>
      </SocialMediasContainer>      
    </Container>
  )
}
