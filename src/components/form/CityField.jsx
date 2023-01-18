import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Field, ErrorMessage } from 'formik';

const CityField = ({ remove, index }) => {
  return (
    <Row className="mt-2">
      <Col>
        <label htmlFor={`cityNamesArray.${index}.name`}>
          {`${index + 1}. city`}
        </label>

        <Field
          name={`cityNamesArray.${index}.name`}
          placeholder="Budapest"
          type="text"
          className="form-control"
        />
        <ErrorMessage
          name={`cityNamesArray.${index}.name`}
          component="div"
          className="field-error"
        />
      </Col>
      <Col className="col">
        <Button type="button" variant="danger" onClick={() => remove(index)}>
          X
        </Button>
      </Col>
    </Row>
  );
};

export default CityField;
