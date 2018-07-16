import axios from 'axios';

// GET_SAMPLES
export const getSamples = () => dispatch => {
  dispatch(setLoadingSamples());
  axios.get('/api/samples').then(res =>
    dispatch({
      type: 'GET_SAMPLES',
      payload: res.data
    })
  );
};

// SET_LOADING_SAMPLES
export const setLoadingSamples = () => ({
  type: 'SET_LOADING_SAMPLES'
});

// ADD_SAMPLE
export const addSample = sample => dispatch => {
  axios.post('/api/samples', sample).then(res =>
    dispatch({
      type: 'ADD_SAMPLE',
      payload: res.data
    })
  );
};

// UPDATE_SAMPLE
export const updateSample = (id, updates) => dispatch => {
  axios.patch(`/api/samples/${id}`, updates).then(res =>
    dispatch({
      type: 'UPDATE_SAMPLE',
      updates,
      id
    })
  )
};

// REMOVE_SAMPLE
export const removeSample = id => dispatch => {
  axios.delete(`/api/samples/${id}`).then(res =>
    dispatch({
      type: 'REMOVE_SAMPLE',
      id
    })
  );
};
