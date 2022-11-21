import React, { useRef } from 'react';
import { PokemonProps } from '../../api/services/Pokemons';

import {
  Back,
  Container,
  Content,
  Front,
} from './styles';

interface PokeballProps {
  pokemon: PokemonProps;
}

export const Pokeball:React.FC<PokeballProps> = ({pokemon}) => {
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
            <img className='avatar' src={pokemon.avatar} alt="" />
            <span className='name'>{pokemon.name}</span>
          </div>
        </Back>
      </Content>
    </Container>
  )
}
