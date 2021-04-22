import { makeStyles, Theme, createStyles, Box, Typography } from '@material-ui/core';
import React from 'react';
import ContainedButtons from './Button';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            height: '100vh'
        },
        headerContainer: {
            backgroundColor: theme.palette.secondary.main,
        }
    }),
);

const Footer = () => {
    const classes = useStyles();
    return (
        <Box className={classes.headerContainer}>
            <Typography variant="h6" color="textSecondary">
                Don't miss out! Reserve a trip with our whale watching fleet today!
            </Typography>
            <ContainedButtons />
        </Box>
    )
}

export default Footer