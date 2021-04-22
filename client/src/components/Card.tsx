import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Box, colors, SvgIcon } from '@material-ui/core';
import Image from 'material-ui-image'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
      backgroundColor: 'inherit'
    },
    cardHeader: {
      padding: theme.spacing(1),
      textAlign: 'left',
      '& .MuiCardHeader-content': {
        '& .MuiTypography-overline': {
          color: theme.palette.text.secondary
        },
        '& .MuiTypography-h5': {
          fontWeight: 600,
          color: theme.palette.text.primary
        }
      }
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
      borderRadius: 12
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
    migrateTitleContainer: {
      display: 'flex',
      justifyContent: 'space-evenly',
      padding: theme.spacing(1)
    },
    migrateInfoContainer: {
      display: 'flex',
      justifyContent: 'space-between'
    },
    imageContainer: {
      height: '50% !important',
      width: '50% !important'
    },
    image: {
      borderRadius: 8
    },
    textContainer: {
      width: '50%'
    },
  }),
);

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };

  return (
    // <Card elevation={0} className={classes.root}>
    //   <CardHeader
    //     className={classes.cardHeader}
    //     title="currently migrating"
    //     titleTypographyProps={{ color: 'textPrimary' }}
    //     subheader="Gray Whales"
    //     subheaderTypographyProps={{ variant: "h5", display: "block" }}
    //   />
    //   <CardMedia
    //     className={classes.media}
    //     image="/gray-whale.jpeg"
    //     title="Paella dish"
    //   />
    //   {/* <CardContent>
    //   </CardContent>
    //   <CardActions disableSpacing>
    //   </CardActions> */}
    // </Card>
    <>
      <Box className={classes.migrateTitleContainer}>
        <SvgIcon width="33" height="33" viewBox="0 0 33 33">
          <path d="M30.1812 6.39376C30.1812 4.40001 28.6 2.81876 26.6062 2.81876C24.6125 2.81876 23.0312 4.40001 23.0312 6.39376C23.0312 8.38751 24.6125 9.96876 26.6062 9.96876C28.6 9.96876 30.1812 8.31876 30.1812 6.39376Z" fill="black" />
          <path d="M7.97499 23.3063C7.97499 21.725 6.66874 20.4875 5.15624 20.4875C3.57499 20.4875 2.33749 21.7938 2.33749 23.3063C2.33749 24.8875 3.64374 26.125 5.15624 26.125C6.66874 26.1938 7.97499 24.8875 7.97499 23.3063Z" fill="black" />
          <path d="M32.3125 16.8438H27.225C28.875 14.7812 33 9.2125 33 6.39375C33 2.8875 30.1125 0 26.6063 0C23.1 0 20.2125 2.8875 20.2125 6.39375C20.2125 9.28125 24.4062 14.85 25.9875 16.8438C24.2 16.9813 22.55 18.0125 21.5875 19.6625L20.35 21.7938C19.4563 23.375 17.7375 24.2 15.95 23.8563C13.5438 23.4438 11.0688 24.6812 9.96875 26.8812L8.9375 29.2875C8.31875 30.5937 7.08125 31.4188 5.70625 31.5563C7.0125 29.8375 10.2437 25.5063 10.2437 23.3063C10.2437 20.4875 7.975 18.2188 5.15625 18.2188C2.3375 18.2188 0 20.4875 0 23.3063C0 25.575 3.23125 29.9062 4.5375 31.625H3.4375C3.025 31.625 2.75 31.9 2.75 32.3125C2.75 32.725 3.025 33 3.4375 33H5.15625C7.2875 33 9.2125 31.8312 10.1062 29.9062L11.275 27.5C12.1 25.85 13.9563 24.8875 15.7437 25.2313C18.0812 25.6438 20.4187 24.5438 21.5875 22.4813L22.825 20.35C23.5813 19.0438 24.9562 18.2188 26.4688 18.2188H32.3125C32.725 18.2188 33 17.9438 33 17.5312C33 17.1187 32.725 16.8438 32.3125 16.8438ZM1.375 23.3063C1.375 21.2438 3.025 19.5938 5.0875 19.5938C7.15 19.5938 8.8 21.2438 8.8 23.3063C8.8 25.3688 7.15 27.0187 5.0875 27.0187C3.025 27.0875 1.375 25.3688 1.375 23.3063ZM21.9312 6.39375C21.9312 3.85 23.9937 1.71875 26.6063 1.71875C29.15 1.71875 31.2812 3.78125 31.2812 6.39375C31.2812 8.9375 29.2188 11.0688 26.6063 11.0688C24.0625 11.0688 21.9312 8.9375 21.9312 6.39375Z" fill="black" />
        </SvgIcon>
        <Typography>
          Currently Migrating
    </Typography>
      </Box>
      <Box className={classes.migrateInfoContainer}>
        <Box className={classes.imageContainer}>
          <Image src="/gray-whale.jpg" />
        </Box>
        <Box className={classes.textContainer}>
          <Typography variant="h6">
            Grey Whales
          </Typography>
          <Typography align="justify" variant="body1">
            Grey Whales have the longest migration of any mammal, from the Bering Strait to Mexico and back again. You don't want to miss seeing these graceful giants!
          </Typography>
        </Box>
      </Box>
    </>
  )
}
