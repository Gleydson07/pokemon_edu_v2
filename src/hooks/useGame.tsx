import { useState, useEffect, useCallback } from 'react';
import { useAuth, UserProps } from "./useAuth";
import { database } from '../api/firebase';
import { ref, set, child, get, onValue } from 'firebase/database';
import { formatUser } from '../utils/formatUser';
import Pokemons, { PokemonProps } from '../api/services/Pokemons';

type updatePoints = {
  points: number,
  maxPoints: number,
}

export function useGame() {
  const { user, setUser } = useAuth();
  const [players, setPlayers] = useState<UserProps[]>([]);
  const [pokemons, setPokemons] = useState<PokemonProps[]>([]);

  const handleUpdatePoints = ({points, maxPoints}: updatePoints) => {
    const currentMaxPoints = points > maxPoints ? points : maxPoints;
    set(ref(database, `users/${user?.id}`), {
      points,
      maxPoints: currentMaxPoints
    })
    .then(() => {
      if (user) {
        setUser({...user, points, maxPoints});
      }
    })
    .catch((error) => console.log({error}));
  };

  const loadPlayers = () => {
    const playerList = ref(database, 'users');
    onValue(playerList, (snapshot) => {
      if (snapshot.exists()) {
        const list:UserProps[] = Object.values((snapshot.val() as UserProps)).map(formatUser);
        setPlayers(list.sort((prev, next) => next.maxPoints - prev.maxPoints));
        setUser(list.find(player => player?.id === user?.id)!);
      }
    });
  };

  const sortPlayers = useCallback(() => {
    user && setPlayers((prevState) => prevState.sort((prev, next) => next.maxPoints - prev.maxPoints));
  }, [user]);

  const loadPokemons = async () => {
    const result = await Pokemons.listAllPokemons();

    if (result?.length)
      setPokemons(result);
  };

  useEffect(() => {
    if (user) {
      sortPlayers();
      loadPlayers();
    };

    if (user && !pokemons.length) {
      loadPokemons();
    }
  }, []);
  
  return {
    players,
    pokemons,
    handleUpdatePoints,
  }
}
