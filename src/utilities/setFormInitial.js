import { useSelector } from "react-redux";

const setFormInitial = () => {
  const initialValues = {
    cityNamesArray: [{ name: '' }]
  };

  const storageValues = useSelector((state) => state.cities.value);
  if (!storageValues.length) return initialValues;
  initialValues.cityNamesArray = storageValues;
  return initialValues;
};

export default setFormInitial;