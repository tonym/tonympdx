import React, { Component } from 'react';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import Flex from '../../components/Flex';
import FlexChild from '../../components/FlexChild';

const styles = theme => ({
  avatar: {
    alignItems: 'center',
    display: 'flex',
    height: '100px',
    justifyContent: 'space-between',
    left: '50%',
    marginLeft: '-120px',
    marginTop: '-50px',
    position: 'absolute',
    top: '50%',
    width: '240px',
    '& .avatarImg': {
      borderRadius: '50px'
    },
    [theme.breakpoints.down('md')]: {
      marginLeft: '-50px',
      width: '100px'
    },
  },
  borderHero: {
    borderRightColor: theme.palette.secondary.main,
    borderRightStyle: 'solid',
    borderRightWidth: '3px',
    textAlign: 'right',
    [theme.breakpoints.down('md')]: {
      border: 'none',
      textAlign: 'center'
    }
  },
  contentHero: {
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
    width: '100%',
  },
  lineHeroLeft: {
    background: theme.palette.secondary.main,
    height: '3px',
    width: '50px',
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  lineHeroRight: {
    background: theme.palette.background.paper,
    height: '3px',
    width: '50px',
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  scroll: {
    bottom: '50px',
    color: 'rgba(200,200,200,0.8)',
    fontSize: 100,
    height: '100px',
    left: '50%',
    marginLeft: '-100px',
    position: 'absolute',
    textAlign: 'center',
    width: '200px',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
});



class Hero extends Component {

  render() {

    const { classes } = this.props;

    return (
      <Flex flexDirection="column-reverse" elemHeight="100vh" elemWidth="100%">
        <div className={classes.scroll}>
          <Icon fontSize="inherit">keyboard_arrow_down</Icon>
        </div>
        <div className={classes.avatar}>
          <div className={classes.lineHeroLeft}></div>
          <img className="avatarImg" src="assets/images/avatar.jpg" alt="avatar" />
          <div className={classes.lineHeroRight}></div>
        </div>
        <FlexChild>
          <div className={[classes.contentHero, classes.borderHero].join(' ')}>
            <Typography color="inherit" paragraph variant="h5">Create</Typography>
            <Typography color="inherit" paragraph variant="h5">Design</Typography>
            <Typography color="inherit" paragraph variant="h5">Develop</Typography>
          </div>
        </FlexChild>
        <FlexChild background="secondary">
          <div className={classes.contentHero}>
            <Typography color="inherit" paragraph variant="h3">Tony M</Typography>
            <Typography color="inherit" paragraph variant="h5">Portland, Oregon</Typography>
          </div>
        </FlexChild>
      </Flex>
    );

  }

}

export default withStyles(styles)(Hero);
