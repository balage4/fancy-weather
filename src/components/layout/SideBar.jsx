import { useSelector } from 'react-redux';
import ListOfCities from '../sidebar/ListOfCities';

const Sidebar = () => {
  const citiesStore = useSelector((state) => state.cities.value);
  return <>{citiesStore && <ListOfCities cities={citiesStore} />}</>;
};

export default Sidebar;
