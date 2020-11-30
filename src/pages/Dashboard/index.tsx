import React from 'react';
import { useAuth } from '../../hooks/auth';

import { Container } from './styles';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <Container>
      <div>
        <h2>Em construção!!!</h2>
        <button type="button" onClick={signOut}>
          Sair
        </button>
      </div>
    </Container>
  );
};

export default Dashboard;
