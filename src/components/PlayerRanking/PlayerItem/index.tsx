import React from 'react';
import { useAuth } from '../../../hooks/useAuth';
import { motion } from 'framer-motion';

import {
  Container
} from './styles';
import Avatar from 'react-avatar';

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

  const avatarFormatted = user?.avatar ? 
    <img src={user.avatar} alt="Foto do jogador" /> : 
    <Avatar name={user?.name} size="36px" maxInitials={2} round />

  return (
    <motion.div layout>
      <Container me={user.id === id}>
        <small>{position}</small>
        <div>
          {avatarFormatted}
        </div>
        <small>{name}</small>
        <strong>{maxPoints}</strong>
      </Container>
    </motion.div>
  )
}
