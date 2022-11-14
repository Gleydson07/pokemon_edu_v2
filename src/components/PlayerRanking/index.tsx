import React from 'react';

import {
  Container, Player
} from './styles';

interface PlayerRankingProps {

}

const playerList = [
  {
    id: 1,
    position: 1,
    name: 'Gleydson Albuquerque da Silva Santos',
    avatar: 'https://lh3.googleusercontent.com/a/ALm5wu2pnxnaevEQw0mCITRA6rCo4OuJ8NbjP9_vjllQ=s96-c',
    points: 127
  },
  {
    id: 2,
    position: 2,
    name: 'A2 Tecnologia',
    avatar: 'https://lh3.googleusercontent.com/a/ALm5wu2M_TW3GRyB3zjRHjhTk4wvWPzjdt6XV5YU2Qgz=s96-c',
    points: 120
  },
  {
    id: 3,
    position: 3,
    name: '',
    avatar: '',
    points: 0
  },
  {
    id: 4,
    position: 4,
    name: '',
    avatar: '',
    points: 0
  },
]

export const PlayerRanking:React.FC<PlayerRankingProps> = ({}) => {

  if (!playerList.length) {
    return <></>;
  }

  return (
    <Container>
      {playerList.map(player => (
        <Player key={player.id}>
          <small>{player.position}</small>
          <img src={player.avatar} alt="Foto do jogador" />
          <small>{player.name}</small>
          <strong>{player.points}</strong>
        </Player>
      ))}
    </Container>
  )
}
