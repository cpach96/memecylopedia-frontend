export const editMeme = (formData) => {
    
    return (dispatch) => {
        fetch(`http://localhost:3001/api/v1/memes/${formData.id}`,{
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'PATCH',
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(meme => dispatch({type: 'EDIT_MEME', payload: meme}))
        
    }

}