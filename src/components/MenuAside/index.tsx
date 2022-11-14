import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import { useAuth } from '../../hooks/useAuth';
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

interface MyMedalProps {
  medal: JSX.Element | string,
  laurels?: JSX.Element,
}

const playerList = [
  {
    id: 'wDgH1YyTYSZQTJfjLPKHB66CrcP2',
    position: 1,
    name: 'Gleydson Albuquerque da Silva Santos',
    avatar: 'https://lh3.googleusercontent.com/a/ALm5wu2pnxnaevEQw0mCITRA6rCo4OuJ8NbjP9_vjllQ=s96-c',
    points: 1270
  },
  {
    id: 'IPDA01mLmtP7lAufLtC1f1N7tFH3',
    position: 2,
    name: 'A2 Tecnologia',
    avatar: 'https://lh3.googleusercontent.com/a/ALm5wu2M_TW3GRyB3zjRHjhTk4wvWPzjdt6XV5YU2Qgz=s96-c',
    points: 120
  },
  {
    id: 'position:3',
    position: 3,
    name: 'Maria Heloisa',
    avatar: '',
    points: 100
  },
  {
    id: 'position:4',
    position: 4,
    name: 'João Miguel',
    avatar: '',
    points: 100
  },
  {
    id: 'position:5',
    position: 5,
    name: 'Luiz Anderson',
    avatar: '',
    points: 89
  },
  {
    id: 'position:6',
    position: 6,
    name: 'Maria Edjane',
    avatar: '',
    points: 88
  },
  {
    id: 'position:7',
    position: 7,
    name: 'Luiz Vitor',
    avatar: '',
    points: 88
  },
  {
    id: 'position:8',
    position: 8,
    name: 'Maria Luiza',
    avatar: '',
    points: 75
  },
  {
    id: 'position:9',
    position: 9,
    name: 'João da Feira',
    avatar: '',
    points: 31
  },
  {
    id: 'position:10',
    position: 10,
    name: 'Maria da Água',
    avatar: '',
    points: 5
  },
]

export const MenuAside:React.FC = () => {
  const { user, handleGoogleSignOut } = useAuth();
  const [myMedal, setMyMedal] = useState<MyMedalProps>({} as MyMedalProps);

  const nameSplited = user.name.split(" ");
  const nameFormatted = nameSplited[1]?.length <= 3 ?
    [nameSplited[0], nameSplited[1], nameSplited[2]].join(' ') :
    [nameSplited[0], nameSplited[1]].join(' ');
  
  useEffect(() => {
    const meOnRanking = playerList.find(player => player.id === user.id);
  
    if (meOnRanking) {
      const medalElement = meOnRanking.position === 1 ? <Icon icon="emojione:1st-place-medal" width="48" height="48" /> :
        meOnRanking.position === 2 ? <Icon icon="emojione:2nd-place-medal" width="40" height="40" /> :
        meOnRanking.position === 3 ? <Icon icon="emojione:3rd-place-medal" width="40" height="40" /> : '';
      
      setMyMedal({
        medal: medalElement,
        laurels: meOnRanking.position <= 3 ? 
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
          <img src={user?.avatar} alt="Foto do usuário" />
          <span>{myMedal?.laurels && myMedal.laurels}</span>
        </div>
        {myMedal?.medal && <small>{myMedal.medal}</small>}
        <strong>{nameFormatted}</strong>
        
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

      <PlayerRanking
        playerList={playerList}
        myId={user.id}
      />

      <SignOut onClick={handleGoogleSignOut}>
        Sair
        <IoMdExit size={18}/>
      </SignOut>
    </Container>
  )
}
