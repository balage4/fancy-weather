import { Formik, Form, FieldArray } from 'formik';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import CityField from './CityField';
import setFormInitial from '../../utilities/setFormInitial';
import { useDispatch } from 'react-redux';
import handleUpdateCities from '../../utilities/handleUpdateCities';
import validationSchema from '../../utilities/validationSchema';
import FormHead from './FormHead';
import { useState } from 'react';
import AlertAbsolute from '../layout/AlertAbsolute';
import messages from '../../common/messages/messages';

const CitiesForm = () => {
  const dispatch = useDispatch();
  const [successSave, setSuccessSave] = useState(false);

  const handleSuccessSaveAlert = () => {
    setSuccessSave(true);
    setTimeout(() => {
      setSuccessSave(false);
    }, 2500);
  };

  return (
    <Formik
      initialValues={setFormInitial()}
      validationSchema={validationSchema}
      enableReinitialize={true}
      validateOnChange
      validateOnBlur
      onSubmit={(values, { resetForm }) => {
        handleUpdateCities(values, dispatch);
        handleSuccessSaveAlert();
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
          {successSave && <AlertAbsolute message={messages.successSave} />}
        </Form>
      )}
    </Formik>
  );
};

export default CitiesForm;
