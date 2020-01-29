import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'
import ImageResults from '../image-results/ImageResults'

function Search() {
 
    const dispatch = useDispatch()
    const searchState = useSelector(state => state.search)
 
    const onTextChange = e => {
        const val = e.target.value
        dispatch({
            type: 'onTextChange',
            payload: val
        })
        if (val === '') {
            dispatch({
                type: 'imageHandler',
                payload: []
            })
        } else {
            axios.get(
                `${searchState.apiUrl}/?key=${searchState.apiKey}&q=${
                val
                }&img_type=photo
                    &per_page=${ searchState.amount}&safesearch=true`)
                .then(res => dispatch({
                    type: 'imageHandler',
                    payload: res.data.hits
                }))
                .catch(err => console.log(err))

        }
    }

    const onAmountChange = (e, index, value) => searchState.amount = value

    return (
        <div>
            <TextField
                name="searchText"
                value={searchState.searchText}
                onChange={onTextChange}
                floatingLabelText="Search for Images"
                fullWidth={true}
            />
            <br />
            <SelectField
                floatingLabelText="Amount"
                value={searchState.amount}
                onChange={onAmountChange}
            >
                <MenuItem value={5} primaryText="5" />
                <MenuItem value={10} primaryText="10" />
                <MenuItem value={15} primaryText="15" />
                <MenuItem value={30} primaryText="30" />
                <MenuItem value={50} primaryText="50" />
            </SelectField>
            <br />
            {searchState.images.length > 0 ? <ImageResults images={searchState.images} /> : null}
        </div>
    )
}

export default Search