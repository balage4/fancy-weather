import * as Yup from 'yup';
import errorMessages from '../common/messages/errorMessages';


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
      .shape({ name: Yup.string().required('Please fill in the required field!').matches(/^([^0-9]*)$/, 'Only letters you can use in this field!') })
      .uniqueProperty('name', errorMessages.uniqueStringRequired)
  ),
});

export default validationSchema;