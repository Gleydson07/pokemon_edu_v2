import { useState, useEffect, useCallback } from 'react';
import { useAuth, UserProps } from "./useAuth";
import { database } from '../api/firebase';
import { ref, set, child, get, onValue } from 'firebase/database';
import { formatUser } from '../utils/formatUser';

type updatePoints = {
  points: number,
  maxPoints: number,
}

export function useGame() {
  const { user, setUser } = useAuth();
  const [players, setPlayers] = useState<UserProps[]>([]);

  const handleUpdatePoints = ({points, maxPoints}: updatePoints) => {
    set(ref(database, `users/${user?.id}`), {
      points,
      maxPoints
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
      }
    });
  }

  const sortPlayers = useCallback(() => {
    user && setPlayers((prevState) => prevState.sort((prev, next) => next.maxPoints - prev.maxPoints));
  }, [user]);

  useEffect(() => {
    if (user) {
      sortPlayers();
      loadPlayers();
    };
  }, [user]);
  
  return {
    players,
    handleUpdatePoints,
  }
}
