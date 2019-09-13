import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPostsAndUsers = () => async dispatch => {
  console.log('About to fetch posts');
  await dispatch(fetchPosts());
  console.log('fetched posts!');
}

//chosing not to remove the word return and leaving outer curly braces to help with clarity

export const fetchPosts = () => {
  return async (dispatch) => {
    const response = await jsonPlaceholder.get('/posts');

    dispatch({ type:'FETCH_POSTS', payload: response.data })
  };
};

//following code isn't as simple as possible so that it is clearer to newbie what is going on

export const fetchUser = (id) => {
  return async (dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({ type:'FETCH_USER', payload: response.data });
  };
};

//Below is code for using memoize to fix overfetching proble
//There is a draw back that only 1 call per unique input
/* export const fetchUser = id => dispatch => {
  _fetchUser(id, dispatch);
};

const _fetchUser = _.memoize(async (id, dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({ type: 'FETCH_USER', payload: response.data});
}); */