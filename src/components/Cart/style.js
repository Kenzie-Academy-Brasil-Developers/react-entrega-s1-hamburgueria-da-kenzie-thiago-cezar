import styled from "styled-components";

export const SectionSt = styled.section`
  @media (min-width: 1024px) {
    width: 22rem;
    max-width: 25rem;
    h2 {
      width: 22rem;
      max-width: 25rem;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: 10rem;
    overflow-y: auto;
    margin-top: 1rem;
    width: 100%;
  }

  h2 {
    display: flex;
    align-items: center;
    background-color: var(--Color-primary);
    padding-left: 1rem;
    height: 3rem;
    width: 15rem;
    border-radius: 5px;
    color: var(--white);
    font-size: 1.3rem;
    font-weight: bold;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 15rem;

    h3 {
      font-size: 1.2rem;
      font-weight: 700;
      line-height: 1.5rem;
      text-align: center;
    }
    p {
      font-size: 14px;
      font-weight: 400;
      line-height: 1.5rem;
      text-align: center;
      color: var(--gray-100);
    }
  }

  span {
    padding-top: 0.5rem;
    display: flex;
    justify-content: space-between;

    border-top: 1px solid var(--gray-100);
    width: 90%;
  }
  button {
    height: 3rem;
    border-radius: 0.5rem;
    cursor: pointer;
    border: none;
    background-color: var(--gray-100);
    color: var(--grey-20);
    margin-right: 4rem;
  }
`;

export const LiSt = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;

  width: 100%;


  section {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    img {
      width: 5rem;
      height: 5rem;
    }

    div {
      height: 4rem;
      h3 {
        font-size: 18px;
        font-weight: 700;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: left;
      }
      p {
        font-size: 12px;
        font-weight: 400;
        line-height: 16px;
        letter-spacing: 0em;
        text-align: left;
      }
    }
  }
  button {
    cursor: pointer;
    border: none;
    background-color: transparent;
    color: var(--gray-100);
    cursor: pointer;

    &:hover {
      color: black;
    }
  }
`;
