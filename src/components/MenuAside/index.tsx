import React, { useEffect, useState, useCallback } from 'react';
import { Icon } from '@iconify/react';
import { useAuth, UserProps } from '../../hooks/useAuth';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { IoMdExit } from 'react-icons/io';
import { PlayerRanking } from '../PlayerRanking';
import laurelsSvg from '../../assets/svgs/laurels.svg';
import Avatar from 'react-avatar';
import { BaseRoutes } from '../../routes/RouteNames';
import { useNavigate } from 'react-router-dom';

import {
  Container,
  LifeStatus,
  PointsContainer,
  UserGamePoints,
  SignOut,
  UserInfo,
} from './styles';

interface MyMedalProps {
  medal: JSX.Element | string,
  laurels?: JSX.Element,
  amIOnThePodium: boolean,
};

export interface MenuAsideProps {
  players: UserProps[],
  user: UserProps,
};

const medals = [
  <Icon icon="emojione:1st-place-medal" width="48" height="48" />,
  <Icon icon="emojione:2nd-place-medal" width="40" height="40" />,
  <Icon icon="emojione:3rd-place-medal" width="40" height="40" />,
];

export const MenuAside:React.FC<MenuAsideProps> = ({ players, user }) => {
  const navigate = useNavigate();
  const { handleGoogleSignOut, loading } = useAuth();
  const [hasErrorOnUserImage, setHasErrorOnUserImage] = useState<Boolean>(false);
  const [myMedal, setMyMedal] = useState<MyMedalProps>({} as MyMedalProps);

  const onErrorLogo = () => {
    setHasErrorOnUserImage(true);
  };

  const handleSignOut = () => {
    handleGoogleSignOut();

    if (!loading) {
      navigate(BaseRoutes.home.route);
    }
  };

  const isShowLaurelWreath = useCallback(() => {
    if (players.length && user.id) {
      const myPosition = players[0].id === user.id ? 1 :
      players[1].id === user.id ? 2 :
      players[2].id === user.id ? 3 : 0;
      
      setMyMedal({
        amIOnThePodium: myPosition > 0 && myPosition <= 3,
        medal: medals[myPosition - 1],
        laurels: myPosition <= 3 && myPosition > 0 ? 
          <img
            src={laurelsSvg}
            alt="Coroa de louros"
            width={86}
            height={86}
          /> 
          : undefined
      })
    }
  }, [user, players]);

  const showUserHeart = useCallback(() => {
    const lifes = [];
    for (let i = 0; i < 3; i++) {
      if (user.life > i) {
        lifes.push(<AiFillHeart key={i} color="#d81719" size="24px"/>);
      } else {
        lifes.push(<AiOutlineHeart key={i} color="#d81719" size="24px"/>);
      }      
    }

    return lifes;
  }, [user]);
  
  useEffect(() => {
    isShowLaurelWreath();
  }, [isShowLaurelWreath]);

  return (
    <Container>
      <UserInfo>
        <div className="avatar-container">
          <div className="avatar-wrapper">
            {user.avatar && !hasErrorOnUserImage ?
              <img
                className='avatar-image'
                src={user.avatar}
                alt="Foto do usuário"
                loading='lazy'
                onError={onErrorLogo}
              /> : 
              <Avatar name={user.name} size="74px" maxInitials={2} round />
            }
          </div>

          {myMedal.medal &&
            <small className='avatar-medal'>
              {myMedal.medal}
            </small>
          }

          {myMedal.laurels && 
            <span className='avatar-laurels'>
              {myMedal.laurels}
            </span>
          }
        </div>
        <strong>{user.name}</strong>
        
        <LifeStatus>
          {showUserHeart()}
        </LifeStatus>
      </UserInfo>

      <UserGamePoints>
        <PointsContainer>
          <span>Meu recorde</span>
          <strong>{user.maxPoints} <span>{user.points !== 1 ? 'pontos' : 'ponto'}</span></strong>            
        </PointsContainer>
        <PointsContainer>
          <span>Meus pontos atuais</span>
          <strong>{user.points} <span>{user.points !== 1 ? 'pontos' : 'ponto'}</span></strong>            
        </PointsContainer>
      </UserGamePoints>

      <PlayerRanking
        playerList={players}
        amIOnThePodium={myMedal.amIOnThePodium}
      />

      <SignOut onClick={handleSignOut}>
        Sair
        <IoMdExit size={18}/>
      </SignOut>
    </Container>
  );
}
