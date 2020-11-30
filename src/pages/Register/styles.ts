import styled, { keyframes } from 'styled-components';

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 1000px;

  margin: 0 auto;
  padding: 0 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  animation: ${appearFromRight} 0.7s;

  > div {
    width: 100%;
    max-width: 400px;

    display: flex;
    flex-direction: column;
    align-self: center;
    justify-content: space-between;

    > div {
      padding-bottom: 60px;
    }

    > h2 {
      font-size: 36px;
      color: rgb(225, 225, 230);
      margin-bottom: 24px;

      @media (max-width: 452px) {
        font-size: 30px;
      }
    }

    > p {
      line-height: 26px;
      color: rgb(168, 168, 179);
      margin-bottom: 40px;
      font-size: 16px;
    }

    > a {
      font-size: 14px;
      font-weight: 600;
      color: rgb(130, 87, 230);
      margin: 6px 0px 24px;
      opacity: 0.8;
      transition: opacity 0.2s ease 0s;
      align-self: flex-start;

      display: flex;
      align-items: center;

      &:hover {
        opacity: 1;
      }

      svg {
        margin-right: 16px;
      }
    }
  }

  @media (max-width: 760px) {
    flex-direction: column-reverse;
    padding: 28px 32px 50px 32px;
    height: 100%;

    > div {
      margin: 0 auto;
      align-self: flex-start;
      max-width: 480px;
    }
  }
`;

export const ContentRegister = styled.section`
  width: 100%;
  max-width: 480px;

  padding: 64px;
  background: rgb(32, 32, 36);
  border-radius: 5px;

  @media (max-width: 452px) {
    padding: 32px;
  }

  form {
    h1 {
      font-size: 25px;
      margin-bottom: 39px;
    }

    > a {
      display: block;
      font-size: 14px;
      color: rgb(130, 87, 230);
      font-weight: 600;
      margin: 8px 0px 24px;
      opacity: 0.8;
      transition: opacity 0.2s ease 0s;
      align-self: flex-start;

      &:hover {
        opacity: 1;
      }
    }

    > div {
      > p {
        margin: 24px 0;
        font-size: 14px;
        color: rgb(204, 204, 204);
        text-align: center;

        > a {
          color: rgb(130, 87, 230);
          opacity: 0.8;
          transition: opacity 0.2s ease 0s;
          font-weight: bold;

          &:hover {
            opacity: 1;
          }
        }
      }
    }
  }
`;
