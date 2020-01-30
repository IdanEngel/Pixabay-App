let initialState = {
    open: false,
    currentImage: ''
}


const imageReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'modalHandler':
            return {
                ...state,
                open: action.payload
            }
        case 'currentImageHandler':
            return {
                ...state,
                currentImage: action.payload
            }
        default:
            return state
    }
}

export default imageReducer