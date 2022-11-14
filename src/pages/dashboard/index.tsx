import Router, { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth';

import {
  Container
} from '../../styles/dashboard';

interface DashboardProps {

}

export default function Dashboard({}) {  
  const { user, loading, handleGoogleSignOut } = useAuth();
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
      <button onClick={handleGoogleSignOut}>Desconectar</button>
      <p>Dashboard</p>

      <h1>{user?.name}</h1>
      <p>{user?.id}</p>
      <p>{user?.email}</p>
      {user?.avatar && <img src={user?.avatar} alt=""/>}
    </Container>
  )
}
