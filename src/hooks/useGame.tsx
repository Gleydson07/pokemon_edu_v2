import { useState, useEffect } from 'react';
import { useAuth, UserProps } from "./useAuth";
import { database } from '../api/firebase';
import {
  ref,
  set,
  child,
  get,
  update,
} from 'firebase/database';
import { formatUser } from '../utils/formatUser';

export function useGame() {
  const { user, setUser } = useAuth();
  const [players, setPlayers] = useState<UserProps[]>([]);

  const handleUpdatePoints = async ({points, maxPoints}) => {
    set(ref(database, `users/${user.id}`), {
      points,
      maxPoints
    })
    .then(() => {
      setUser({...user, points, maxPoints});
    })
    .catch((error) => console.log({error}));
  };

  const loadPlayers = async () => {
    const dbRef = ref(database);
    get(child(dbRef, 'users')).then((snapshot) => {
      if (snapshot.exists()) {
        const list:UserProps[] = Object.values(snapshot.val()).map(formatUser);        
        setPlayers(list.sort((prev, next) => next.maxPoints - prev.maxPoints));
      }
    }).catch((error) => {
      console.error(error);
    });
  }

  const sortPlayers = () => {
    if (players?.length) {
      setPlayers((prevState) => prevState.sort((prev, next) => next.maxPoints - prev.maxPoints));
    }
  };

  const generateAleatoryPoints = () => {
    const position = Math.round(Math.random() * 10);
    const maxPoints = Math.round(Math.random() * 1000);
    const playersIds = players.map(player => player.id);

    let player = players.find(player => player.id === playersIds[position]);
    const otherPlayers = players.filter(player => player.id !== playersIds[position]);
    player = {
      ...player,
      maxPoints,
    }

    setPlayers([
      ...otherPlayers,
      player
    ]);
  };

  useEffect(() => {
    sortPlayers();
  }, [user]);

  useEffect(() => {    
    console.log('useGame: ', {players})
  }, [players]);
  
  useEffect(() => {
    loadPlayers();
  }, []);
  
  return {
    players,
    handleUpdatePoints,
    generateAleatoryPoints,
  }
}
