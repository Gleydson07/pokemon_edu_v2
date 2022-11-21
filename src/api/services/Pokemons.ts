import { apiPokemon } from "../apiPokemon";

export interface PokemonProps {
  id: number,
  name: string,
  avatar?: string
}

class Pokemons {
  async listAllPokemons() {
    try {
      const pokemonList = await apiPokemon.listPokemons();
      const pokemons: PokemonProps[] = [];

      for (let i = 0; i < pokemonList?.results.length; i++) {
        await apiPokemon.getPokemonByName(pokemonList?.results[i]?.name)
        .then(response => pokemons.push({
          id: response.id,
          name: response.name,
          avatar: response.sprites?.other?.dream_world?.front_default || undefined
        }))
      }

      return pokemons;
    } catch (error) {
      console.log(error);
    }
  }
};

export default new Pokemons();