let initialState = {
    searchText: '',
    amount: 15,
    apiUrl: 'https://pixabay.com/api',
    apiKey: '15046474-df1fc030477aaa076ba54d6e9',
    images: []

}


const searchReducer = (state = initialState, action) => {
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
        case 'amountHandler':
            return {
                ...state,
                amount: action.payload
            }
       
        default:
            return state
    }
}

export default searchReducer