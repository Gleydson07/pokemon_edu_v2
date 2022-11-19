import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MenuAside } from '../../components/MenuAside';
import { Pokeball } from '../../components/Pokeball';
import { useAuth } from '../../hooks/useAuth';
import { useGame } from '../../hooks/useGame';
import { BaseRoutes } from '../../routes/RouteNames';
import { Board, Container } from './styles';

export default function Dashboard() {
  const navigate = useNavigate();
  const { user, loading } = useAuth();
  const { players } = useGame();

  useEffect(() => {
    if ((!user && !loading) || (false)) {
      return navigate(BaseRoutes.home.route);
    }
  }, [user, loading]);

  if (!user || loading) {
    return <></>;
  }

  return (
    <Container>
      <MenuAside
        players={players}
        user={user}
      />

      <Board>
        <Pokeball/>
      </Board>
    </Container>
  )
}
