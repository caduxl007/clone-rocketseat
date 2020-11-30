import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 1000px;

  margin: 0 auto;
  padding: 0 20px;
`;

export const Header = styled.header`
  padding-top: 32px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;

    > div {
      margin-right: 40px;
    }

    > a {
      color: #737380;
      font-size: 16px;

      &:hover {
        text-decoration: underline;
      }

      @media (max-width: 477px) {
        display: none;
      }
    }
  }

  > a {
    background: #8257e6;
    padding: 12px 32px;
    border-radius: 5px;
    font-size: 14px;
    line-height: 16px;

    font-weight: bold;
    color: #fff;
    text-transform: uppercase;

    &:hover {
      background: #9466ff;
    }
  }
`;

export const Content = styled.div`
  padding-top: 120px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > h2 {
    font-size: 65px;
    font-weight: 700;
    color: #e1e1e6;

    text-align: center;

    width: 100%;
    max-width: 615px;

    > b {
      color: #04d361;
    }
  }

  > div {
    width: 100%;
    max-width: 665px;

    padding: 48px 0 120px 0;

    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      font-size: 18px;
      color: #a8a8b3;
      line-height: 156%;

      text-align: right;
      max-width: 320px;
    }

    > a {
      width: 100%;
      max-width: 298px;
      height: 64px;
      font-size: 16px;

      background: #8257e3;
      color: #fff;
      font-weight: bold;
      border-radius: 5px;

      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        background: #9466ff;
      }
    }
  }

  @media (max-width: 722px) {
    > h2 {
      font-size: 48px;
    }

    > div {
      flex-direction: column;
      justify-content: center;

      padding: 0 0 60px 0;

      > p {
        text-align: center;
        max-width: 100%;
        margin-bottom: 40px;
      }
    }
  }
`;

export const Background = styled.div`
  width: 100%;
  object-fit: cover;
  object-position: center center;
  img {
    max-width: 100%;
  }
`;

export const ContentTwo = styled.section`
  margin-top: 160px;

  > h2 {
    text-align: center;

    width: 100%;
    max-width: 400px;

    font-size: 36px;
    line-height: 42px;
    margin: 0 auto;

    @media (max-width: 477px) {
      font-size: 22px;
      line-height: 25px;
      max-width: 206px;
    }
  }

  > div {
    width: 100%;
    display: grid;
    grid-auto-flow: column;
    grid-row-gap: 64px;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    justify-items: center;
    align-items: center;
    padding-top: 80px;

    @media (max-width: 722px) {
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      grid-row-gap: 0;
      max-width: 100%;
      margin: 0 auto;
      padding-top: 40px;
    }

    p {
      font-size: 30px;
      color: #ccc;

      @media (max-width: 722px) {
        height: 65px;
        width: calc((100% / 3));
      }

      @media (max-width: 477px) {
        font-size: 20px;
      }
    }
  }
`;

export const Info = styled.section`
  margin: 240px auto 0 auto;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-box-align: center;
  align-items: center;

  @media (max-width: 722px) {
    margin: 120px auto 0 auto;
    flex-direction: column;
    align-items: flex-start;
    &:not(:nth-child(2n)) {
      flex-direction: column-reverse;
    }
  }
`;

export const InfoImg = styled.div`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  opacity: 1;
  transition: opacity 500ms ease 0s;
  img {
    max-width: 100%;

    @media (max-width: 722px) {
      max-width: 90%;
    }
  }
`;

export const InfoText = styled.div`
  width: 100%;
  max-width: 460px;
  margin-left: 40px;

  div {
    width: 40px;
    height: 2px;
    background: #04d361;
  }

  h2 {
    color: #e1e1e6;
    font-size: 40px;
    line-height: 107%;
    font-weight: 700;
    padding: 40px 0 24px 0;

    @media (max-width: 477px) {
      font-size: 30px;
    }
  }

  p {
    font-size: 18px;
    line-height: 167%;
    color: #a8a8b3;

    @media (max-width: 477px) {
      font-size: 15px;
    }
  }

  @media (max-width: 722px) {
    margin-left: 0;
    margin-bottom: 40px;
  }

  @media (max-width: 477px) {
    max-width: 287px;
  }
`;
