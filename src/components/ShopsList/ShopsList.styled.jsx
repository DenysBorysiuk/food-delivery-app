import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px;

  border-radius: 5px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
`;

export const Item = styled.li`
  padding: 20px 0px;
  width: 300px;

  text-align: center;

  background-color: ${props => (props.shop ? 'orangered' : 'fff')};
  border-radius: 5px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);

  transition: all 250ms ease-in-out;

  &:hover,
  &:focus {
    color: white;
    background-color: orangered;
    border-color: transparent;
  }
`;
