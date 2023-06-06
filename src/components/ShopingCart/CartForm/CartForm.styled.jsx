import styled from '@emotion/styled';
import { Field, ErrorMessage } from 'formik';

export const StyledForm = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;
  gap: 20px;

  padding: 30px 60px;
  width: 550px;

  border-radius: 5px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  width: 100%;
`;

export const StyledField = styled(Field)`
  width: 100%;
  padding: 8px 16px;
  border-radius: 5px;
  border: 1px solid black;
  background-color: transparent;
  transition: all 250ms ease-in-out;

  &::placeholder {
    color: black;
  }
`;

export const StyledErrorMessage = styled(ErrorMessage)`
  position: absolute;
  bottom: -15px;
  left: 0;
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;
