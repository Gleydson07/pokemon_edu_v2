import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MenuAside } from '../../components/MenuAside';
import { PokeballsBoard } from '../../components/PokeballsBoard';
import { ProgressBar } from '../../components/ProgressBar';
import { useAuth } from '../../hooks/useAuth';
import { useGame } from '../../hooks/useGame';
import { BaseRoutes } from '../../routes/RouteNames';
import { Board, Container, Header, Level, LogoWrapper, ProgressContainer, TitlesContainer } from './styles';

export default function Dashboard() {
  const navigate = useNavigate();
  const { user, loading } = useAuth();
  const { players, pokemons } = useGame();

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
        <Header>
          <LogoWrapper>
            <h1>PokEdu</h1>
            <h4>Aprenda jogando</h4>
          </LogoWrapper>
          <ProgressContainer>
            <TitlesContainer>
              <Level>Nível <strong>1</strong></Level>
              <Level>Nível <strong>2</strong></Level>
            </TitlesContainer>
            <ProgressBar progress={70}/>
          </ProgressContainer>
        </Header>
        <PokeballsBoard pokemons={pokemons}/>
      </Board>
    </Container>
  )
}
