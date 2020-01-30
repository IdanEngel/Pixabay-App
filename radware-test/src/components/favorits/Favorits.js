import React from 'react'
import { GridList, GridTile } from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton'
import Delete from 'material-ui/svg-icons/action/delete';
import { useSelector, useDispatch } from 'react-redux'


function Favorits() {
    const dispatch = useDispatch()
    const favoriteState = useSelector(state => state.favorits)

    let favoritsContent;
    const images = favoriteState.favorits;

    const deleteFromFavorits = (img) => {
        dispatch({
            type: 'deleteFromFavorits',
            payload: img
        })
    }

    if (images) {
        favoritsContent = (
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
                            <IconButton onClick={() => deleteFromFavorits(img)}
                                tooltip="Add to favorits" touch={true} tooltipPosition="top-left">
                                <Delete color='white' />
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
            <h1>Here are your favorite pictures:</h1>
            <br />
            {favoritsContent}
        </div>
    )
}

export default Favorits
