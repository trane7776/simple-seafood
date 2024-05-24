import axios from 'axios';
import { useEffect, useState } from 'react';

const Home = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get('https://themealdb.com/api/json/v1/1/filter.php?c=Seafood')
      .then((res) => {
        setItems(res.data.meals);
        console.log(res.data.meals);
      })
      .catch((err) => console.log(err));
  }, []);

  const itemsList = items.map(({ idMeal, strMeal, strMealThumb }) => {
    return (
      <section className="card" key={idMeal}>
        <img src={strMealThumb} />
        <section className="content">
          <p>{strMeal}</p>
          <p>#{idMeal}</p>
        </section>
      </section>
    );
  });

  return <div className="items-container">{itemsList}</div>;
};

export default Home;
