import { useState, useEffect } from 'react';
import { QuestionProps, useAuth, UserProps } from "./useAuth";
import { database } from '../api/firebase';
import { ref, set, onValue } from 'firebase/database';
import { formatUser } from '../utils/formatUser';
import Pokemons, { PokemonProps } from '../api/services/Pokemons';
import { shuffle } from '../utils/shuffle';

type updatePoints = {
  points: number,
  maxPoints: number,
}

export function useGame() {
  const { user, setUser } = useAuth();
  const [loadingGame, setLoadingGame] = useState<Boolean>(false);
  const [players, setPlayers] = useState<UserProps[]>([]);
  const [questions, setQuestions] = useState<any[]>([]);
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

  const loadQuestions = () => {
    const questionList = ref(database, 'questions');
    onValue(questionList, (snapshot) => {
      if (snapshot.exists()) {
        const list:QuestionProps[] = Object.values((snapshot.val() as QuestionProps));
        const data = shuffle(list);
        setQuestions(data.splice(0, 20));
      }
    });
  };

  const loadPokemons = async () => {
    setLoadingGame(true);
    const result = await Pokemons.listAllPokemons();
    let response = [];
    if (result?.length) {
      response = shuffle(result);
      setPokemons(response.map((pokemon, index) => ({...pokemon, questionId: index + 1})));
    }

    setLoadingGame(false);
  };

  useEffect(() => {
    if (user?.id) {
      loadPlayers();
      
      if (!questions.length) {
        loadQuestions();
      }

      if (!pokemons.length) {
        (async () => {
          await loadPokemons();
        })();
      };
    };
  }, []);

  return {
    players,
    pokemons,
    questions,
    loadingGame,
    handleUpdatePoints,
  }
}
