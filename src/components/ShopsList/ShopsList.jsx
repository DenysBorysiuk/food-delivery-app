import { List, Item } from './ShopsList.styled';

const ShopsList = ({ setShop, shop }) => {
  const handleClick = e => {
    setShop(e.target.textContent);
  };

  return (
    <List>
      <Item onClick={handleClick} shop={shop === 'All'}>
        All
      </Item>
      <Item onClick={handleClick} shop={shop === 'Mc Donney'}>
        Mc Donney
      </Item>
      <Item onClick={handleClick} shop={shop === 'CFK'}>
        CFK
      </Item>
      <Item onClick={handleClick} shop={shop === 'Pizza P'}>
        Pizza P
      </Item>
      <Item onClick={handleClick} shop={shop === 'Doner'}>
        Doner
      </Item>
      <Item onClick={handleClick} shop={shop === 'Best Desserts'}>
        Best Desserts
      </Item>
    </List>
  );
};

export default ShopsList;
