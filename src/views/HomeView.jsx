import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Brands from '../blocks/Brands';
import Contact from '../blocks/Contact';
import Design from '../blocks/Design';
import Develop from '../blocks/Develop';
import Headshot from '../blocks/Headshot';
import Hero from '../components/Hero';
import Pictures from '../blocks/Pictures';
import Projects from '../components/Projects';
import Social from '../blocks/Social';
import Workshops from '../blocks/Workshops';

const styles = theme => ({
});

class HomeView extends React.Component {

  render () {

    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Hero />
        <Projects />
      </div>
    );

  }
}

export default withStyles(styles)(HomeView);