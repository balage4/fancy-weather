const handleResponses = (responseArray, weatherDispatch, forecastDispatch) => {
  weatherDispatch({
    type: 'success',
    payload: responseArray[0],
  });
  forecastDispatch({
    type: 'success',
    payload: responseArray[1],
  });
};

export default handleResponses;
