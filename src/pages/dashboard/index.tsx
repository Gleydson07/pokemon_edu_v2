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
  LogoWrapper,
  ProgressContainer,
} from './styles';
import ModalQuestion, { SubmitForm } from '../../components/ModalQuestion';
import ReactPortal from '../../components/ReactPortal';
import { ChildRef } from '../../components/Pokeball';

export default function Dashboard() {
  const pokeballRef = React.useRef<ChildRef | null>(null);
  const navigate = useNavigate();
  const { user, loadingAuth } = useAuth();
  const { players, pokemons, loadingGame } = useGame();
  const [showModal, setShowModal] = React.useState(false);
  const [questionId, setQuestionId] = React.useState(0);

  function handleSelectPokeball(id: number) {
    if (id) {
      setQuestionId(id);
      setShowModal(true);
    }
  }

  function handleSubmitResponse(data: SubmitForm) {
    console.log(data);
    setShowModal(false);
    pokeballRef.current?.showPokemon();
  }

  useEffect(() => {
    if ((!user && !loadingAuth) || (false)) {
      return navigate(BaseRoutes.home.route);
    }
  }, [user, loadingAuth]);

  if (!user || loadingAuth) {
    return <></>;
  }

  return (
    <>
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
              <ProgressBar progress={70}/>
            </ProgressContainer>
          </Header>

          {pokemons.length && !loadingGame ? 
            <PokeballsBoard
              ref={pokeballRef}
              pokemons={pokemons}
              onClick={(id) => handleSelectPokeball(id)}
            /> :
            <span>Carregando...</span>
          }
        </Board>
      </Container>
      
      {!showModal ? '' : (
        <ReactPortal portalId='modal'>
          <ModalQuestion
            showOverlay
            questionId={questionId}
            onSubmit={handleSubmitResponse}
          />
        </ReactPortal>
      )}
    </>
  )
}
