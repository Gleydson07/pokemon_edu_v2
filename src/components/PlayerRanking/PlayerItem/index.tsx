import React, { useState } from 'react';
import { useAuth } from '../../../hooks/useAuth';
import { motion } from 'framer-motion';
import Avatar from 'react-avatar';

import {
  Container
} from './styles';

export interface PlayerItemProps {
  id: string,
  name: string,
  maxPoints: number,
  position: number,
  avatar?: string,
}

export const PlayerItem:React.FC<PlayerItemProps> = ({
  id,
  name,
  avatar,
  maxPoints,
  position,
}) => {
  const {user} = useAuth();
  const [hasErrorOnUserImage, setHasErrorOnUserImage] = useState<Boolean>(false);

  const onErrorLogo = () => {
    setHasErrorOnUserImage(true);
  };

  return (
    <motion.div layout>
      <Container me={user?.id === id}>
        <small>{position}</small>
        <div>
          {avatar && !hasErrorOnUserImage ?
            <img
              className='avatar-image'
              src={avatar}
              alt="Foto do jogador"
              loading='lazy'
              onError={onErrorLogo}
            /> : 
            <Avatar name={name} size="36px" maxInitials={2} round />
          }
        </div>
        <small>{name}</small>
        <strong>{maxPoints}</strong>
      </Container>
    </motion.div>
  )
}
