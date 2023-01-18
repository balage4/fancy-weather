import { Formik, Field, Form, ErrorMessage, FieldArray } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { setCities } from '../../Store/features/citiesStore';
import CityField from './CityField';

const CitiesForm = () => {
  const dispatch = useDispatch();

  const setInitialValues = () => {
    const storageValues = useSelector((state) => state.cities.value);
    if (!storageValues.length) return [{ name: '' }];
    return storageValues;
  };

  const handleUpdateCities = (values) => {
    dispatch(setCities(values.cityNamesArray));
    console.log(values);
  };

  const initialValues = {
    cityNamesArray: setInitialValues(),
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
              <div>
                {values.cityNamesArray.length > 0 &&
                  values.cityNamesArray.map((cityName, index) => (
                    <CityField
                      key={`cityNameForm_${index}`}
                      index={index}
                      remove={remove}
                    />
                  ))}
                <button
                  type="button"
                  disabled={values.cityNamesArray.length >= 10}
                  className="secondary"
                  onClick={() => push({ name: '' })}>
                  Add City
                </button>
              </div>
            )}
          </FieldArray>
          <button type="submit">Save cities</button>
        </Form>
      )}
    </Formik>
  );
};

export default CitiesForm;
