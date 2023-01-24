import { Formik, Form, FieldArray } from 'formik';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import CityField from './CityField';
import setFormInitial from '../../utilities/setFormInitial';
import { useDispatch } from 'react-redux';
import handleUpdateCities from '../../utilities/handleUpdateCities';
import validationSchema from '../../utilities/validationSchema';
import FormHead from './FormHead';

const CitiesForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={setFormInitial()}
      validationSchema={validationSchema}
      enableReinitialize={true}
      validateOnChange
      validateOnBlur
      onSubmit={(values, { resetForm }) => {
        handleUpdateCities(values, dispatch);
        resetForm();
      }}>
      {({ values }) => (
        <Form>
          <FormHead arrayLength={values.cityNamesArray.length} />
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
                  className="m-2"
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
