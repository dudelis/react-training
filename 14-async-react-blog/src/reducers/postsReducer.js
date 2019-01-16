export default (posts = [], action) =>{
    if (action.type === 'FETCH_POSTS'){
        console.log(action);
        return action.payload.data;
    }
    return posts;
}