import styled from 'styled-components';

const StyledCalculator = styled.div`
  width: 500px;
  margin: 4rem 0;

  form,
  .input-group {
    display: flex;
    flex-direction: column;
  }

  .input-group {
    margin-bottom: 1rem;

    input {
      margin-top: 0.5rem;
      border: solid 1px var(--neutral-700);
      border-radius: 0.15rem;
      outline: none;
      font-family: inherit;
      font-size: 0.9rem;
      padding: 0.5rem 1rem;

      @media screen and (min-width: 36rem) {
        font-size: 1rem;
      }
    }
  }

  p span {
    display: block;

    &.payments {
      font-size: 1.7rem;
      font-weight: 700;
      margin: 0.5rem 0;
    }
  }

  .button-group {
    button {
      background-color: var(--primary-500);
      color: var(--white);
      border: none;
      border-radius: 0.15rem;
      outline: none;
      width: 7.5rem;
      height: 2.5rem;
      font-family: inherit;
      font-size: 0.95rem;
      font-weight: 700;
      letter-spacing: 0.05rem;
      margin: 0.5rem 1rem 0.5rem 0;
      text-transform: uppercase;
      cursor: pointer;
      transition: background-color 0.1s;

      @media screen and (min-width: 36rem) {
        width: 8.5rem;
        height: 2.7rem;
      }
      @media screen and (min-width: 64rem) {
        &:hover {
          background-color: var(--primary-600);
        }
        &:active {
          background-color: var(--primary-700);
        }
        &:disabled {
          background-color: var(--primary-200);
        }
      }
    }
  }
`;

export default StyledCalculator;
