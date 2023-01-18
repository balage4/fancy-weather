import { Formik, Form, FieldArray } from 'formik';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import CityField from './CityField';
import setFormInitial from '../../utilities/setFormInitial';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import handleUpdateCities from '../../utilities/handleUpdateCities';
import errorMessages from '../../common/messages/errorMessages';

const CitiesForm = () => {
  const dispatch = useDispatch();

  Yup.addMethod(Yup.object, 'uniqueProperty', function (propertyName, message) {
    return this.test('unique', message, function (value) {
      if (!value || !value[propertyName]) {
        return true;
      }

      if (
        this.parent
          .filter((v) => v !== value)
          .some((v) => v[propertyName] === value[propertyName])
      ) {
        throw this.createError({
          path: `${this.path}.${propertyName}`,
        });
      }

      return true;
    });
  });

  const validationSchema = Yup.object({
    cityNamesArray: Yup.array().of(
      Yup.object()
        .shape({ name: Yup.string() })
        .uniqueProperty('name', errorMessages.uniqueStringRequired)
    ),
  });

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
