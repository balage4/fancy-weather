import { Field, ErrorMessage } from 'formik';

const CityField = ({ remove, index }) => {
  return (
    <div className="row">
      <div className="col">
        <label htmlFor={`cityNamesArray.${index}.name`}>
          {`${index + 1}. city`}
        </label>
        <Field
          name={`cityNamesArray.${index}.name`}
          placeholder="Budapest"
          type="text"
        />
        <ErrorMessage
          name={`cityNamesArray.${index}.name`}
          component="div"
          className="field-error"
        />
      </div>
      <div className="col">
        <button
          type="button"
          className="secondary"
          onClick={() => remove(index)}>
          X
        </button>
      </div>
    </div>
  );
};

export default CityField;
