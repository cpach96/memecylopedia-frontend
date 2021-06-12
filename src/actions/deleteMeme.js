export const deleteMeme = (memeId) => {
    
    return (dispatch) => {
         dispatch({ type: "START_DELETE_MEME_REQUEST"});
         fetch(`http://localhost:3001/api/v1/memes/${memeId}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(meme => dispatch({type: 'DELETE_MEME', payload: meme}))
    }
}