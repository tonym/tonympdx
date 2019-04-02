import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Brands from '../blocks/Brands';
import Contact from '../blocks/Contact';
import Design from '../blocks/Design';
import Develop from '../blocks/Develop';
import Headshot from '../blocks/Headshot';
import Hero from '../blocks/Hero';
import Pictures from '../blocks/Pictures';

const styles = theme => ({
  root: {
    color: theme.palette.secondary.main,
    display: 'flex',
    flexDirection: 'column'
  },
});

class HomeView extends React.Component {

  render () {

    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Hero />
        <Headshot />
        <Brands />
        <Pictures />
        <Design />
        <Develop />
        <Contact />
      </div>
    );

  }
}

export default withStyles(styles)(HomeView);