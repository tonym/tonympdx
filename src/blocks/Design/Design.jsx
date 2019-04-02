import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import Code from '@material-ui/icons/Code';
import FitnessCenter from '@material-ui/icons/FitnessCenter';
import LocalDrink from '@material-ui/icons/LocalDrink';
import Flex from '../../components/Flex';
import FlexChild from '../../components/FlexChild';

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



class Design extends Component {

  render() {

    const { classes } = this.props;

    return (
      <React.Fragment>
        <Flex flexWrap="wrap">
          <FlexChild background="primary">
            <div>
              <Typography color="inherit" variant="h4" gutterBottom>Design</Typography>
              <Typography color="inherit" variant="h5">
                Context and usability are everything, and sometimes the bigger picture requires more than just a pretty image.
                Your project's UX is as important as your project's appearance.
              </Typography>
            </div>
          </FlexChild>
          <FlexChild>
            <List
              className={classes.list}
              component="div"
              subheader={<ListSubheader className={classes.listSubHeader} component="h5" disableSticky>
                <Typography variant="h5" gutterBottom>
                  Recent case studies and essays
                </Typography>
              </ListSubheader>}
            >
              <ListItem button className={classes.listItem} divider>
                <ListItemIcon>
                  <LocalDrink />
                </ListItemIcon>
                <ListItemText>
                  The UX of beverage recipes
                </ListItemText>
              </ListItem>
              <ListItem button className={classes.listItem} divider>
                <ListItemIcon>
                  <Code />
                </ListItemIcon>
                <ListItemText>
                  Building a blog with React, Node, and Ghost
                </ListItemText>
              </ListItem>
              <ListItem button className={classes.listItem}>
                <ListItemIcon>
                  <FitnessCenter />
                </ListItemIcon>
                <ListItemText>
                  The calories in cocktails
                </ListItemText>
              </ListItem>
            </List>
          </FlexChild>
        </Flex>
      </React.Fragment>
    );

  }

}

export default withStyles(styles)(Design);
