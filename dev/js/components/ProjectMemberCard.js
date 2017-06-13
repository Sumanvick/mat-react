import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Card, { CardHeader, CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Avatar from 'material-ui/Avatar';
import Typography from 'material-ui/Typography';
// import reptileImage from 'docs/src/assets/images/contemplative-reptile.jpg';

const styleSheet = createStyleSheet('ProjectMemberCard', {
  card: {
    maxWidth: 345,
  },
});

function ProjectMemberCard(props) {
  const classes = props.classes;
  return (
    <div>
      <Card className={classes.card}>
        <CardHeader
          avatar={<Avatar alt={props.member.name.replace(/[^A-Z]/g, '')} src={props.member.avatarSrc} className={classes.avatar}/>}
          title={props.member.name}
          subheader={props.member.role}
        />
        <CardContent>
          <Typography component="p">
          Email : {props.member.email}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

ProjectMemberCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(ProjectMemberCard);