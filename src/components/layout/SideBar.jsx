import { Nav } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const citiesStore = useSelector((state) => state.cities.value);

  return (
    <>
      {citiesStore.map((city, index) => (
        <Nav.Link key={`sidebarList_${index}`} href={`/city/${city.name}`}>
          {city.name}
        </Nav.Link>
      ))}
    </>
  );
};

export default Sidebar;
