import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

import {
  BlockInfo,
  Container,
  GameInfo,
  LifeStatus,
  RankingPosition,
  UserInfo,
} from './styles';
import { PlayerRanking } from '../PlayerRanking';

export const MenuAside:React.FC = () => {
  const { user } = useAuth();
  const nameSplited = user.name.split(" ");
  const nameFormatted = nameSplited[1].length <= 3 ?
    [nameSplited[0], nameSplited[1], nameSplited[2]].join(' ') :
    [nameSplited[0], nameSplited[1]].join(' ');

  return (
    <Container>
      <UserInfo>
        <img src={user?.avatar} alt="Foto do usuário" />
        <strong>{nameFormatted}</strong>
      </UserInfo>

      <GameInfo>
        <LifeStatus>
          <AiFillHeart color="#d81719" size="24px"/>
          <AiFillHeart color="#d81719" size="24px"/>
          <AiOutlineHeart color="#d81719" size="24px"/>
        </LifeStatus>

        <RankingPosition>
          <BlockInfo>
            <small>Pontuação atual:</small>
            <strong>123 <span>pontos</span></strong>            
          </BlockInfo>

          <BlockInfo>
            <small>Minha posição no ranking:</small>
            <strong>12 de 37</strong>
          </BlockInfo>
        </RankingPosition>
      </GameInfo>

      <PlayerRanking/>
    </Container>
  )
}
