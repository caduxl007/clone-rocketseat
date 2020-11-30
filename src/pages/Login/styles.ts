import styled, { keyframes, css } from 'styled-components';

interface ContentLoginProps {
  isValueButton?: boolean;
}

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
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

  animation: ${appearFromLeft} 1s;

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
      font-size: 56px;
      line-height: 64px;
      color: rgb(225, 225, 230);
      margin-bottom: 24px;

      @media (max-width: 452px) {
        font-size: 30px;
        max-width: 200px;
      }
    }
  }

  @media (max-width: 760px) {
    flex-direction: column;
    padding: 28px 32px 50px 32px;
    height: 100%;

    > div {
      margin: 0 auto;
      align-self: flex-start;
      max-width: 480px;
    }
  }
`;

export const ContentLogin = styled.section<ContentLoginProps>`
  width: 100%;
  max-width: 480px;

  padding: 64px;
  background: rgb(32, 32, 36);
  border-radius: 5px;

  @media (max-width: 452px) {
    padding: 32px;
  }

  form {
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

    button {
      opacity: 0.5;
      cursor: no-drop;

      ${(props) =>
        props.isValueButton &&
        css`
          opacity: 1;
          cursor: pointer;
        `}
    }
  }

  > p {
    margin-top: 24px;
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
  > div:nth-of-type(1) {
    position: relative;
    width: 100%;
    margin: 24px 0;

    &::before {
      content: '';
      width: calc(50% - 25px);
      position: absolute;
      left: 0;
      top: 50%;
      height: 1px;
      background: rgb(40, 39, 47);
    }

    &::after {
      content: '';
      width: calc(50% - 25px);
      position: absolute;
      right: 0;
      top: 50%;
      height: 1px;
      background: rgb(40, 39, 47);
    }
  }

  > div:nth-of-type(2) {
    margin-top: 50px;
    display: flex;

    p {
      color: rgb(225, 225, 230);
      font-size: 14px;
      white-space: nowrap;
      margin-right: 24px;
      align-self: center;
    }

    a {
      width: 100%;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: center;
      justify-content: center;
      background: rgb(41, 41, 46);
      border-radius: 5px;
      border: 0px;
      color: rgb(255, 255, 255);
      height: 50px;
      transition: background 0.2s ease 0s;
      font-size: 16px;
      font-weight: bold;
      text-align: center;
      text-transform: uppercase;

      &:hover {
        background: rgb(124, 98, 212);

        svg {
          background: rgb(255, 255, 255);
          color: rgb(124, 98, 212);
        }
      }

      svg {
        width: 20px;
        height: 20px;
        padding: 2px;
        border-radius: 50%;
        margin-right: 10px;
        background: rgb(124, 98, 212);
        color: black;
        transition: all 0.2s ease 0s;
      }
    }
  }
`;
