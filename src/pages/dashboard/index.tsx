import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { MenuAside } from '../../components/MenuAside';
import { useAuth } from '../../hooks/useAuth';

import {
  Container
} from '../../styles/dashboard';
export default function Dashboard() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user && !loading) {
      router.push('/');
    }
  }, [user, loading]);

  if (!user) {
    return <></>;
  }

  return (
    <Container>
      <MenuAside />
    </Container>
  )
}
