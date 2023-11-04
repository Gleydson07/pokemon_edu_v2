import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { PokemonProps } from '../../api/services/Pokemons';

import {
  Back,
  Container,
  Content,
  Front,
} from './styles';

export interface ChildRef {
  showPokemon: () => void;
}

interface PokeballProps {
  pokemon: PokemonProps;
  onClick: (id: number) => void;
}

export const Pokeball = forwardRef<ChildRef, PokeballProps>(({pokemon, onClick}, ref) => {
  const pokeballRef = useRef<HTMLDivElement>(null);
  
  useImperativeHandle(ref, () => ({
    showPokemon: () => {
      console.log('showPokemon', pokeballRef.current, pokemon)
      const pokeball = pokeballRef.current;
      pokeball?.classList.add('rotate');
    }
  }));

  return (
    <Container>
      <Content ref={pokeballRef} onClick={() => onClick(pokemon.id)}>
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
})
