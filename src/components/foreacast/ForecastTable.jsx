import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';

const ForecastTable = ({ data }) => {
  return (
    <Table responsive striped bordered hover>
      <tbody className="center">
        <tr>
          {data.map((day, index) => (
            <td key={`dayForecast_${index}`}>
              <Card className="center" style={{ minWidth: '120px' }}>
                <Card.Body>
                  <span>{day.name}</span>
                  <Card.Title>{day.dayTemp} °C</Card.Title>
                  <Card.Text>{day.weatherMain}</Card.Text>
                  <Card.Text>{day.weatherDescription}</Card.Text>
                  <Card.Img variant="bottom" src={day.weatherIconUrl} />
                </Card.Body>
              </Card>
            </td>
          ))}
        </tr>
      </tbody>
    </Table>
  );
};
export default ForecastTable;
