import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { GridList, GridTile } from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton'
import ActionGrade from 'material-ui/svg-icons/action/grade';
import { useSelector, useDispatch } from 'react-redux'

// import Dialog from 'material-ui/Dialog'
// import FlatButton from 'material-ui/FlatButton'

function ImageResults() {

    const dispatch = useDispatch()
    const searchState = useSelector(state => state.search)

    const addToFavorits = (img) => {
        console.log(img);
    }
    console.log(searchState.images);


    let imageListContent;
    const images = searchState.images;
    if (images) {
        imageListContent = (
            <GridList cols={3} >
                {images.map(img => (
                    <GridTile
                        title={img.tags}
                        key={img.id}
                        subtitle={
                            <span>
                                by <strong>{img.user}</strong>
                            </span>
                        }
                        actionIcon={
                            <IconButton onClick={() => this.addToFavorits(img)} tooltip="Add to favorits" touch={true} tooltipPosition="top-left">
                                <ActionGrade color='gold' />
                            </IconButton>
                        }
                    >
                        <img src={img.largeImageURL} alt="" />
                        
                    </GridTile>
                ))}
            </GridList>
        )
    }
    return (
        <div>
            {imageListContent}
        </div>
    )
}


ImageResults.propTypes = {
    images: PropTypes.array.isRequired
}

export default ImageResults;
