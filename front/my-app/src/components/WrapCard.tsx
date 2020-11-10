import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 380,
  },
});

interface CardProps {
  title: string;
  description: string;
  path: string;
}

const WrapCard = (props: CardProps) => {
  const classes = useStyles();
  const history = useHistory();

  /**
   * カード押下時、指定されたパスへ遷移する。
   */
  const handleClick = () => {
    history.push(props.path);
  };

  return (
    <Card className={classes.root} onClick={handleClick}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button> */}
      </CardActions>
    </Card>
  );
};

export default WrapCard;
