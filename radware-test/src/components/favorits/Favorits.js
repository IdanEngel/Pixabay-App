import React from 'react'
import { GridList, GridTile } from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton'
import Toggle from 'material-ui/Toggle';
import './favorits.css'
import Delete from 'material-ui/svg-icons/action/delete';
import Edit from 'material-ui/svg-icons/action/settings';
import Done from 'material-ui/svg-icons/action/done';
import TextField from 'material-ui/TextField'
import { useSelector, useDispatch } from 'react-redux'


function Favorits() {
    const dispatch = useDispatch()
    const favoriteState = useSelector(state => state.favorits)
    const searchState = useSelector(state => state.search)

    let favoritsContent;
    const images = favoriteState.favorits;

    const deleteFromFavorits = img => {
        dispatch({
            type: 'deleteFromFavorits',
            payload: img
        })
    }

    const editFavorits = () => {
        dispatch({
            type: 'editValue',
            payload: !favoriteState.willEdit
        })
    }

    const headerValueChange = (e, img) => {
        console.log(e.target.value);
        console.log(searchState.images);
        
        dispatch({
            type: 'valueChange',
            payload: e.target.value
        })
    }

    const handleChange = () => {
        dispatch({
            type: 'buttonHandler',
            payload: !favoriteState.editOrDelete
        })
    }
    const headerChange = img => {
        dispatch({
            type: 'imageTagUpdate',
            chosen: img.tags,
            payload: favoriteState.changedPictureValue
        })
        dispatch({
            type: 'saveClick',
            payload: true
        })
        dispatch({
            type: 'editValue',
            payload: !favoriteState.willEdit
        })

    }

//comment
    if (images) {
        favoritsContent = (
            <GridList cols={3} >
                {images.map(img => (
                    <GridTile
                        title={favoriteState.willEdit ?
                            <TextField
                                defaultValue={img.tags}
                                onChange={headerValueChange}
                                className={'inputChange'}
                            /> : img.tags}
                        key={img.id}
                        subtitle={
                            <span>
                                by <strong>{img.user}</strong>
                            </span>
                        }
                        actionIcon={
                            favoriteState.editOrDelete ?
                                favoriteState.willEdit ?
                                    <IconButton onClick={() => headerChange(img)}
                                        tooltip="Save" touch={true} tooltipPosition="top-left">
                                        <Done color='white' />
                                    </IconButton> :
                                    <IconButton onClick={() => editFavorits(img)}
                                        tooltip="Edit" touch={true} tooltipPosition="top-left">
                                        <Edit color='white' />
                                    </IconButton> :
                                <IconButton onClick={() => deleteFromFavorits(img)}
                                    tooltip="Delete From favorits" touch={true} tooltipPosition="top-left">
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
            <Toggle
                label={favoriteState.editOrDelete ? 'Edit' : 'Delete'}
                defaultToggled={true}
                onToggle={handleChange}
                labelPosition="right"
                style={{ margin: 20 }}
            />
            <h1>Here are your favorite pictures:</h1>
            <br />
            {favoritsContent}
        </div>
    )
}

export default Favorits
