import React from 'react';
import { SiLinkedin } from 'react-icons/si';
import { SiGithub } from 'react-icons/si';
import { SiWhatsapp } from 'react-icons/si';
import { SiGooglechrome } from 'react-icons/si';

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

      <SocialMediasContainer bg={bg}>        
        <Link href={whatsapp} target="_blank">
          <SiWhatsapp size={24} />
        </Link>

        <Link href={linkedin} target="_blank">
          <SiLinkedin size={24} />
        </Link>

        <Link href={github} target="_blank">
          <SiGithub size={24} />
        </Link>

        <Link href={webpage} target="_blank">
          <SiGooglechrome size={24} />
        </Link>
      </SocialMediasContainer>

      <strong>Desenvolvido por <Link href={webpage} target="_blank">gsantos.dev</Link></strong>
    </Container>
  )
}
