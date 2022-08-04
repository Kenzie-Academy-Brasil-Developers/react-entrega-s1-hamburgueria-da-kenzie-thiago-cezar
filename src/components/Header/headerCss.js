import styled from "styled-components";

export const Header = styled.header`
  padding: 0.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  background-color: var(--grey-0);
  justify-content: space-between;
  width: 100%;
  align-items: center;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  img {
    width: 9.5rem;

    @media (min-width: 768px) {
      margin-left: 2.5rem;
    }
  }

  form {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.5rem;

    height: 3rem;
    width: 12rem;

    background-color: var(--white);
    border-radius: 0.5rem;
    border: 1px solid #333333;

    @media (min-width: 768px) {
      margin-right: 2.5rem;
    }

    input {
      border: none;
      background-color: var(--white);
      outline: none;
      border-radius: 0.5;
      color: var(--gray-20);
      width: 80%;
    }

    button {
      height: 90%;
      text-align: center;

      border: none;
      background-color: var(--Color-primary);
      border-radius: 0.5rem;
      color: var(--white);
      cursor: pointer;
      align-items: center;
      border: 1px solid transparent;
      font-size: 12px;

      &:hover {
        transition: 150ms;
        border: 1px solid var(--gray-100);
        font-size: 13px;
      }
    }
  }
`;
