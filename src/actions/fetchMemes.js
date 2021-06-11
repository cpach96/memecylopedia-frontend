export function fetchMemes() {
    return (dispatch) => {
    fetch('http://localhost:3001/api/v1/memes')
    .then(response => response.json())
    .then(memes => dispatch({
        type: 'FETCH_MEMES',
        payload: memes
    }))
    }
}