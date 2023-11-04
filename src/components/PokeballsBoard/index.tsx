import React, {forwardRef} from 'react';
import { PokemonProps } from '../../api/services/Pokemons';
import { ChildRef, Pokeball } from '../Pokeball';

import {
  Container
} from './styles';

interface PokeballsBoardProps {
  ref: ChildRef | null;
  pokemons: PokemonProps[]
  onClick: (id: number) => void;
}

export const PokeballsBoard = forwardRef<ChildRef, PokeballsBoardProps>(({ pokemons, onClick }, ref) => {

  return (
    <Container>
      {pokemons.map(pokemon => (
        <Pokeball
          ref={ref}
          key={pokemon.id}
          pokemon={pokemon}
          onClick={onClick}
        />
      ))}
    </Container>
  )
})
