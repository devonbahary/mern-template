const initialState = {
  samples: [],
  loading: false
};

export default (prevState = initialState, action) => {
  switch (action.type) {
    case 'GET_SAMPLES':
      return {
        ...prevState,
        samples: action.payload,
        loading: false
      };
    case 'SET_LOADING_SAMPLES':
      return {
        ...prevState,
        loading: true
      };
    case 'ADD_SAMPLE':
      return {
        ...prevState,
        samples: [ ...prevState.samples, action.payload ]
      };
    case 'UPDATE_SAMPLE':
        return {
          ...prevState,
          samples: prevState.samples.map(sample => sample._id === action.id ? (
            {
              ...sample,
              ...action.updates
            }
          ) : sample)
        };
    case 'REMOVE_SAMPLE':
        return {
          ...prevState,
          samples: prevState.samples.filter(sample => sample._id !== action.id)
        };
    default:
      return prevState;
  }
};
