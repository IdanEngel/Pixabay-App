let initialState = {
    favorite: ''
}


const favoriteReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'onTextChange':
            return {
                ...state,
                searchText: action.payload
            }
        case 'imageHandler':
            return {
                ...state,
                images: action.payload
            }
        default:
            return state
    }
}

export default favoriteReducer