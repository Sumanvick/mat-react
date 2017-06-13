import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Avatar from 'material-ui/Avatar';
// import remyImage from 'https://pickaface.net/gallery/avatar/unr_sample_161118_2054_ynlrg.png';
// import uxecoImage from 'docs/src/assets/images/uxceo-128.jpg';

// let avatarSrc = 'https://www.mindzcloud.com/wp-content/themes/mindzcloud/images/client-1.png';
// let avatarSrc = '../../utility/images/remy.jpg';

const styleSheet = createStyleSheet('ImageAvatars', {
  row: {
    display: 'flex',
    justifyContent: 'left',
    padding: '5px'
  },
  avatar: {
    margin: "10px 5px 10px 5px",
  },
  bigAvatar: {
    width: 40,
    height: 40,
  },
});

function ImageAvatars(props) {
  const classes = props.classes;
  return (
    <div className={classes.row}>
      {props.members.length ? props.members.map((member, i) => {
                                return (
                                    <Avatar alt={member.name} src={member.avatarSrc} key={i} className={classes.avatar} />
                                )
                            }) : ''}
      {/*<span>+6</span>*/}
    </div>
  );
}

ImageAvatars.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(ImageAvatars);