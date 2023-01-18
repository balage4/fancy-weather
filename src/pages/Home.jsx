import { useSelector } from 'react-redux';

const Home = () => {
  const cities = useSelector((state) => state.cities.value);
  console.log(cities);
  return <>Home</>;
};

export default Home;
