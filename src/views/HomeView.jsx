import React from 'react';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import ContactForm from '../components/ContactForm';
import MediumPosts from '../components/MediumPosts';
import API from '../services';

const styles = theme => ({
  root: {
    color: theme.palette.secondary.main,
    display: 'flex',
    flexDirection: 'column'
  },
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
    '& img': {
      borderRadius: '50px'
    },
    [theme.breakpoints.down('md')]: {
      marginLeft: '-50px',
      width: '100px'
    },
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
  cherrySwash: {
    fontFamily: '"Cherry Swash"'
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
  one: {
    [theme.breakpoints.down('md')]: {
      order: 1
    }
  },
  portrait: {
    backgroundImage: 'url(assets/images/tonym.jpg)',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    minHeight: '800px'
  },
  role: {
    width: '100%'
  },
  vCenter: {
    alignSelf: 'center'
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
  tppScreen: {
    backgroundImage: 'url(assets/images/tpp.screen.png)',
    backgroundPosition: 'top center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100%',
    width: '100%',
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
        <div className={classes.flexFull}>
          <div className={classes.scroll}>
            <Icon fontSize="inherit">keyboard_arrow_down</Icon>
          </div>
          <div className={classes.avatar}>
            <div className={classes.lineHeroLeft}></div>
            <img src="assets/images/avatar.jpg" alt="avatar" />
            <div className={classes.lineHeroRight}></div>
          </div>
          <div className={classes.flexChild}>
            <div className={[classes.contentHero, classes.borderHero].join(' ')}>
              <Typography color="inherit" paragraph variant="h5">Create</Typography>
              <Typography color="inherit" paragraph variant="h5">Design</Typography>
              <Typography color="inherit" paragraph variant="h5">Develop</Typography>
            </div>
          </div>
          <div className={[classes.flexChild, classes.green].join(' ')}>
            <div className={classes.contentHero}>
              <Typography color="inherit" paragraph variant="h3">Tony M</Typography>
              <Typography color="inherit" paragraph variant="h5">Portland, Oregon</Typography>
            </div>
          </div>
        </div>
        <div className={classes.flex}>
          <div className={[classes.flexChild, classes.blue].join(' ')}>
            <div className={classes.contentHero}>
              <Typography color="inherit" variant="h4">
                Building effective teams, creating beautiful things, developing remarkable products for innovative people.
              </Typography>
            </div>
          </div>
          <div className={[classes.flexChild, classes.portrait].join(' ')}>
            <div className={classes.contentHero}></div>
          </div>
        </div>
        <div className={classes.flex}>
          <div className={[classes.flexChild, classes.vCenter].join(' ')}>
            <div className={classes.role}>
              <Typography color="inherit" variant="h5">
                Creative director
              </Typography>
              <Typography className={classes.cherrySwash} color="inherit" variant="h4">
                Mouse and Moon Creations
              </Typography>
            </div>
          </div>
          <div className={[classes.flexChild, classes.green].join(' ')}>
            <div className={classes.contentHero}>
              <Typography color="inherit" paragraph variant="h5">
                As a working artist, accomplished developer, successful team lead, and sometimes teacher, I have a rare ability to move between disciplines with knowledge accumulated from genuine working experience in each.
              </Typography>
              <Typography color="inherit" paragraph variant="h5">
                My goal, as creative director, is bringing together cross-discipline teams to create useful and positive things that people enjoy.
              </Typography>
            </div>
          </div>
        </div>
        <div className={classes.flex}>
          <div className={[classes.flexChild, classes.blue, classes.one].join(' ')}>
            <MediumPosts />
          </div>
          <div className={[classes.flexChild].join(' ')}>
          </div>
        </div>
        <div className={classes.flex}>
          <ContactForm />
        </div>
      </div>
    );

  }
}

export default withStyles(styles)(HomeView);