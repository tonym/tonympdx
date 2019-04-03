import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import Flex from '../../components/Flex';
import FlexChild from '../../components/FlexChild';

const styles = theme => ({
  list: {
    width: '100%'
  },
});



class Workshops extends Component {

  render() {

  const { classes } = this.props;

    return (
      <Flex>
        <FlexChild background="primary">
          <div>
            <Typography color="inherit" variant="h4" gutterBottom>Teach</Typography>
            <Typography color="inherit" variant="h5">
              From PCC to code school to your facility, workshops, mentorship, and teaching is a big part of what I do.
            </Typography>
          </div>
        </FlexChild>
        <FlexChild>
          <div>
            <Typography color="inherit" variant="h5">Workshops and classes</Typography>
            <Typography color="inherit" variant="subtitle" gutterBottom>A selection of current topics and lessons</Typography>
            <List
              className={classes.list}
              component="div"
            >
              <ListItem className={classes.listItem} divider>
                <ListItemText>
                  Intro to studio lighting
                </ListItemText>
              </ListItem>
              <ListItem className={classes.listItem} divider>
                <ListItemText>
                  Studio lighting for product photography
                </ListItemText>
              </ListItem>
              <ListItem className={classes.listItem} divider>
                <ListItemText>
                  Retouching and processing with Lightroom and Photoshop
                </ListItemText>
              </ListItem>
              <ListItem className={classes.listItem} divider>
                <ListItemText>
                  Introduction to working in technology and software development
                </ListItemText>
              </ListItem>
              <ListItem className={classes.listItem} divider>
                <ListItemText>
                  Getting started with React and React Native
                </ListItemText>
              </ListItem>
            </List>
          </div>
        </FlexChild>
      </Flex>
    );

  }

}

export default withStyles(styles)(Workshops);
