export default function memeReducer(state = { memes: [] }, action ) {
    switch (action.type) {
        case 'FETCH_MEMES':
            return {memes: action.payload}
        case 'ADD_MEME':
            return {...state, memes: [...state.memes, action.payload]}
        default:
            return state   
    }
}

