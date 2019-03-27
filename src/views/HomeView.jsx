import React from 'react';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  root: {
    color: theme.palette.secondary.main
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
    [theme.breakpoints.down('sm')]: {
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
    [theme.breakpoints.down('sm')]: {
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
    height: '800px',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse'
    }
  },
  flexFull: {
    display: 'flex',
    height: '100vh',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse'
    }
  },
  flexChild: {
    alignItems: 'center',
    display: 'flex',
    height: '100%',
    padding: '120px',
    width: '50%',
    [theme.breakpoints.down('sm')]: {
      padding: 0,
      textAlign: 'center',
      width: '100%'
    }
  },
  form: {
    maxWidth: '400px',
    margin: '12px auto',
    width: '100%'
  },
  green: {
    background: theme.palette.primary.main,
    color: theme.palette.background.paper
  },
  lineHeroLeft: {
    background: theme.palette.secondary.main,
    height: '3px',
    width: '50px',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  lineHeroRight: {
    background: theme.palette.background.paper,
    height: '3px',
    width: '50px',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  one: {
    [theme.breakpoints.down('sm')]: {
      order: 1
    }
  },
  portrait: {
    backgroundImage: 'url(assets/images/tonym.jpg)',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
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
  textField: {
    margin: theme.spacing.unit,
    width: '100%'
  }});

class HomeView extends React.Component {

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
        <div className={classes.flexFull}>
          <div className={[classes.flexChild, classes.blue, classes.one].join(' ')}>
            <Typography className={classes.content} color="inherit" variant="h4">Building effective teams, creating beautiful things, developing remarkable products for innovative people.</Typography>
          </div>
          <div className={[classes.flexChild, classes.portrait].join(' ')}>
          </div>
        </div>
        <div className={classes.flex}>
          <form className={classes.form} action="https://formspree.io/info@theportlandpour.com" method="post">
            <input type="hidden" name="_subject" value="Portfolio contact" />
            <TextField
              className={classes.textField}
              id="name"
              label="Name"
              name="name"
              type="text"
              variant="outlined"
            />
            <TextField
              className={classes.textField}
              helperText="I'll never share you remaikl with anyone else."
              id="email"
              label="Email address"
              name="email"
              type="email"
              variant="outlined"
            />
            <TextField
              className={classes.textField}
              id="description"
              label="Project description"
              multiline
              name="description"
              rows={3}
              type="text"
              variant="outlined"
            />
          <Button
            className={classes.textField}
            color="primary"
            size="large"
            type="submit"
            variant="contained"
          >
            Submit
          </Button>
          </form>
        </div>
      </div>
    );

  }
}

export default withStyles(styles)(HomeView);