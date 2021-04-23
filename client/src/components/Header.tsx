import { makeStyles, Theme, createStyles, Box, Typography } from '@material-ui/core';
import React from 'react';
import ContainedButtons from './Button';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        headerContainer: {
            height: 80,
            backgroundColor: theme.palette.secondary.main,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            '& h4': {
                fontWeight: 700,
                color: theme.palette.secondary.contrastText
            }
        }
    }),
);

const Header = () => {
    const classes = useStyles();
    return (
        <Box className={classes.headerContainer}>
            <Typography variant="h4" color="textSecondary" style={{ fontWeight: 700 }}>
                Newport Whales
            </Typography>
        </Box>
    )
}

export default Header