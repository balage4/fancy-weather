

const handleValidCities = (citiesStore, cityName, navigate) => {
  const citiesArray = citiesStore.map((city) => city.name);
  if (!cityName || !cityName.length || !citiesArray.includes(cityName)) navigate('/');
}
export default handleValidCities;