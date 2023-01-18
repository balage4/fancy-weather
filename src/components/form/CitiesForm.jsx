import { Formik, Form, FieldArray } from 'formik';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import CityField from './CityField';
import setFormInitial from '../../utilities/setFormInitial';
import handleUpdateCities from '../../utilities/handleUpdateCities';

const CitiesForm = () => {
  const initialValues = {
    cityNamesArray: setFormInitial(),
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { resetForm }) =>
        handleUpdateCities(values, resetForm)
      }>
      {({ values }) => (
        <Form>
          <FieldArray name="cityNamesArray">
            {({ remove, push }) => (
              <Container>
                {values.cityNamesArray.length > 0 &&
                  values.cityNamesArray.map((cityName, index) => (
                    <CityField
                      key={`cityNameForm_${index}`}
                      index={index}
                      remove={remove}
                    />
                  ))}
                <Button
                  type="button"
                  disabled={values.cityNamesArray.length >= 10}
                  variant="info"
                  onClick={() => push({ name: '' })}>
                  Add City
                </Button>
              </Container>
            )}
          </FieldArray>
          <Button variant="primary" type="submit">
            Save cities
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default CitiesForm;
