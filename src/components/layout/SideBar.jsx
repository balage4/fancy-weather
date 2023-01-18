import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const cities = useSelector((state) => state.cities.value);

  return (
    <Container>
      {cities.map((city, index) => (
        <p key={`sidebarList_${index}`}>{city.name}</p>
      ))}
    </Container>
  );
};

export default Sidebar;
