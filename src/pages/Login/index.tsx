import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiMail, FiLock, FiGithub } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { useAuth } from '../../hooks/auth';

import Logo from '../../components/Logo';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, ContentLogin } from './styles';
import getValidationErrors from '../../utils/getValidationsErrors';

interface ISignInFormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [isValueButton, setIsValueButton] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const { signIn } = useAuth();

  const handleSubmit = useCallback(
    async (data: ISignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('Email obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({
          email: data.email,
          password: data.password,
        });

        alert('Logado com sucesso!');

        history.push('/dashboard');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
          return;
        }

        alert('Usuário ou senha incorretos!');
      }
    },
    [history, signIn],
  );

  useEffect(() => {
    if (email && password) {
      setIsValueButton(true);
    } else {
      setIsValueButton(false);
    }
  }, [email, password]);

  return (
    <Container>
      <div>
        <div>
          <Logo />
        </div>
        <h2>Faça seu login na plataforma</h2>
      </div>
      <ContentLogin isValueButton={isValueButton}>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            placeholder="E-mail"
            icon={FiMail}
          />
          <Input
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            placeholder="Senha"
            icon={FiLock}
            type="password"
          />

          <Link to="/forgot">Esqueci minha senha</Link>

          <Button type="submit">entrar</Button>
        </Form>

        <p>
          Não tem uma conta? <Link to="/register">Registre-se</Link>
        </p>

        <div />
        <div>
          <p>Ou entre com</p>
          <Link to="/login">
            <FiGithub size={25} /> GITHUB
          </Link>
        </div>
      </ContentLogin>
    </Container>
  );
};

export default Login;
