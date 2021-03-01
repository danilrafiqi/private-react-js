import { CircularProgress } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const PostListCard = ({ title, body, onDelete, loading, onEdit, onDetail }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={onDetail}>
        <CardMedia
          className={classes.media}
          image="https://placeimg.com/200/200/any"
          title={title}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            style={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {body.substring(0, 100)}...
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={onEdit}>
          Edit
        </Button>
        {loading === true ? (
          <CircularProgress color="secondary" size={25} />
        ) : (
          <Button size="small" color="primary" onClick={onDelete}>
            Delete
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default PostListCard;
