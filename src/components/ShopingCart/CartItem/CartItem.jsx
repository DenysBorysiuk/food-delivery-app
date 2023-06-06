import { Item, Thumb, Wrapper, ButtonWrapper } from './CartItem.styled';
import { useDispatch } from 'react-redux';
import { delFromCart, increase, decrease } from '../../../redux/cart/slice';
import { BsTrash3 } from 'react-icons/bs';

const CartItem = ({ img, price, name, id, amount }) => {
  const dispatch = useDispatch();

  return (
    <Item>
      <Thumb>
        <img
          src={`https://food-delivery-g72t.onrender.com/${img}`}
          alt="food"
        />
      </Thumb>
      <Wrapper>
        <h2>{name}</h2>
        <span>${price * amount}.00</span>
        <ButtonWrapper>
          <button type="button" onClick={() => dispatch(decrease(id))}>
            -
          </button>
          <span>{amount}</span>
          <button type="button" onClick={() => dispatch(increase(id))}>
            +
          </button>
        </ButtonWrapper>
        <button type="button" onClick={() => dispatch(delFromCart(id))}>
          <BsTrash3 size={'20px'} />
        </button>
      </Wrapper>
    </Item>
  );
};

export default CartItem;
