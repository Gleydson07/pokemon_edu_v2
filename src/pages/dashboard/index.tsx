import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { MenuAside } from '../../components/MenuAside';
import { useAuth } from '../../hooks/useAuth';
import { useGame } from '../../hooks/useGame';

import {
  Container
} from '../../styles/dashboard';
export default function Dashboard() {
  const { user, loading } = useAuth();
  const { players } = useGame();
  const router = useRouter();

  useEffect(() => {
    if (!user && !loading) {
      // router.push('/');
    }
  }, [user, loading]);

  if (!user) {
    return <></>;
  }

  return (
    <Container>
      <MenuAside
        players={players}
        user={user}
      />
    </Container>
  )
}
