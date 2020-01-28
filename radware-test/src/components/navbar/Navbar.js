import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom'
import { FlatButton } from 'material-ui';




class Navbar extends Component {
    state = {
        open: false
    }


    handleToggle = () => this.setState({ open: !this.state.open });
    handleClose = () => this.setState({ open: false });
    render() {
        return (
            <div>
                <AppBar title='image finder' onTitleClick={this.handleClose} onLeftIconButtonClick={this.handleToggle} >
                    <Drawer open={this.state.open}>
                        <Link to='/'>
                            <MenuItem onClick={this.handleClose}>
                                Home
                             </MenuItem>
                        </Link>
                        <Link to='/favorits'>
                            <MenuItem onClick={this.handleClose}>
                                Favorits
                            </MenuItem>
                        </Link>
                        <FlatButton label='close' primary={true} onClick={this.handleClose} />
                    </Drawer>
                </AppBar>
            </div>
        )
    }
}

export default Navbar
