import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Card, { CardHeader, CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
// import remyImage from '';
// import reptileImage from 'docs/src/assets/images/contemplative-reptile.jpg';

const styleSheet = createStyleSheet('ProjectInfoCard', {
  card: {
    // maxWidth: 445,
  },
});

function ProjectInfoCard(props) {
  const classes = props.classes;
  return (
    <div>
      <Card className={classes.card}>
        <CardHeader
            title={props.project.title}
            subheader={props.project.subTitle}
          />
        {/*<CardMedia>
          <img src={reptileImage} alt="Contemplative Reptile" />
        </CardMedia>*/}
        <CardContent>
          <Typography component="p">            
            {props.project.description}
          </Typography>
        </CardContent>
        {/*<Avatar alt="Remy" src={remyImage} className={classes.avatar} />*/}
        <CardActions>
          <Button compact primary>Share Ideas</Button>
          <Button compact primary>More</Button>
        </CardActions>
      </Card>
    </div>
  );
}

ProjectInfoCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(ProjectInfoCard);