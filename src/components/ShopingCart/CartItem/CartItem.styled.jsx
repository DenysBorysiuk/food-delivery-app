import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  align-items: center;
  /* gap: 50px; */
  width: 400px;

  border-radius: 5px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
`;

export const Thumb = styled.div`
  width: 50%;
  height: 100%;
  border-radius: 5px;
  overflow: hidden;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  gap: 16px;

  padding: 10px 0;

  > button {
    border: none;
    background-color: transparent;
    cursor: pointer;
    transition: all 250ms ease-in-out;

    &:hover,
    &:focus {
      color: orangered;
      transform: scale(1.1);
    }
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  > button {
    border-radius: 5px;
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
