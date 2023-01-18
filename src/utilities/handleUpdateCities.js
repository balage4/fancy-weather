import { useDispatch } from "react-redux";

const handleUpdateCities = (values) => {
  const dispatch = useDispatch();
  const cleanedCities = values.cityNamesArray.filter(
    (nameObject) => nameObject.name !== ''
  );
  dispatch(setCities(cleanedCities));
};

export default handleUpdateCities;