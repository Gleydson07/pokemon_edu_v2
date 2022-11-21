import React from 'react';
import { PokemonProps } from '../../api/services/Pokemons';
import { Pokeball } from '../Pokeball';

import {
  Container
} from './styles';

interface PokeballsBoardProps {
  pokemons: PokemonProps[]
}

export const PokeballsBoard:React.FC<PokeballsBoardProps> = ({ pokemons }) => {

  return (
    <Container>
      {pokemons.length && pokemons.map(pokemon => (
        <Pokeball key={pokemon.id} pokemon={pokemon}/>
      ))}
    </Container>
  )
}
