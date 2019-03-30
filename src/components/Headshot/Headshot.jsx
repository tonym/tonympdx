import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  root: {
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column'
    }
  },
  blue: {
    background: theme.palette.secondary.main,
    color: theme.palette.background.paper
  },
  cherrySwash: {
    fontFamily: '"Cherry Swash"'
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
  link: {
    color: 'inherit',
    textDecoration: 'none'
  },
  portrait: {
    backgroundImage: 'url(assets/images/tonym.jpg)',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    minHeight: '800px'
  },
  project: {
    paddingTop: theme.spacing.unit * 9,
    width: '100%'
  },
  role: {
    paddingBottom: theme.spacing.unit * 9,
    width: '100%'
  }
});



class Headshot extends Component {

  render() {

    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={[classes.flexChild, classes.blue].join(' ')}>
          <div className={classes.contentHero}>
            <div className={classes.contentHero}>
              <div className={classes.role}>
                <Typography color="inherit" variant="h5">
                  Creative director
                </Typography>
                <Typography className={classes.cherrySwash} color="inherit" variant="h4">
                  <a className={classes.link} href="https://www.mouseandmooncreations.com" rel="noopener noreferrer" target="_blank">
                    Mouse and Moon Creations
                  </a>
                </Typography>
              </div>
              <Typography color="inherit" paragraph variant="h6">
                As a working artist, accomplished developer, successful team lead, and sometimes teacher, I have a rare ability to move between disciplines with knowledge accumulated from genuine working experience in each.
              </Typography>
              <Typography color="inherit" paragraph variant="h6">
                My goal, as creative director, is bringing together cross-discipline teams to create useful products for innovative people.
              </Typography>
              <div className={classes.project}>
                <Typography color="inherit" variant="h5">
                  Current project
                </Typography>
                <Typography color="inherit">
                  <a href="https://www.theportlandpour.com" rel="noopener noreferrer" target="_blank">
                    <img src="/assets/images/tpp.logo.bw.png" alt="The Portland Pour logo"/>
                  </a>
                </Typography>
              </div>
            </div>
          </div>
        </div>
        <div className={[classes.flexChild, classes.portrait].join(' ')}>
          <div className={classes.contentHero}></div>
        </div>
      </div>
    );

  }

}

export default withStyles(styles)(Headshot);
