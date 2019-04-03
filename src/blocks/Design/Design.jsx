import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
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
  link: {
    color: 'inherit',
    textDecoration: 'none',
    width: '100%'
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
            <div>
              <Typography color="inherit" variant="h5">Recent case studies and essays</Typography>
              <Typography color="inherit" variant="subtitle">Notes on topics, projects, and patterns</Typography>
              <List className={classes.list} component="div">
                <ListItem button className={classes.listItem} divider>
                  <a href="https://medium.com/@tony.m.pdx/the-ux-of-beverage-recipes-1a0d5898d208" rel="noopener noreferrer" target="_blank" className={classes.link}>
                    <ListItemText>
                      The UX of beverage recipes
                    </ListItemText>
                  </a>
                </ListItem>
                <ListItem button className={classes.listItem} divider>
                  <a href="https://medium.com/@tony.m.pdx/building-a-blog-with-react-node-and-ghost-1991325b3cd5" rel="noopener noreferrer" target="_blank" className={classes.link}>
                    <ListItemText>
                      Building a blog with React, Node, and Ghost
                    </ListItemText>
                  </a>
                </ListItem>
                <ListItem button className={classes.listItem}>
                  <a href="https://www.theportlandpour.com/post/the-calories-in-cocktails" rel="noopener noreferrer" target="_blank" className={classes.link}>
                    <ListItemText>
                      The calories in cocktails
                    </ListItemText>
                  </a>
                </ListItem>
              </List>
            </div>
          </FlexChild>
        </Flex>
      </React.Fragment>
    );

  }

}

export default withStyles(styles)(Design);
