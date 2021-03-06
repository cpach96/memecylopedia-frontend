export const addMeme = (formData) => {
    return (dispatch) => {
        dispatch({ type: 'START_ADDING_MEMES_REQUEST '});
        fetch('http://localhost:3001/api/v1/memes',{
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(meme => dispatch({type: 'ADD_MEME', payload: meme}))
        
    }

}