import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MenuAside } from '../../components/MenuAside';
import { PokeballsBoard } from '../../components/PokeballsBoard';
import { ProgressBar } from '../../components/ProgressBar';
import { useAuth } from '../../hooks/useAuth';
import { useGame } from '../../hooks/useGame';
import { BaseRoutes } from '../../routes/RouteNames';
import {
  Board,
  Container,
  Header,
  Level,
  LogoWrapper,
  ProgressContainer,
  TitlesContainer
} from './styles';

export default function Dashboard() {
  const navigate = useNavigate();
  const { user, loadingAuth } = useAuth();
  const { players, pokemons, loadingGame } = useGame();

  useEffect(() => {
    if ((!user && !loadingAuth) || (false)) {
      return navigate(BaseRoutes.home.route);
    }
  }, [user, loadingAuth]);

  if (!user || loadingAuth) {
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

        {pokemons.length && !loadingGame ? 
          <PokeballsBoard pokemons={pokemons}/> :
          <span>Carregando...</span>
        }
      </Board>
    </Container>
  )
}
