import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';

const ForecastTable = ({ data }) => (
  <Table responsive striped bordered hover>
    <tbody>
      <tr>
        {data.map((day, index) => (
          <td key={`dayForecast_${index}`}>
            <Card style={{ minWidth: '120px' }} id="forecast-card">
              <Card.Body className="text-center">
                <span>{day.name}</span>
                <Card.Title>{day.dayTemp} °C</Card.Title>
                <Card.Text>{day.weatherMain}</Card.Text>
                <Card.Text>{day.weatherDescription}</Card.Text>
                <Card.Img src={day.weatherIconUrl} />
              </Card.Body>
            </Card>
          </td>
        ))}
      </tr>
    </tbody>
  </Table>
);
export default ForecastTable;
