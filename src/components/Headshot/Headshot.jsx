import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import Flex from '../../components/Flex';
import FlexChild from '../../components/FlexChild';

const styles = theme => ({
  cherrySwash: {
    fontFamily: '"Cherry Swash"'
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
    minHeight: '800px',
    padding: '120px',
    width: '50%',
    [theme.breakpoints.down('md')]: {
      padding: '120px 12px',
      textAlign: 'center',
      width: '100%'
    }
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
      <React.Fragment>
        <Flex>
          <FlexChild>
            <div className={classes.contentHero}>
              <div className={classes.contentHero}>
                <Typography paragraph variant="h6">
                  As a working artist, accomplished developer, successful team lead, and sometimes teacher, I have a rare ability to move between disciplines with knowledge accumulated from genuine working experience in each.
                </Typography>
                <Typography paragraph variant="h6">
                  My goal, as creative director, is bringing together cross-discipline teams to create useful products for innovative people.
                </Typography>
              </div>
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
