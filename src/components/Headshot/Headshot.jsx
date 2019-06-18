import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import Flex from '../../components/Flex';
import FlexChild from '../../components/FlexChild';

const styles = theme => ({
  cherrySwash: {
    fontFamily: '"Cherry Swash"'
  },
  flexChildRoot: {
    padding: theme.spacing.unit * 8,
    [theme.breakpoints.down('md')]: {
      height: 'auto',
      padding: 0,
      textAlign: 'left',
      width: 'auto'
    }
  },
  link: {
    color: 'inherit',
    textDecoration: 'none'
  },
  portrait: {
    alignItems: 'center',
    backgroundImage: 'url(assets/images/tonym.jpg)',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    display: 'flex',
    minHeight: '600px',
    width: '50%',
    [theme.breakpoints.down('md')]: {
      width: '100%'
    }
  }
});



class Headshot extends Component {

  render() {

    const { classes } = this.props;

    return (
      <React.Fragment>
        <Flex>
          <FlexChild classes={{root: classes.flexChildRoot}}>
            <div className={classes.contentHero}>
              <Typography paragraph variant="h6">More about Tony</Typography>
              <Typography paragraph>
                As a working artist, accomplished developer, successful team lead, and sometimes teacher, I have a rare ability to move between disciplines with knowledge accumulated from genuine working experience in each.
              </Typography>
              <Typography paragraph>
                After studying English at Boise State University, and some time in the military, I began a career as a freelance and creative writer.
                I started building websites as a way to publish my art, and before long began developing websites professionally by building online banks and client side applications.
                I never stopped building things, or telling stories, and today I'm proud to offer both creative and technical skill to clients and employers.
              </Typography>
              <Typography paragraph>
                If you're interested in the arts, or creating scalable, secure, high traffic web applications that extend the reach of creators everywhere, get in touch.
                You can find me making pictures and designs for local companies, building usable interfaces for people with good ideas, hosting workshops at Mouse and Moon, or enjoying happy hour with friends and colleagues.
              </Typography>
            </div>
          </FlexChild>
          <div className={classes.portrait}>
            <div className={classes.contentHero}></div>
          </div>
        </Flex>
      </React.Fragment>
    );

  }

}

export default withStyles(styles)(Headshot);
