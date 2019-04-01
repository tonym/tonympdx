import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column'
    }
  },
  child: {
    padding: theme.spacing.unit / 4,
    width: '50%',
    [theme.breakpoints.down('md')]: {
      width: '100%'
    }
  },
  flexChild: {
    alignItems: 'center',
    display: 'flex',
    padding: '120px',
    width: '50%',
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
      padding: '120px 12px',
      width: '100%'
    }
  },
  imgres: {
    height: 'auto',
    maxWidth: '100%'
  },
  list: {
    width: '100%'
  },
  reverse: {
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column-reverse'
    }
  },
  blue: {
    background: theme.palette.secondary.main,
    color: theme.palette.background.paper
  },
  green: {
    background: theme.palette.primary.main,
    color: theme.palette.background.paper
  }
});



class Develop extends Component {

  render() {

    const { classes } = this.props;

    return (
      <React.Fragment>
        <div className={classes.root}>
          <div className={classes.flexChild}>
            <img src="https://sponsor.theportlandpour.com/assets/images/screenshots.png" alt="screenshot of website on various devices" className={classes.imgres}/>
          </div>
          <div className={[classes.flexChild, classes.green].join(' ')}>
            <div>
              <Typography color="inherit" variant="h4" gutterBottom>Develop</Typography>
              <Typography color="inherit" variant="h5">
                From the early days of the World Wide Web until today I've been part of the charge for new, better, more usable digital technology, from the earliest blogs and browser based applications to social networking tools, REST APIs and mobile devices, there's a solution for every problem, and a platform for every voice.
              </Typography>
            </div>
          </div>
        </div>
      </React.Fragment>
    );

  }

}

export default withStyles(styles)(Develop);
