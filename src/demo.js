import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const rippleOpacityOnClick = 0.3;

const myStyles = (theme) => ({
  root: {
    maxWidth: 345
  },
  media: {
    height: 200
  },
  child: {
    backgroundColor: "rgba(0, 0, 255, 0.5)"
  },
  rippleVisible: {
    opacity: rippleOpacityOnClick,
    animation: `$enter 1000ms cubic-bezier(0,.53,0,.8)`
  },
  "@keyframes enter": {
    "0%": {
      transform: "scale(0)",
      opacity: 0
    },
    "100%": {
      transform: "scale(1.5)",
      opacity: rippleOpacityOnClick
    }
  }
});

class MediaCard extends Component {
  render() {
    const { root, media, ...classes } = this.props.classes;

    return (
      <Card className={root}>
        <CardActionArea TouchRippleProps={{ classes }}>
          <CardMedia
            className={media}
            image="https://images.unsplash.com/photo-1597065136854-c2a108732d4b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1533&q=80"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Lizard
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(myStyles)(MediaCard);
