import {
  StyledForm,
  StyledField,
  Label,
  StyledErrorMessage,
} from './CartForm.styled';

const CartForm = props => {
  return (
    <StyledForm>
      <Label>
        Name
        <StyledField type="text" name="name" />
        <StyledErrorMessage component="div" name="name" />
      </Label>

      <Label>
        Email
        <StyledField type="text" name="email" />
        <StyledErrorMessage component="div" name="email" />
      </Label>

      <Label>
        Phone
        <StyledField type="text" name="phone" />
        <StyledErrorMessage component="div" name="phone" />
      </Label>

      <Label>
        Address
        <StyledField type="text" name="address" />
        <StyledErrorMessage component="div" name="address" />
      </Label>
    </StyledForm>
  );
};

export default CartForm;
