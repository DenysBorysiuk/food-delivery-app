import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  height: calc(100vh - 250px);
`;

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 20px;

  > span {
    font-size: 20px;
    font-weight: 700;
  }

  > button {
    padding: 16px 32px;
    font-size: 16px;
    font-weight: 700;
    border-radius: 20px;
    border: 1px solid black;
    background-color: transparent;
    cursor: pointer;

    transition: all 250ms ease-in-out;

    &:hover,
    &:focus {
      color: white;
      background-color: orangered;
      border-color: transparent;
    }
  }
`;
