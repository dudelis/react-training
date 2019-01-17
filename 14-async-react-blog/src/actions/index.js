import jsonplaceholder from '../api/jsonplaceholder';
import _ from 'lodash';

export const fetchPosts = () => {
    return async dispatch => {
        const response  = await jsonplaceholder.get('/posts');

        dispatch( {
            type: 'FETCH_POSTS',
            payload: response.data //we should return exactly the data needed by action!!!
        });
    }    
}

export const fetchUser = id => async dispatch => {
    const response  = await jsonplaceholder.get(`/users/${id}`);
    dispatch( {
        type: 'FETCH_USER',
        payload: response.data //we should return exactly the data needed by action!!!
    });
}

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());
    _.chain(getState().posts)
        .map('userId')
        .uniq()
        .forEach(id => dispatch(fetchUser(id)))
        .value();

}


//memoized version
// export const fetchUser = id => dispatch => {
//     _fetchUser(id, dispatch);
// }
// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const response  = await jsonplaceholder.get(`/users/${id}`);
//     dispatch( {
//         type: 'FETCH_USER',
//         payload: response.data //we should return exactly the data needed by action!!!
//     });
// })