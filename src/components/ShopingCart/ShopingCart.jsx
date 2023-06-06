import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCart } from 'redux/cart/selectors';
import { getCartTotal, clearCart } from 'redux/cart/slice';
import { addNewOrder } from '../../services/api';
import CartForm from 'components/ShopingCart/CartForm/CartForm';
import CartList from 'components/ShopingCart/CartList/CartList';
import { Container, Wrapper, ButtonWrapper } from './ShopingCart.styled';
import { Formik, Form } from 'formik';
import schema from './validationSchema';
import { toast } from 'react-hot-toast';

const initialValues = {
  name: '',
  email: '',
  phone: '',
  address: '',
};

const ShopingCart = () => {
  const { totalAmount, items } = useSelector(selectCart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch, items]);

  const handleSubmit = async (values, helpers) => {
    if (!items.length) {
      return toast.error('Cart is empty');
    }

    const oreder = {
      order: Date.now(),
      ...values,
      items,
      totalAmount,
    };

    try {
      await addNewOrder(oreder);
      dispatch(clearCart());
      helpers.resetForm();
      toast.success('Order is successfully');
    } catch (error) {
      toast.error('Something went wrong');
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form>
        <Container>
          <Wrapper>
            <CartForm />
            <CartList />
          </Wrapper>
          <ButtonWrapper>
            <span>Total Price: ${totalAmount}.00</span>
            <button type="submit">Submit</button>
          </ButtonWrapper>
        </Container>
      </Form>
    </Formik>
  );
};

export default ShopingCart;
