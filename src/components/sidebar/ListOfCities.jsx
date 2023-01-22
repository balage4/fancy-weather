import { Nav } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';

const ListOfCities = ({ cities }) => (
  <ListGroup defaultActiveKey={window.location.href}>
    {cities.map((city, index) => (
      <ListGroup.Item
        key={`sidebarList_${index}`}
        action
        active={window.location.href.includes(`/city/${city.name}`)}
        href={`/city/${city.name}`}>
        {city.name}
      </ListGroup.Item>
    ))}
  </ListGroup>
);

export default ListOfCities;
