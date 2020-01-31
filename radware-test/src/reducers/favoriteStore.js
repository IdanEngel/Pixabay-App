let initialState = {
    favorits: [],
    editOrDelete: true,
    willEdit: false,
    saveClick: false,
    changedPictureValue: ''
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
        case 'buttonHandler':
            return {
                ...state,
                editOrDelete: action.payload
            }
        case 'editValue':
            return {
                ...state,
                willEdit: action.payload
            }
        case 'valueChange':
            return {
                ...state,
                changedPictureValue: action.payload
            }
        case 'saveClick':
            return {
                ...state,
                saveClick: action.payload
            }

        default:
            return state
    }
}

export default favoriteReducer