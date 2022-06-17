import React, { useState } from 'react';
import styles from './header.module.scss';
import logo from '../logo.svg';
import { Avatar, Menu, IconButton, Button, Box, CardActions, CardContent,List, ListItem,Typography } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

import { setRoute } from './route';

const useStyles = makeStyles((theme) => ({
    buttonBase: {
        //margin: '0px 24px',
        borderRadius: '10px'
    },
    headerAvatar: {
        
        transition: 'all .2s ease-in-out',
        background: '#ddd',
        color: 'black',
        '&:hover': {
           // background: '',
            //color: ''
        }
    },
    boxContainer: {
        width: '228px',
        display: 'flex',
    },
    nav: {
        display:'flex',
        flexDirection: 'row',
        color:'black',
        paddingRight:'20px'
    }
}));

const StyledMenu = withStyles((theme) => ({
    paper: {
        border: '1px solid',
        borderColor: grey,
        paddingTop: '10px'
    }
}))((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center'
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center'
        }}
        {...props}
    />
));

let navLinks = [
    {
        name: 'Home',
        path: '',
        onClick: () => {
            setRoute('/');
        }
    },
    {
        name: 'Shows',
        path: 'shows',
        onClick: () => {
            setRoute('/shows');
        }
    },
    {
        name: 'Movies',
        path: 'movies',
        onClick: () => {
            setRoute('/movies');
        }
    },
    {
        name: 'Casts',
        path: 'casts',
        onClick: () => {
            setRoute('/casts');
        }
    },
    
];

function HeaderComponent(props) {
    const [anchorEl, setAnchorEl] = useState(null);
    const { logout, user } = props;
    const classes = useStyles();
    return (
        <React.Fragment>
            <div className={styles.logo}>
                <Box sx={{ display: { xs: 'none', md: 'block' }, marginRight: '24px' }}>
                    <img src={logo} alt="Rollinow" width="180" />
                </Box>
            </div>
            <Box pt={2}>
                <List component="nav" className={classes.nav}>
                    {navLinks.map((navLink, index) => (
                        <ListItem
                            button
                            onClick={() => {
                                navLink.onClick();
                            }}
                            key={index}
                        >

                            <Typography component="span">{navLink.name}</Typography>
                        </ListItem>
                    ))}
                </List>
            </Box>

            <div>
                <IconButton
                    aria-owns={anchorEl ? 'menu-appbar' : undefined}
                    aria-haspopup="true"
                    onClick={(e) => setAnchorEl(e.currentTarget)}
                    color="primary"
                    size="small"
                >
                    <AccountCircle fontSize="large" />
                </IconButton>
                <StyledMenu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={() => setAnchorEl(false)}
                >
                    <Box className={styles.profile}>
                        <Avatar
                            alt={user.name}
                            variant="rounded"
                            className={classes.headerAvatar}
                            color="primary"
                            src={undefined}
                        >
                            {user.name.charAt(0)}
                        </Avatar>

                        <CardContent>
                            <h4>{user.name}</h4>
                            <span>{user.email}</span>
                        </CardContent>
                        <CardActions>
                            <Button size="small" variant="outlined" color="secondary" onClick={logout}>
                                Log out
                            </Button>
                        </CardActions>
                    </Box>
                </StyledMenu>
            </div>
        </React.Fragment>
    );
}

export default HeaderComponent;
