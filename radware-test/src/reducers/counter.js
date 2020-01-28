import axios from 'axios'
let start = {
    searchText: '',
    amount: 15,
    apiUrl: 'https://pixabay.com/api',
    apiKey: '15046474-df1fc030477aaa076ba54d6e9',
    images: []

}


const counterReducer = (state = start, action) => {
    switch (action.type) {
        case 'addToFavorits':
            return state + 1;
        case 'onTextChange': 
            return state
        default:
            return state
    }
}

export default counterReducer