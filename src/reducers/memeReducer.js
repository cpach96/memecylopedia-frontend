export default function memeReducer(state = { memes: [], requesting: false }, action ) {
    switch (action.type) {
        case 'FETCH_MEMES':
            return {memes: action.payload}

        case 'START_ADDING_MEMES_REQUEST':
            return {
                ...state,
                memes: [...state.memes],
                requesting: true
            }  

        case 'ADD_MEME':
            
            return {...state, memes: [...state.memes, action.payload], requesting: false}
        

        case 'DELETE_MEME':
            let memesDelete = state.memes.map(meme => {
                if (meme.id === action.payload.id) {
                    return action.payload
                } else {
                    return meme
                }
            })
            return {...state, memes: memesDelete}
        case 'EDIT_MEME':
            let memesEdit = state.memes.map(meme => {
                if (meme.id === action.payload.id) {
                    return action.payload
                } else {
                    return meme
                }
            })
            return {...state, memes: memesEdit}
        default:
            return state   
    }
}

