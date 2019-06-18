import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  root: {
    margin: 'auto',
    maxWidth: theme.local.maxWidth,
    paddingBottom: theme.spacing.unit * 10,
    paddingTop: theme.spacing.unit * 8,
  },
  brand: {
    margin: 12,
    maxHeight: 85,
    maxWidth: 85,
    opacity: 0.7
  },
  container: {
    paddingBottome: theme.spacing.unit * 6,
    paddingTop: theme.spacing.unit *6
  },
  link: {
    color: theme.palette.text.secondary
  }
});

const brands = [
  "/assets/images/brand.tpp.png",
  "/assets/images/brand.mouseandmoon.png",
  "/assets/images/brand.popartpinup.png",
  "/assets/images/brand.fbpllc.png",
  "/assets/images/brand.chop.png",
  "/assets/images/brand.uc.png",
  "/assets/images/brand.daimler.png",
  "/assets/images/brand.franz.png",
  "/assets/images/brand.sundance.png",
  "/assets/images/brand.sorel.png",
  "/assets/images/brand.infocus.png",
  "/assets/images/brand.crossfit.png",
  "/assets/images/brand.mentor.png",
  "/assets/images/brand.cisco.png",
  "/assets/images/brand.ibm.png",
  "/assets/images/brand.chase.png",
  "/assets/images/brand.wachovia.png",
  "/assets/images/brand.hp.png",
];

const Footer = props => {

    const { classes } = props;

    return (
      <div className={classes.root}>
        <Typography align="center" gutterBottom variant="h6">
          Some of the brands I've helped or worked with
        </Typography>
        <Grid className={classes.container} container justify="center" spacing={8}>
          {
            brands.map((brand, index) => {
              return (
                <Grid item key={index} xs>
                  <img className={classes.brand} src={brand} alt="brand logo" />
                </Grid>
              )
            })
          }
        </Grid>
        <Grid className={classes.container} container justify="center" spacing={8}>
          <Grid item md>
            <Typography align="center" gutterBottom variant="h6">
              Workshops I teach
            </Typography>
            <Typography align="center" paragraph>Intro to studio lighting</Typography>
            <Typography align="center" paragraph>Studio lighting for product photography</Typography>
            <Typography align="center" paragraph>Retouching and processing with Lightroom and Photoshop</Typography>
            <Typography align="center" paragraph>Introduction to working in technology and software</Typography>
            <Typography align="center" paragraph>Getting started with React and React Native</Typography>
            <Typography align="center" paragraph>Advanced React</Typography>
          </Grid>
          <Grid item md>
            <Typography align="center" gutterBottom variant="h6">
              Find me online
            </Typography>
            <Typography align="center" paragraph>
              <a href="https://github.com/tonym/tonympdx" rel="noopener noreferrer" target="_blank" className={classes.link}>Github</a>
            </Typography>
            <Typography align="center" paragraph>
              <a href="https://www.instagram.com/tony.m.pdx/" rel="noopener noreferrer" target="_blank" className={classes.link}>Instagram</a>
            </Typography>
            <Typography align="center" paragraph>
              <a href="https://www.linkedin.com/in/tonympdx/" rel="noopener noreferrer" target="_blank" className={classes.link}>LinkedIn</a>
            </Typography>
            <Typography align="center" paragraph>
              <a href="https://twitter.com/PortlandPour" rel="noopener noreferrer" target="_blank" className={classes.link}>Twitter</a>
            </Typography>
            <Typography align="center" paragraph>
              <a href="https://medium.com/@tony.m.pdx" rel="noopener noreferrer" target="_blank" className={classes.link}>Medium</a>
            </Typography>
          </Grid>
        </Grid>
      </div>
    );
}

export default withStyles(styles)(Footer);
