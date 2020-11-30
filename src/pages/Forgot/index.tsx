import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiMail } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import Button from '../../components/Button';

import { Container, Content, InputForgot } from './styles';

const Forgot: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  return (
    <Container>
      <Content>
        <h2>Recuperar senha</h2>
        <Form ref={formRef} onSubmit={() => alert('Em construção')}>
          <InputForgot
            name="email"
            type="email"
            placeholder="Digite seu e-mail"
            icon={FiMail}
          />
          <Button>Recuperar</Button>
        </Form>
        <Link to="/login">Voltar</Link>
      </Content>
    </Container>
  );
};

export default Forgot;
