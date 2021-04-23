import React from 'react';
import { makeStyles, Theme, createStyles, Box, Typography } from '@material-ui/core';
import ButtonContainer from './Button';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        footerContainer: {
            backgroundColor: theme.palette.secondary.main,
            padding: '40px 20px 0 20px',
            '& h6': {
                color: theme.palette.secondary.contrastText
            }
        }
    }),
);

const Footer = () => {
    const classes = useStyles();
    return (
        <Box className={classes.footerContainer}>
            <Typography variant="h6">
                Don't miss out! Reserve a trip with our whale watching fleet today!
            </Typography>
            <ButtonContainer />
        </Box>
    )
}

export default Footer