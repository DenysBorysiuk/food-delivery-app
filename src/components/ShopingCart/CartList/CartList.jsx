import { useSelector } from 'react-redux';
import { selectCart } from '../../../redux/cart/selectors';
import CartItem from '../CartItem/CartItem';
import { List, Text } from './CartList.styled';

const CartList = () => {
  const { items } = useSelector(selectCart);

  return items.length > 0 ? (
    <List>
      {items.map(({ id, img, name, price, amount }) => (
        <CartItem
          key={id}
          id={id}
          img={img}
          name={name}
          price={price}
          amount={amount}
        />
      ))}
    </List>
  ) : (
    <List>
      <Text>Cart is empty</Text>
    </List>
  );
};

export default CartList;
