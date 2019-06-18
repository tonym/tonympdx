import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MenuIcon from '@material-ui/icons/Menu';
import Flex from '../../components/Flex';

const propTypes = {
  handleLinkCallback: PropTypes.func,
  links: PropTypes.array
};

const defaultProps = {
  handleLinkCallback: () => {},
  links: []
};

const styles = theme => ({
  root: {
    margin: 'auto',
    maxWidth: theme.local.maxWidth,
  },
  appBar: {
    [theme.breakpoints.down('sm')]: {
      bottom: 0,
      top: 'auto'
    }
  },
  banner: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingBottom: theme.spacing.unit * 3,
    paddingTop: theme.spacing.unit * 3
  },
  blurb: {
    letterSpacing: '.02em',
    lineHeight: 1.25,
    marginTop: theme.spacing.unit * 14,
    [theme.breakpoints.down('sm')]: {
      fontSize: 'small',
      marginTop: 0,
      padding: theme.spacing.unit * 3
    }
  },
  drawer: {
    width: '33%',
    flexShrink: 0,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  drawerPaper: {
    width: '33%',
  },
  hide: {
    display: 'none',
  },
  subtitle: {
    paddingLeft: theme.spacing.unit * 2
  },
  title: {
    borderRightColor: theme.palette.text.primary,
    borderRightStyle: 'solid',
    borderRightWidth: '1px',
    paddingRight: theme.spacing.unit * 2,
    [theme.breakpoints.down('sm')]: {
      border: 'none'
    }
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: 'auto',
    maxWidth: theme.local.maxWidth,
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'row-reverse',
    }
  }
});

const Hero = props => {

  const { classes, links } = props;

  const [open, setOpen] = React.useState(false);

  function handleDrawerOpen() {

    setOpen(true);

  }

  function handleDrawerClose() {

    setOpen(false);

  }

  function handleLink(link) {

    props.handleLinkCallback(link);
    handleDrawerClose();

  }

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} color="secondary" elevation={0}>
        <Toolbar className={classes.toolbar}>
          <Flex alignItems="center">
            <Typography className={classes.title} variant="h6">Tony M</Typography>
            <Hidden mdDown>
              <Typography align="right" className={classes.subtitle}>Portland, Oregon</Typography>
            </Hidden>
          </Flex>
          <Hidden smDown>
            <Tabs value={false}>
              {links.map((text, index) => (
                <Tab key={index} label={text} onClick={() => { handleLink(index); }} />
              ))}
            </Tabs>
          </Hidden>
          <Hidden mdUp>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
              >
              <MenuIcon />
            </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <List>
          {links.map((text, index) => (
            <ListItem button key={index} onClick={() => { handleLink(index); }}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Typography className={classes.blurb} variant="h4">
        Tony M is an artist, developer, and UX designer currently working as creative director and frontend lead at Mouse and Moon Creations in Portland, Oregon
      </Typography>
    </div>
  );

}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default withStyles(styles)(Hero);
