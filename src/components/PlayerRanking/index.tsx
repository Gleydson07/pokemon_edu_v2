import React, {useState, useEffect} from 'react';
import { UserProps } from '../../hooks/useAuth';
import { useGame } from '../../hooks/useGame';
import { PlayerItem } from './PlayerItem';

import {
  BodyList,
  Container,
  HeaderList,
} from './styles';

interface PlayerRankingProps {
  playerList: UserProps[],
};

export const PlayerRanking:React.FC<PlayerRankingProps> = ({ playerList }: PlayerRankingProps) => {
  const {generateAleatoryPoints} = useGame();
  if (!playerList?.length) {
    return <></>;
  }

  return (
    <Container>
      <button onClick={generateAleatoryPoints}>GENERATE</button>
      <HeaderList>
        <strong>#</strong>
        <strong>Usuário</strong>
        <strong>Pts</strong>
      </HeaderList>
      <BodyList>
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
