import DishItem from './DishItem/DishItem';
import { List } from './DishList.styled';

const DishList = ({ dishes }) => {
  return (
    dishes && (
      <List>
        {dishes.map(({ _id, img, name, price }) => (
          <DishItem key={_id} id={_id} img={img} name={name} price={price} />
        ))}
      </List>
    )
  );
};

export default DishList;
