import React from 'react';
import { FiLock, FiMail, FiUser, FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import Logo from '../../components/Logo';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, ContentRegister } from './styles';

const Register: React.FC = () => {
  return (
    <Container>
      <ContentRegister>
        <form>
          <h1>Crie sua conta</h1>
          <Input name="email" placeholder="Seu E-mail" icon={FiMail} />
          <Input name="name" placeholder="Seu nome" icon={FiUser} />
          <Input
            name="password"
            placeholder="Sua senha"
            icon={FiLock}
            type="password"
          />

          <Input
            name="password"
            placeholder="Confirme sua senha"
            icon={FiLock}
            type="password"
          />

          <div>
            <p>
              Ao se registrar, você aceita nossos{' '}
              <Link to="/terms">termos de uso</Link> e a nossa{' '}
              <Link to="/privacy">política de privacidade</Link>.
            </p>
          </div>

          <Button type="submit">cadastrar</Button>
        </form>
      </ContentRegister>
      <div>
        <div>
          <Logo />
        </div>
        <h2>
          Junte-se a milhares de devs e acelere na direção dos seus objetivos
        </h2>

        <p>Mais de 200 mil boosters já estão conectados.</p>

        <Link to="/login">
          <FiArrowLeft size={20} /> Voltar para login
        </Link>
      </div>
    </Container>
  );
};

export default Register;
