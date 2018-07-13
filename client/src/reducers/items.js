const initialState = {
  items: [],
  loading: false
};

export default (prevState = initialState, action) => {
  switch (action.type) {
    case 'GET_ITEMS':
      return {
        ...prevState,
        items: action.payload,
        loading: false
      };
    case 'SET_LOADING_ITEMS':
      return {
        ...prevState,
        loading: true
      };
    case 'ADD_ITEM':
      return {
        ...prevState,
        items: [ ...prevState.items, action.payload ]
      };
    case 'UPDATE_ITEM':
        return {
          ...prevState,
          items: prevState.items.map(item => item._id === action.id ? (
            {
              ...item,
              ...action.updates
            }
          ) : item)
        };
    case 'REMOVE_ITEM':
        return {
          ...prevState,
          items: prevState.items.filter(item => item._id !== action.id)
        };
    default:
      return prevState;
  }
};
