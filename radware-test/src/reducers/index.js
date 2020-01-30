import { combineReducers } from 'redux'
import searchReducer from './searchStores'
import favoriteReducer from './favoriteStore'
import imageReducer from './imageResults'

const allReducers = combineReducers({
    search: searchReducer,
    favorits: favoriteReducer,
    images: imageReducer
})

export default allReducers;