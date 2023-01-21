import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from 'mdb-react-ui-kit';

const ForecastCard = ({ forecastData }) => {
  console.log(forecastData);
  return (
    <>
      <p>{forecastData.city.name}</p>
    </>
  );
};

export default ForecastCard;
