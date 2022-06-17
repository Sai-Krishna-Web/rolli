import React, { useState } from 'react';
import Header from './header';

import Content from './content';
// material-ui
import { makeStyles } from '@material-ui/styles';
import { AppBar, CssBaseline, Toolbar } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        minHeight: '100vh',
        width:'100%'
    },
    main:{
        marginTop: '70px',
        width:'100%'
    }
  


}));

function LayoutComponent(props) {
    const classes = useStyles();

    const user = {
        name: 'Sai Krishna',
        email: 'akulasaikrishna2@gail.com'
    }

    const logout =()=>{
        console.log('userlogged out')
    }

    return (
        <React.Fragment>
            <div className={classes.root}>
                <CssBaseline />
                {/* header */}
                <AppBar
                    position="fixed"
                    color="inherit"
                    elevation={0}
                >
                    <Toolbar>
                        <Header user={user} logout={logout} />
                    </Toolbar>
                </AppBar>
                <main className={classes.main}>
                    <Content />
                </main>
            </div>
        </React.Fragment>
    );
}

export default LayoutComponent;
