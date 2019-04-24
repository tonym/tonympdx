import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import Flex from '../../components/Flex';
import FlexChild from '../../components/FlexChild';

const styles = theme => ({
  imgres: {
    height: 'auto',
    maxWidth: '100%'
  },
  list: {
    width: '100%'
  }
});



class Develop extends Component {

  render() {

    const { classes } = this.props;

    return (
      <React.Fragment>
        <Flex>
          <FlexChild background="white" full>
            <div>
              <Typography align="center" color="inherit" variant="h4" gutterBottom>Web development and design</Typography>
              <Typography align="center" color="inherit" variant="h5" gutterBottom>My web work encompasses both front end development and UX design. This is a brief overview of some of the most important professional projects I've worked on, often as lead UX designer or lead devloper or, often times, both.</Typography>
            </div>
          </FlexChild>
        </Flex>
        <Flex flexDirection="column-reverse" flexWrap="wrap">
          <FlexChild>
            <img src="https://sponsor.theportlandpour.com/assets/images/screenshots.png" alt="screenshot of website on various devices" className={classes.imgres}/>
          </FlexChild>
          <FlexChild background="secondary">
            <div>
              <Typography color="inherit" variant="h4" gutterBottom>Develop</Typography>
              <Typography color="inherit" variant="h5">
                From the early days of the World Wide Web until today I've been part of the charge for new, better, more usable digital technology, from the earliest blogs and browser based applications to social networking tools, REST APIs and mobile devices, there's a solution for every problem, and a platform for every voice.
              </Typography>
            </div>
          </FlexChild>
        </Flex>
      </React.Fragment>
    );

  }

}

export default withStyles(styles)(Develop);
