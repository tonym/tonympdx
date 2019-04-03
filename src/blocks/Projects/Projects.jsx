import React, { Component } from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import Flex from '../../components/Flex';
import FlexChild from '../../components/FlexChild';

const styles = theme => ({
  child: {
    padding: theme.spacing.unit / 4,
    width: '50%',
    [theme.breakpoints.down('md')]: {
      width: '100%'
    }
  },
  imgres: {
    height: 'auto',
    maxWidth: '100%'
  }
});

const awareness = [
  'webshare-lo001-30.jpg',
  'webshare-lo001-28.jpg',
  'webshare-lo001-27.jpg',
  'webshare-lo001-29.jpg'
];

const mouseAndMoon = [
  'webshare-lo001-31.jpg',
  'webshare-lo001-32.jpg',
  'webshare-lo001-33.jpg',
  'webshare-lo001-34.jpg'
];

class Projects extends Component {

  renderGrids = pictures => {

    const { classes } = this.props;

    return (
      <div className={classes.child}>
        <GridList cellHeight={320} spacing={4}>
          {
            pictures.map(picture => {
              return (
                <GridListTile key={picture}>
                  <img src={'/assets/images/' + picture} alt="sample" />
                </GridListTile>
              )
            })
          }
        </GridList>
      </div>
    );

  }

  render() {

    const { classes } = this.props;

    return (
      <React.Fragment>
        <Flex>
          <FlexChild background="primary">
            <div>
              <Typography color="inherit" variant="subtitle" paragraph>Project summary</Typography>
              <Typography color="inherit" variant="h4" gutterBottom>Awareness</Typography>
              <Typography color="inherit" variant="h5" paragraph>
                My final (probably) art series deals with the topics of acknowledgement, awareness, and respect, and was first shown in 2017 in Portland.
              </Typography>
              <Typography color="inherit" variant="subtitle" gutterBottom>Disciplines</Typography>
              <Typography color="inherit" variant="caption" paragraph>Art, photography, design, development, creative direction, marketing, event management</Typography>
              <Typography color="inherit" variant="subtitle" gutterBottom>Deliverables</Typography>
              <Typography color="inherit" variant="caption" paragraph>Web, print</Typography>
            </div>
          </FlexChild>
          {this.renderGrids(awareness)}
        </Flex>
        <Flex flexDirection="column-reverse">
          <FlexChild>
            <img src="/assets/images/sirb.comp.2.png" alt="clinical research comps" className={classes.imgres}/>
          </FlexChild>
          <FlexChild background="secondary">
            <div>
              <Typography color="inherit" variant="subtitle" paragraph>Project summary</Typography>
              <Typography color="inherit" variant="h4" gutterBottom>Research</Typography>
              <Typography color="inherit" variant="h5" paragraph>
                An application for clinical research professionals to track their studies and stay compliant with the regulations of their practice.
              </Typography>
              <Typography color="inherit" variant="subtitle" gutterBottom>Disciplines</Typography>
              <Typography color="inherit" variant="caption" paragraph>UI, UX, design, development, creative direction, front end architecture</Typography>
              <Typography color="inherit" variant="subtitle" gutterBottom>Deliverables</Typography>
              <Typography color="inherit" variant="caption" paragraph>App, web</Typography>
            </div>
          </FlexChild>
        </Flex>
        <Flex>
          <FlexChild background="primary">
            <div>
              <Typography color="inherit" variant="subtitle" paragraph>Project summary</Typography>
              <Typography color="inherit" variant="h4" gutterBottom>Quiz</Typography>
              <Typography color="inherit" variant="h5" paragraph>
                A quiz to go with a mural in a waiting room for children to pass the time while waiting to see the doctor.
              </Typography>
              <Typography color="inherit" variant="subtitle" gutterBottom>Disciplines</Typography>
              <Typography color="inherit" variant="caption" paragraph>UI, UX, design, development, front end architecture</Typography>
              <Typography color="inherit" variant="subtitle" gutterBottom>Deliverables</Typography>
              <Typography color="inherit" variant="caption" paragraph>App</Typography>
            </div>
          </FlexChild>
          <FlexChild>
            <img src="/assets/images/picturethis.jpg" alt="mobile app" className={classes.imgres}/>
          </FlexChild>
        </Flex>
        <Flex flexDirection="column-reverse">
          {this.renderGrids(mouseAndMoon)}
          <FlexChild background="secondary">
            <div>
              <Typography color="inherit" variant="subtitle" paragraph>Project summary</Typography>
              <Typography color="inherit" variant="h4" gutterBottom>Stories</Typography>
              <Typography color="inherit" variant="h5" paragraph>
                Victorian fairy tales come to life.
                We made our own costumes, props and sets for each piece.
                The work has been shown in galleries and at events in Portland
              </Typography>
              <Typography color="inherit" variant="subtitle" gutterBottom>Disciplines</Typography>
              <Typography color="inherit" variant="caption" paragraph>Art, photography, fabrication, creative direction, marketing, event management</Typography>
              <Typography color="inherit" variant="subtitle" gutterBottom>Deliverables</Typography>
              <Typography color="inherit" variant="caption" paragraph>Web, print, objects</Typography>
            </div>
          </FlexChild>
        </Flex>
        <Flex>
          <FlexChild background="primary">
            <div>
              <Typography color="inherit" variant="subtitle" paragraph>Project summary</Typography>
              <Typography color="inherit" variant="h4" gutterBottom>Banking</Typography>
              <Typography color="inherit" variant="h5" paragraph>
                Once upon a time, there were no online banks.
                Then there were.
              </Typography>
              <Typography color="inherit" variant="subtitle" gutterBottom>Disciplines</Typography>
              <Typography color="inherit" variant="caption" paragraph>UI, UX, design, development</Typography>
              <Typography color="inherit" variant="subtitle" gutterBottom>Deliverables</Typography>
              <Typography color="inherit" variant="caption" paragraph>Web</Typography>
            </div>
          </FlexChild>
          <FlexChild background="white">
            <img src="/assets/images/cori.png" alt="Corillian logo" className={classes.imgres}/>
          </FlexChild>
        </Flex>
        <Flex flexDirection="column-reverse">
          <FlexChild>
            <img src="/assets/images/cu.jpg" alt="Credit union generic" className={classes.imgres}/>
          </FlexChild>
          <FlexChild background="secondary">
            <div>
              <Typography color="inherit" variant="subtitle" paragraph>Project summary</Typography>
              <Typography color="inherit" variant="h4" gutterBottom>Voyager SE</Typography>
              <Typography color="inherit" variant="h5" paragraph>
                Banks are expensive.
                Voyager SE is the low cost option of 2003, built by Corillian and a contract team I assembled for the project, the product remained profitable until Corillian's acquisition.
              </Typography>
              <Typography color="inherit" variant="subtitle" gutterBottom>Disciplines</Typography>
              <Typography color="inherit" variant="caption" paragraph>UI, UX, design, development, project management, marketing</Typography>
              <Typography color="inherit" variant="subtitle" gutterBottom>Deliverables</Typography>
              <Typography color="inherit" variant="caption" paragraph>Web, print</Typography>
            </div>
          </FlexChild>
        </Flex>
      </React.Fragment>
    );

  }

}

export default withStyles(styles)(Projects);
