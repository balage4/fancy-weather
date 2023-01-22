import { Formik, Form, FieldArray } from 'formik';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import CityField from './CityField';
import setFormInitial from '../../utilities/setFormInitial';
import { useDispatch } from 'react-redux';
import handleUpdateCities from '../../utilities/handleUpdateCities';
import validationSchema from '../../utilities/validationSchema';

const CitiesForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={setFormInitial()}
      validationSchema={validationSchema}
      enableReinitialize={true}
      onSubmit={(values, { resetForm }) => {
        handleUpdateCities(values, dispatch);
        resetForm();
      }}>
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
