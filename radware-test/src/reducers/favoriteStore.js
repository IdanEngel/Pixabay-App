let initialState = {
    favorits: []
}


const favoriteReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'addToFavorits':
            return {
                ...state,
                favorits: [...state.favorits, action.newItem]
            }
        case 'deleteFromFavorits':
            return {
                ...state,
                favorits: state.favorits.filter(item => item !== action.payload)
            }

        default:
            return state
    }
}

export default favoriteReducer