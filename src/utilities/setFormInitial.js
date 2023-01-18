import { useSelector } from "react-redux";

const setFormInitial = () => {
  const storageValues = useSelector((state) => state.cities.value);
  if (!storageValues.length) return [{ name: '' }];
  return storageValues;
};

export default setFormInitial;