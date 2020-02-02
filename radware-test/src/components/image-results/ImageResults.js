import React from 'react'
import PropTypes from 'prop-types'
import { GridList, GridTile } from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton'
import ActionGrade from 'material-ui/svg-icons/action/grade';
import { useSelector, useDispatch } from 'react-redux'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'

function ImageResults() {

    const dispatch = useDispatch()
    const searchState = useSelector(state => state.search)
    const imageState = useSelector(state => state.images)

    const addToFavorits = (img) => {
        dispatch({
            type: 'addToFavorits',
            newItem: img
        })
        dispatch({
            type: 'saveClick',
            payload: false
        })
        handleOpen(img.largeImageURL)
    }

    const handleOpen = img => {
        dispatch({
            type: 'modalHandler',
            payload: true,
        })
        dispatch({
            type: 'currentImageHandler',
            payload: img,
        })
    }

    const handleClose = (img) => {
        dispatch({
            type: 'modalHandler',
            payload: false,
        })
        
        setTimeout(()=>{
            alert(`The picture is added to your Favorits!`);
        },200)

    }

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
                            <IconButton onClick={() => addToFavorits(img)} tooltip="Add to favorits" touch={true} tooltipPosition="top-left" actio>
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

    const actions = [
        <FlatButton label="Close" primary={true} onClick={() => handleClose()} />
    ]

    return (
        <div>
            {imageListContent}
            <Dialog
                actions={actions}
                modal={false}
                open={imageState.open}
                onRequestClose={handleClose}
            >
                <img src={imageState.currentImage} alt="" style={{ width: '100%' }} />

            </Dialog>
        </div>
    )
}

ImageResults.propTypes = {
    images: PropTypes.array.isRequired
}

export default ImageResults;
