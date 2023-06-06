import { useState, useEffect } from 'react';
import { getAllFoods } from 'services/api';
import FoodList from 'components/DishList/DishList';
import ShopsList from 'components/ShopsList/ShopsList';

const styles = {
  container: {
    display: 'flex',
    gap: 16,
    height: 'calc(100vh - 84px)',
  },
};

const Shop = () => {
  const [dishes, setDishes] = useState([]);
  const [shop, setShop] = useState('All');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await getAllFoods(signal);
        setDishes(data);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };

    fetchData();
  }, []);

  const FilteredDishes = () => {
    if (!shop) {
      return dishes;
    }

    if (shop === 'All') {
      return dishes;
    }

    return dishes.filter(dish => dish.shop.includes(shop));
  };

  return (
    <div style={styles.container}>
      <ShopsList setShop={setShop} shop={shop} />
      {isLoading ? <h1>Loading...</h1> : <FoodList dishes={FilteredDishes()} />}
    </div>
  );
};

export default Shop;
