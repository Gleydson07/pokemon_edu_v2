import React, {} from 'react';
import { UserProps } from '../../hooks/useAuth';
import { PlayerItem } from './PlayerItem';

import {
  BodyList,
  Container,
  HeaderList,
} from './styles';

interface PlayerRankingProps {
  playerList: UserProps[],
  amIOnThePodium: boolean,
};

export const PlayerRanking:React.FC<PlayerRankingProps> = ({
  playerList,
  amIOnThePodium,
}: PlayerRankingProps) => {

  if (!playerList.length) {
    return <></>;
  }

  return (
    <Container>
      <HeaderList>
        <strong>#</strong>
        <strong>Usuário</strong>
        <strong>Pts</strong>
      </HeaderList>
      <BodyList applyHeight={amIOnThePodium}>
        {playerList.map((player, index) => (
          <PlayerItem
            key={player.id}
            id={player.id}
            name={player.name}
            avatar={player.avatar}
            maxPoints={player.maxPoints}
            position={index + 1}
          />
        ))}
      </BodyList>
    </Container>
  )
}
