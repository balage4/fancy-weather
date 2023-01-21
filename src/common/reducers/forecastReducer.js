const forecastReducer = (state, action) => {
  switch (action.type) {
    case 'success':
      return { loading: false, data: action.payload, error: false };
    case 'error':
      return {
        loading: false,
        data: action.payload,
        error: true,
      };
    default:
      return state;
  }
};

export default forecastReducer;
