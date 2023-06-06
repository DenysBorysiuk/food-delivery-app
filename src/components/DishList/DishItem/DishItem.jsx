import { Item, Thumb, Wrapper } from './DishItem.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../../redux/cart/slice';
import { selectCart } from '../../../redux/cart/selectors';
import toast from 'react-hot-toast';

const DishItem = ({ img, price, name, id }) => {
  const dispatch = useDispatch();
  const { items } = useSelector(selectCart);

  const handleAddToCart = () => {
    const item = items.find(item => item.id === id);
    if (item) {
      return toast.error('Already in cart');
    }
    dispatch(addToCart({ id, img, price, name, amount: 1 }));
  };

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
        <span>${price}.00</span>
        <button type="button" onClick={handleAddToCart}>
          add to Cart
        </button>
      </Wrapper>
    </Item>
  );
};

export default DishItem;
