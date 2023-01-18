import { setCities } from '../Store/features/citiesStore';

const handleUpdateCities = (values, dispatch) => {
  const cleanedCities = values.cityNamesArray.filter(
    (nameObject) => nameObject.name !== ''
  );
  dispatch(setCities(cleanedCities));
};

export default handleUpdateCities;