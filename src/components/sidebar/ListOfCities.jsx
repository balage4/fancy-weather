import ListGroup from 'react-bootstrap/ListGroup';

const ListOfCities = ({ cities }) => {
  return (
    <ListGroup
      defaultActiveKey={window.location.href}
      style={{ minWidth: '200px' }}>
      {cities.map((city, index) => {
        const decoded = decodeURI(window.location.href);
        return (
          <ListGroup.Item
            key={`sidebarList_${index}`}
            action
            active={decoded.includes(`/city/${city.name}`)}
            href={`/city/${city.name}`}>
            {city.name}
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
};

export default ListOfCities;
