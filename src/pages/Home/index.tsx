import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../components/Logo';

import Headline from '../../assets/headline.webp';
import Profile from '../../assets/profile.webp';
import Gamification from '../../assets/gamification.webp';
import Community from '../../assets/community.webp';

import {
  Container,
  Header,
  Content,
  Background,
  ContentTwo,
  Info,
  InfoImg,
  InfoText,
} from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Header>
        <div>
          <div>
            <Logo />
          </div>
          <Link to="/">Manifesto</Link>
        </div>

        <Link to="/login">Entrar</Link>
      </Header>
      <Content>
        <h2>
          Evolua rápido como a tecnologia<b>.</b>
        </h2>
        <div>
          <p>
            Junte-se a milhares de devs e acelere na direção dos seus objetivos.
          </p>
          <Link to="/register">EMBARCAR NO FOGUETE</Link>
        </div>
      </Content>
      <Background>
        <img src={Headline} alt="headline" />
      </Background>
      <ContentTwo>
        <h2>Empresas que confiam no nosso trabalho</h2>
        <div>
          <p>GOBO</p>
          <p>ZUP</p>
          <p>NEON</p>
          <p>VanHack</p>
          <p>Zenvia</p>
        </div>
        <Info>
          <InfoImg>
            <img src={Profile} alt="Profile" />
          </InfoImg>
          <InfoText>
            <div />
            <h2>Conexão é a chave para as maiores oportunidades</h2>
            <p>
              Uma comunidade incrível e todo o ecossistema de tecnologia na
              mesma plataforma.
            </p>
          </InfoText>
        </Info>
        <Info>
          <InfoText>
            <div />
            <h2>Conquiste novas habilidades e seja reconhecido</h2>
            <p>
              Uma jornada de aprendizado contínuo, desafios e recompensas que
              vão te levar para o próximo nível.
            </p>
          </InfoText>
          <InfoImg>
            <img src={Gamification} alt="Profile" />
          </InfoImg>
        </Info>

        <Info>
          <InfoImg>
            <img src={Community} alt="Profile" />
          </InfoImg>
          <InfoText>
            <div />
            <h2>Devs melhores, aplicações melhores, um mundo melhor</h2>
            <p>
              Uma experiência com propósito para impulsionar sua carreira e
              transformar o mundo.
            </p>
          </InfoText>
        </Info>
      </ContentTwo>
    </Container>
  );
};

export default Home;
