import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'
import ImageResults from '../image-results/ImageResults'
import { onTextChange } from '../../actions/index'

function Search() {
    // constructor(props) {
    //     super(props)
    //     searchState = useSelector(state => state)

    // }
    const dispatch = useDispatch()
    const searchState = useSelector(state => state.counter)
    // state = {
    //     searchText: '',
    //     amount: 15,
    //     apiUrl: 'https://pixabay.com/api',
    //     apiKey: '15046474-df1fc030477aaa076ba54d6e9',
    //     images: []
    // }


    const onTextChange = e => {
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

        }
    }

    const onAmountChange = (e, index, value) => searchState.amount = value

    return (
        <div>
            <TextField
                name="searchText"
                value={searchState.searchText}
                onChange={()=>dispatch(onTextChange)}
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