import styled from "styled-components";

export const CardContainer = styled.section`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100vh;

  div {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    background: var(--dark-grayish-blue-card);
    border-radius: 0.6rem;

    max-width: 500px;
    height: auto;

    @media (max-width: 720px){
      width: calc(100vw - 6rem);
      margin: auto auto;
    }

    h1 {
      color: var(--neon-green-title);
      font-size: 0.85rem;
      letter-spacing: 0.3rem;
      padding: 2.5rem 0;
    }

    p {
      color: var(--light-cyan-text);
      font-size: 1.75rem;  /* 28px*/
      margin: 0 2.5rem;
      padding-bottom: 2.5rem;
      text-align: center;
    }

    & > img {
      width: calc(100% - 5rem);

    }

    button {
      align-items: center;
      justify-content: center;

      background: var(--neon-green-title);
      border: 0 none;
      border-radius: 50%;

      display: flex;
      position: relative;

      top: 2rem;
      height: 4rem;
      width: 4rem;

      &:hover {
        box-shadow: 0 0 10px var(--neon-green-title),
          0 0 40px var(--neon-green-title), 0 0 80px var(--neon-green-title);
      }
      & > img {
        position: relative;
      }
    }
  }
`;
