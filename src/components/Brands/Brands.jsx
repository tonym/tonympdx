import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  root: {
    padding: '120px',
    paddingBottom: theme.spacing.unit * 6,
    paddingTop: theme.spacing.unit * 6,
    width: '100%',
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing.unit * 6,
    }
  },
  brand: {
    margin: theme.spacing.unit * 2,
    marginTop: 0,
    maxWidth: '100%',
    opacity: 0.7
  },
  brands: {
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    padding: theme.spacing.unit,
    paddingBottom: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit * 2
  }
});



class Brands extends Component {

  render() {

    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Typography color="inherit" variant="h6" gutterBottom>I've had the pleasure of working on various projects for various people and companies. These are just a few of the brands I've helped in one way or another</Typography>
        <Typography color="inherit">My brands and projects</Typography>
        <div className={classes.brands}>
          <img className={classes.brand} src="/assets/images/brand.tpp.png" alt="brand logo" />
          <img className={classes.brand} src="/assets/images/brand.mouseandmoon.png" alt="brand logo" />
          <img className={classes.brand} src="/assets/images/brand.popartpinup.png" alt="brand logo" />
          <img className={classes.brand} src="/assets/images/brand.fbpllc.png" alt="brand logo" />
        </div>
        <Typography color="inherit">Brands with projects I've helped</Typography>
        <div className={classes.brands}>
          <img className={classes.brand} src="/assets/images/brand.chop.png" alt="brand logo" />
          <img className={classes.brand} src="/assets/images/brand.uc.png" alt="brand logo" />
          <img className={classes.brand} src="/assets/images/brand.daimler.png" alt="brand logo" />
          <img className={classes.brand} src="/assets/images/brand.franz.png" alt="brand logo" />
          <img className={classes.brand} src="/assets/images/brand.sundance.png" alt="brand logo" />
          <img className={classes.brand} src="/assets/images/brand.sorel.png" alt="brand logo" />
          <img className={classes.brand} src="/assets/images/brand.infocus.png" alt="brand logo" />
          <img className={classes.brand} src="/assets/images/brand.mentor.png" alt="brand logo" />
          <img className={classes.brand} src="/assets/images/brand.cisco.png" alt="brand logo" />
          <img className={classes.brand} src="/assets/images/brand.ibm.png" alt="brand logo" />
          <img className={classes.brand} src="/assets/images/brand.chase.png" alt="brand logo" />
          <img className={classes.brand} src="/assets/images/brand.wachovia.png" alt="brand logo" />
        </div>
      </div>
    );

  }

}

export default withStyles(styles)(Brands);
