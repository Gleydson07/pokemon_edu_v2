import React, { useRef } from 'react';

import {
  Back,
  Container,
  Content,
  Front,
} from './styles';

interface PokeballProps {

}

export const Pokeball:React.FC<PokeballProps> = ({}) => {
  const pokeballRef = useRef<HTMLDivElement>(null);
  
  const handleClick = () => {
    const pokeball = pokeballRef.current;
    pokeball?.classList.add('rotate');
  }

  return (
    <Container>
      <Content ref={pokeballRef} onClick={handleClick}>
        <Front>
          <div className="sparkle"></div>
          <div className="shadow"></div>
          <div className="pokeball-inner">
              <div className="button">
                <div className="button-outer">
                  <div className="button-inner"></div>
                </div>
              </div>
          </div>
        </Front>
        <Back>
          <div className="content">
            teste
          </div>
        </Back>
      </Content>
    </Container>
  )
}
