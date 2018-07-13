import axios from 'axios';

// GET_ITEMS
export const getItems = () => dispatch => {
  dispatch(setLoadingItems());
  axios.get('/api/items').then(res =>
    dispatch({
      type: 'GET_ITEMS',
      payload: res.data
    })
  );
};

// SET_LOADING_ITEMS
export const setLoadingItems = () => ({
  type: 'SET_LOADING_ITEMS'
});

// ADD_ITEM
export const addItem = item => dispatch => {
  axios.post('/api/items', item).then(res =>
    dispatch({
      type: 'ADD_ITEM',
      payload: res.data
    })
  );
};

// UPDATE_ITEM
export const updateItem = (id, updates) => dispatch => {
  axios.patch(`/api/items/${id}`, updates).then(res =>
    dispatch({
      type: 'UPDATE_ITEM',
      updates,
      id
    })
  )
};

// REMOVE_ITEM
export const removeItem = id => dispatch => {
  axios.delete(`/api/items/${id}`).then(res =>
    dispatch({
      type: 'REMOVE_ITEM',
      id
    })
  );
};
