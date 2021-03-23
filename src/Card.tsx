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
import { colors } from '@material-ui/core';

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
  }),
);

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card elevation={0} className={classes.root}>
      <CardHeader
        className={classes.cardHeader}
        title="currently migrating"
        titleTypographyProps={{ variant: "overline" }}
        subheader="Gray Whales"
        subheaderTypographyProps={{ variant: "h5", display: "block" }}
      />
      <CardMedia
        className={classes.media}
        image="/gray-whale.jpeg"
        title="Paella dish"
      />
      {/* <CardContent>
      </CardContent>
      <CardActions disableSpacing>
      </CardActions> */}
    </Card>
  );
}
