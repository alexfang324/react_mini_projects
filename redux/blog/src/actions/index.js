import jsonPlaceholder from '../api/jsonPlaceholder';

//using redux-thunk to return a async function that will call dispatch manually when ready.
export const fetchPost = () => async (dispatch, getState) => {
  const response = await jsonPlaceholder.get('/posts');

  dispatch({
    type: 'FETCH_POSTS',
    payload: response.data
  });
};

export const fetchUser = (id) => async (dispatch, getState) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({
    type: 'FETCH_USER',
    payload: response.data
  });
};

export const fetchPostsAndUsers = () => async (dispatch, getState) => {};
