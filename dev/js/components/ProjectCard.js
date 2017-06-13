import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import classnames from 'classnames';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Collapse from 'material-ui/transitions/Collapse';
import Avatar from 'material-ui/Avatar';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import { red } from 'material-ui/styles/colors';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import ImageAvatars from './AvatarList'
import ProjectMemberList from './ProjectMemberList'

const styleSheet = createStyleSheet('RecipeReviewCard', theme => ({
//   card: { maxWidth: 400 },
  divParent: { 
    position: 'relative'
  },
  button: {
    margin: theme.spacing.unit,
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: { backgroundColor: red[500] },
  flexGrow: { flex: '1 1 auto' },
  statusInfo: { 
    position: 'absolute',
    top: '24px',
    right: '15px'
  },
}));

class ProjectCard extends Component {

  constructor(props) {
      super(props);
      this.state = {
          expanded: false
      };
  }
  
  handleExpandClick (e) {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const classes = this.props.classes;

    return (
      <div className={classes.divParent}>
        {/*{JSON.stringify(this.props)}*/}
        <Card className={classes.card}>
          <CardHeader
            title={this.props.project.title}
            subheader={this.props.project.subTitle}
          />
          {/*<CardMedia>
            <img src={paellaImage} alt="Contemplative Reptile" />
          </CardMedia>*/}
          <div className={classes.statusInfo}>{this.props.project.status}</div>
          <CardContent>
            <Typography component="p">
              {this.props.project.description}
            </Typography>
          </CardContent>
          <CardActions disableActionSpacing>
            <ImageAvatars members={this.props.project.members}/>
            <div className={classes.flexGrow} />
            <Button compact primary className={classes.button}>Add Member</Button>
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded,
              })}
              onClick={(e) => this.handleExpandClick(e)}
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} transitionDuration="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph type="body2">Team Members:</Typography>
               <ProjectMemberList members={this.props.project.members}/>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    );
  }
}

ProjectCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(ProjectCard);