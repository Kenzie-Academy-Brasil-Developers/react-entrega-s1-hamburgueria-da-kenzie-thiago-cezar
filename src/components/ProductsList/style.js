import styled from "styled-components";

export const MainSt = styled.main`
  max-width: 100vw;
  padding-left: 2rem;


  @media (min-width: 1024px) {
    display: flex;
  }

  section {
    width: 100%;
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
  }
`;

export const UlSt = styled.ul`
  display: flex;
  height: 22rem;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  overflow-x: auto;
  @media (min-width: 768px) {
    overflow-y: auto;
    flex-direction: row;
    width: 90%;
    margin: 0 auto;
  }
  @media (min-width: 1024px) {
    flex-wrap: wrap;
    height: 100%;
  }
`;

export const LiSt = styled.li`
  display: flex;
  flex-direction: column;
  border: 1px solid #828282;
  text-align: center;
  border-radius: 5px;
  justify-content: space-between;
  min-width: 280px;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    height: 20rem;
    min-width: 200px;
  }

  img {
    width: 11rem;
    height: 11rem;
    margin: 0 auto;

    @media (min-width: 768px) {
      height: 9rem;
      width: 9rem;
    }
  }

  div {
    margin-left: 1rem;

    h3 {
      font-size: 17px;
      font-weight: 700;
      line-height: 24px;
      text-align: left;
    }

    p {
      font-size: 14px;
      font-weight: 400;
      line-height: 17px;
      letter-spacing: 0em;
      text-align: left;
    }

    h4 {
      font-size: 14px;
      font-weight: 600;
      line-height: 24px;
      letter-spacing: 0em;
      text-align: left;
      color: var(--Color-primary);
    }
    button {
      height: 2rem;
      width: 5rem;
      padding: 0, 1rem, 0, 1rem;
      background-color: var(--Color-primary);
      color: var(--white);
      border-radius: 5px;
      font-weight: 600;
      border: none;
      cursor: pointer;
      margin-bottom: 1rem;
      margin-top: 1rem;
    }
  }
`;
