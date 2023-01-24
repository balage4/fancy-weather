const handleFetchErrors = (err,weatherDispatch,forecastDispatch) => {
  weatherDispatch({
    type: 'error',
    payload: err.message,
  });
  forecastDispatch({
    type: 'error',
    payload: err.message,
  });
};

export default handleFetchErrors;
;