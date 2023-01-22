import { Card, Table } from 'react-bootstrap';

const ForecastTable = ({ data }) => {
  return (
    <Table responsive striped bordered hover size="md">
      <tbody className="center">
        <tr>
          {data.map((day, index) => (
            <td key={`dayForecast_${index}`}>
              <Card className="center">
                <Card.Body>
                  <span>{day.monthName}</span>
                  <Card.Title>{day.dateNumber}</Card.Title>
                  <Card.Text>{day.weatherMain}</Card.Text>
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
