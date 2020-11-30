import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocus: boolean;
  isEye?: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 50px;

  background: rgb(18, 18, 20);
  border: 2px solid rgb(18, 18, 20);
  color: rgb(255, 255, 255);
  border-radius: 5px;

  display: flex;
  align-items: center;

  ${(props) =>
    props.isFocus &&
    css`
      border-color: rgb(130, 87, 229) !important;
    `}

  & + div {
    margin-top: 8px;
  }

  svg {
    color: rgb(32, 32, 36);
    margin: 0 10px;

    ${(props) =>
      props.isFocus &&
      css`
        color: rgb(130, 87, 229);
      `}
  }

  svg:nth-of-type(2) {
    transition: opacity 0.2s ease 0s;
    cursor: pointer;
    opacity: 0.7;
    color: rgb(130, 87, 229);

    ${(props) =>
      props.isEye &&
      css`
        opacity: 1;
      `}
  }

  > input {
    width: 100%;
    font-size: 16px;
    background: transparent;
    border: 0;
    color: rgb(255, 255, 255);
  }
`;

export const Error = styled.p`
  display: inline-block;
  color: rgb(211, 66, 66);
  padding: 7px 0;
  font-size: 14px;
`;
