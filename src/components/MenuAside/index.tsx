import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import { useAuth, UserProps } from '../../hooks/useAuth';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { IoMdExit } from 'react-icons/io';
import { PlayerRanking } from '../PlayerRanking';
import laurelsSvg from '../../assets/svgs/laurels.svg';

import {
  BlockInfo,
  Container,
  GameInfo,
  LifeStatus,
  RankingPosition,
  SignOut,
  UserInfo,
} from './styles';
import Image from 'next/image';
import Avatar from 'react-avatar';

interface MyMedalProps {
  medal: JSX.Element | string,
  laurels?: JSX.Element,
};

export interface MenuAsideProps {
  players: UserProps[],
  user: UserProps,
};

const medals = [
  <Icon icon="emojione:1st-place-medal" width="48" height="48" />,
  <Icon icon="emojione:2nd-place-medal" width="40" height="40" />,
  <Icon icon="emojione:3rd-place-medal" width="40" height="40" />,
]

export const MenuAside:React.FC<MenuAsideProps> = ({
  players,
  user,
}) => {
  const { handleGoogleSignOut } = useAuth();
  const [myMedal, setMyMedal] = useState<MyMedalProps>({} as MyMedalProps);

  const avatarFormatted = user?.avatar ? 
    <img src={user.avatar} alt="Foto do jogador" /> : 
    <Avatar name={user?.name} size="36px" maxInitials={2} round />
  
  useEffect(() => {
    if (players?.length && user) {
      const myPosition = players[0].id === user.id ? 1 :
      players[1].id === user.id ? 2 :
      players[2].id === user.id ? 3 : 0;
      
      setMyMedal({
        medal: medals[myPosition - 1],
        laurels: myPosition <= 3 && myPosition > 0 ? 
          <Image
            src={laurelsSvg}
            alt="Coroa de louros"
            width={86}
            height={86}/> 
          : null
      })
    }
  }, [user]);

  return (
    <Container>
      <UserInfo>
        <div>
          {avatarFormatted}
          <span>{myMedal?.laurels && myMedal.laurels}</span>
        </div>
        {myMedal?.medal && <small>{myMedal.medal}</small>}
        <strong>{user?.name}</strong>
        
        <LifeStatus>
          <AiFillHeart color="#d81719" size="24px"/>
          <AiFillHeart color="#d81719" size="24px"/>
          <AiOutlineHeart color="#d81719" size="24px"/>
        </LifeStatus>
      </UserInfo>

      <GameInfo>
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

      <PlayerRanking playerList={players} />

      <SignOut onClick={handleGoogleSignOut}>
        Sair
        <IoMdExit size={18}/>
      </SignOut>
    </Container>
  )
}
