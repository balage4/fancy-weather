import { useSelector } from 'react-redux';
import ListOfCities from '../sidebar/ListOfCities';

const Sidebar = () => {
  const citiesStore = useSelector((state) => state.cities.value);
  return (
    <>
      {citiesStore.length === 0 && (
        <h4 className="text-center">There are not any saved places yet!</h4>
      )}
      {citiesStore.length > 0 && (
        <>
          <h5 className="text-center">The list of the saved cities</h5>
          <ListOfCities cities={citiesStore} />
        </>
      )}
    </>
  );
};

export default Sidebar;
