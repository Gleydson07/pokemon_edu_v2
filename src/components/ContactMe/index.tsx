import React from 'react';
import { SiLinkedin } from 'react-icons/si';
import { SiGithub } from 'react-icons/si';
import { SiWhatsapp } from 'react-icons/si';
import { SiGooglechrome } from 'react-icons/si';

import {
  Container, SocialMediasContainer
} from './styles';

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
        {whatsapp && 
          <a href={whatsapp} rel="noreferrer" target="_blank">
            <SiWhatsapp size={24} />
          </a>
        }

        {linkedin &&
          <a href={linkedin} rel="noreferrer" target="_blank">
            <SiLinkedin size={24} />
          </a>
        }

        {github &&
          <a href={github} rel="noreferrer" target="_blank">
            <SiGithub size={24} />
          </a>
        }

        {webpage &&
          <a href={webpage} rel="noreferrer" target="_blank">
            <SiGooglechrome size={24} />
          </a>
        }
      </SocialMediasContainer>

      {webpage && 
        <strong>Desenvolvido por <a href={webpage} rel="noreferrer" target="_blank">gsantos.dev</a></strong>
      }
    </Container>
  )
}
