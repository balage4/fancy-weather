import Nav from 'react-bootstrap/Nav';
import ListGroup from 'react-bootstrap/ListGroup';

const ListOfCities = ({ cities }) => (
  <ListGroup
    defaultActiveKey={window.location.href}
    style={{ minWidth: '200px' }}>
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
