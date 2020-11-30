import React, { useCallback, useRef } from 'react';
import { FiLock, FiMail, FiUser, FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import Logo from '../../components/Logo';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, ContentRegister } from './styles';
import api from '../../services/api';
import getValidationErrors from '../../utils/getValidationsErrors';

interface ISingUpData {
  name: string;
  email: string;
  password: string;
  passwordRepeat: string;
}

const Register: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: ISingUpData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string()
            .required('Email obrigatório')
            .email('Digite um email válido'),
          password: Yup.string().min(6, 'No mínimo 6 dígitos'),
          passwordRepeat: Yup.string()
            .required('Confirmação de senha é obrigatório')
            .oneOf([Yup.ref('password'), ''], 'Senhas não conferem'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/users', data);

        history.push('/login');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
          return;
        }

        alert('Esse email já existe!');
      }
    },
    [history],
  );

  return (
    <Container>
      <ContentRegister>
        <Form ref={formRef} onSubmit={handleSubmit}>
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
            name="passwordRepeat"
            placeholder="Confirme sua senha"
            icon={FiLock}
            type="password"
          />

          <div>
            <p>
              Ao se registrar, você aceita nossos{' '}
              <Link to="/register">termos de uso</Link> e a nossa{' '}
              <Link to="/register">política de privacidade</Link>.
            </p>
          </div>

          <Button type="submit">cadastrar</Button>
        </Form>
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
