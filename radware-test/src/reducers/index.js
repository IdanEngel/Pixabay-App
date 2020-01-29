import { combineReducers } from 'redux'
import searchReducer from './searchStores'
import favoriteReducer from './favoriteStore'

const allReducers = combineReducers({
    search: searchReducer,
    favorits: favoriteReducer
})

export default allReducers;