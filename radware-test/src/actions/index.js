import axios from 'axios'

export const onTextChange = (e, searchState) => dispatch => {
    const val = e.target.value
    searchState[e.target.name] = val
    if (val === '') {
        searchState.images = []
    } else {
        axios.get(
            `${searchState.apiUrl}/?key=${searchState.apiKey}&q=${
            searchState.searchText
            }&img_type=photo
                &per_page=${ searchState.amount}&safesearch=true`)
            .then(res => searchState.images = res.data.hits)
            .catch(err => console.log(err))
        dispatch({
            type: 'onTextChange'

        })
    }
}