import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Brands from '../components/Brands';
import ContactForm from '../components/ContactForm';
import Headshot from '../components/Headshot';
import Hero from '../components/Hero';
import Pictures from '../components/Pictures';

const styles = theme => ({
  root: {
    color: theme.palette.secondary.main,
    display: 'flex',
    flexDirection: 'column'
  },
  vCenter: {
    alignSelf: 'center'
  },
  blue: {
    background: theme.palette.secondary.main,
    color: theme.palette.background.paper
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
  flex: {
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column'
    }
  },
  flexFull: {
    display: 'flex',
    height: '100vh',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column-reverse'
    }
  },
  flexChild: {
    alignItems: 'center',
    display: 'flex',
    padding: '120px',
    width: '50%',
    [theme.breakpoints.down('md')]: {
      padding: '120px 12px',
      textAlign: 'center',
      width: '100%'
    }
  },
  flexChildFull: {
    alignItems: 'center',
    display: 'flex',
    flexGrow: 1,
    height: '100%',
    justifyContent: 'center',
    padding: '120px',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      padding: '40px 12px',
      textAlign: 'center'
    }
  },
  flexColumn: {
    flexDirection: 'column'
  },
  green: {
    background: theme.palette.primary.main,
    color: theme.palette.background.paper
  },
  gutterBottom: {
    paddingBottom: theme.spacing.unit * 6
  },
  imgres: {
    maxWidth: '100%',
    [theme.breakpoints.down('md')]: {
      width: '50%'
    }
  },
  justifyCenter: {
    justifyContent: 'center'
  },
  one: {
    [theme.breakpoints.down('md')]: {
      order: 1
    }
  }
});

class HomeView extends React.Component {

  state = {
    mediumPosts: {}
  };

  render () {

    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Hero />
        <Headshot />
        <Brands />
        <Pictures />
        <div className={classes.flex}>
          <ContactForm />
        </div>
      </div>
    );

  }
}

export default withStyles(styles)(HomeView);