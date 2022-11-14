import React from 'react';
import Avatar from 'react-avatar';
import { useAuth } from '../../hooks/useAuth';

import {
  Container, HeaderList, Player, SignOut
} from './styles';

type player = {
  id: string,
  name: string,
  avatar?: string,
  position: number,
  points: number,
}
interface PlayerRankingProps {
  playerList: player[],
  myId: string
};

export const PlayerRanking:React.FC<PlayerRankingProps> = ({
  playerList,
  myId,
}: PlayerRankingProps) => {
  const { handleGoogleSignOut } = useAuth();

  if (!playerList?.length) {
    return <></>;
  }

  return (
    <Container>
      <HeaderList>
        <strong>#</strong>
        <strong>Usuário</strong>
        <strong>Pts</strong>
      </HeaderList>
      {playerList.map(player => {
        const nameSplited = player.name.split(" ");
        const nameFormatted = nameSplited[1]?.length <= 3 ?
          [nameSplited[0], nameSplited[1], nameSplited[2]].join(' ') :
          [nameSplited[0], nameSplited[1]].join(' ');

        const avatarFormatted = player.avatar ? 
          <img src={player.avatar} alt="Foto do jogador" /> : 
          <Avatar name={player.name} size="36px" maxInitials={2} round />

        return (
          <Player key={player.id} me={myId === player.id}>
            <small>{player.position}</small>
            <div>
              {avatarFormatted}
            </div>
            <small>{nameFormatted}</small>
            <strong>{player.points}</strong>
          </Player>
        )
      })}

      <SignOut onClick={handleGoogleSignOut}>
        Logout
      </SignOut>
    </Container>
  )
}
