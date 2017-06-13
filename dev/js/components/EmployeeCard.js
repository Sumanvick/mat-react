import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Card, { CardHeader, CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Avatar from 'material-ui/Avatar';
import Typography from 'material-ui/Typography';
// import reptileImage from 'docs/src/assets/images/contemplative-reptile.jpg';

const styleSheet = createStyleSheet('EmployeeCard', {
  card: {
    maxWidth: 345,
  },
});

function EmployeeCard(props) {
  const classes = props.classes;
  return (
    <div>
      <Card className={classes.card}>
        <CardHeader
          avatar={<Avatar aria-label="Recipe" className={classes.avatar}>R</Avatar>}
          title={props.employee.name}
          subheader={props.employee.mobileNumber}
        />
        {/*<CardMedia>
          <img src={reptileImage} alt="Contemplative Reptile" />
        </CardMedia>*/}
        <CardContent>
          {/*<Typography type="headline" component="h2">
            Employee Name
          </Typography>*/}
          <Typography component="p">
            {props.employee.addresses.length ? props.employee.addresses[0].place : ''}<br/>
            {props.employee.addresses.length ? props.employee.addresses[0].pin : ''}<br/>
          </Typography>
        </CardContent>
        {/*<CardActions>
          <Button compact primary>Check Status</Button>
          <Button compact primary>More Details</Button>
        </CardActions>*/}
      </Card>
    </div>
  );
}

EmployeeCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(EmployeeCard);