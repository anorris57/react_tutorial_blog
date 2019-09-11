import jsonPlaceholder from '../apis/jsonPlaceholder';

//chosing not to remove the word return and leaving outer curly braces to help with clarity

export const fetchPosts = () => {
  return async (dispatch) => {
    const response = await jsonPlaceholder.get('/posts');

    dispatch({ type:'FETCH_POSTS', payload: response.data })
  };
};

export const fetchUsers = (id) => {
  return async (dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({ type:'FETCH_USER', payload: response.data });
  };
};