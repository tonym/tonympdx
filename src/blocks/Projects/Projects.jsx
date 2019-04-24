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

class Projects extends Component {

  renderGrids = pictures => {

    const { classes } = this.props;

    return (
      <div className={classes.child}>
        <GridList cellHeight={340} spacing={4}>
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
          <FlexChild>
            <img src="/assets/images/puzzle.jpg" alt="puzzle" className={classes.imgres}/>
          </FlexChild>
          <FlexChild background="secondary">
            <div>
              <Typography color="inherit" variant="subtitle" paragraph>Project summary</Typography>
              <Typography color="inherit" variant="h4" gutterBottom>UI component kits</Typography>
              <Typography color="inherit" variant="h5" paragraph>
                Collection of React UI component kits by site type, such as blog, portal, store, etc.
              </Typography>
              <Typography color="inherit" variant="subtitle" gutterBottom>Disciplines</Typography>
              <Typography color="inherit" variant="caption" paragraph>UI, UX, development, creative direction, project management</Typography>
              <Typography color="inherit" variant="subtitle" gutterBottom>Deliverables</Typography>
              <Typography color="inherit" variant="caption" paragraph>Web</Typography>
            </div>
          </FlexChild>
        </Flex>
        <Flex>
          <FlexChild background="primary">
            <div>
              <Typography color="inherit" variant="subtitle" paragraph>Project summary</Typography>
              <Typography color="inherit" variant="h4" gutterBottom>Workspace</Typography>
              <Typography color="inherit" variant="h5" paragraph>
                Create a modern, responsive user interface for the next version of a standards compliance tracking application.
              </Typography>
              <Typography color="inherit" variant="subtitle" gutterBottom>Disciplines</Typography>
              <Typography color="inherit" variant="caption" paragraph>UI, UX, design, development, front end architecture</Typography>
              <Typography color="inherit" variant="subtitle" gutterBottom>Deliverables</Typography>
              <Typography color="inherit" variant="caption" paragraph>Web</Typography>
            </div>
          </FlexChild>
          <FlexChild>
            <img src="/assets/images/workspace.png" alt="App detail screen" className={classes.imgres}/>
          </FlexChild>
        </Flex>
        <Flex flexDirection="column-reverse">
          <FlexChild>
            <img src="/assets/images/backbone.png" alt="Backbone logo" className={classes.imgres}/>
          </FlexChild>
          <FlexChild background="secondary">
            <div>
              <Typography color="inherit" variant="subtitle" paragraph>Project summary</Typography>
              <Typography color="inherit" variant="h4" gutterBottom>Framework</Typography>
              <Typography color="inherit" variant="h5" paragraph>
                A custom, front end, MVC framework using Backbone, Underscore, and Grunt in a time before React, Angular, et.al.
              </Typography>
              <Typography color="inherit" variant="subtitle" gutterBottom>Disciplines</Typography>
              <Typography color="inherit" variant="caption" paragraph>Low level engineering</Typography>
              <Typography color="inherit" variant="subtitle" gutterBottom>Deliverables</Typography>
              <Typography color="inherit" variant="caption" paragraph>Web</Typography>
            </div>
          </FlexChild>
        </Flex>
        <Flex>
          <FlexChild background="primary">
            <div>
              <Typography color="inherit" variant="subtitle" paragraph>Project summary</Typography>
              <Typography color="inherit" variant="h4" gutterBottom>Trek-Tech</Typography>
              <Typography color="inherit" variant="h5" paragraph>
                Improve existing website and refactor for increased sales and conversion.
                Update creative and visual aspects, refine e-commerce and streamline SEO.
              </Typography>
              <Typography color="inherit" variant="subtitle" gutterBottom>Disciplines</Typography>
              <Typography color="inherit" variant="caption" paragraph>UI, UX, design, development, analytics</Typography>
              <Typography color="inherit" variant="subtitle" gutterBottom>Deliverables</Typography>
              <Typography color="inherit" variant="caption" paragraph>Web</Typography>
            </div>
          </FlexChild>
          <FlexChild>
            <img src="/assets/images/trekpod.png" alt="App detail screen" className={classes.imgres}/>
          </FlexChild>
        </Flex>
        <Flex flexDirection="column-reverse">
          <FlexChild>
            <img src="/assets/images/eqnetwork.png" alt="App detail screen" className={classes.imgres}/>
          </FlexChild>
          <FlexChild background="secondary">
            <div>
              <Typography color="inherit" variant="subtitle" paragraph>Project summary</Typography>
              <Typography color="inherit" variant="h4" gutterBottom>EQ Network</Typography>
              <Typography color="inherit" variant="h5" paragraph>
                Developer community site for a San Francisco video startup.
                Create a marketing micro site as a gateway to community site.
              </Typography>
              <Typography color="inherit" variant="subtitle" gutterBottom>Disciplines</Typography>
              <Typography color="inherit" variant="caption" paragraph>UI, UX, development, project management</Typography>
              <Typography color="inherit" variant="subtitle" gutterBottom>Deliverables</Typography>
              <Typography color="inherit" variant="caption" paragraph>Web</Typography>
            </div>
          </FlexChild>
        </Flex>
        <Flex>
          <FlexChild background="primary">
            <div>
              <Typography color="inherit" variant="subtitle" paragraph>Project summary</Typography>
              <Typography color="inherit" variant="h4" gutterBottom>XML Challenge</Typography>
              <Typography color="inherit" variant="h5" paragraph>
                Create an interactive test for a student XML contest.
              </Typography>
              <Typography color="inherit" variant="subtitle" gutterBottom>Disciplines</Typography>
              <Typography color="inherit" variant="caption" paragraph>UI, UX, development</Typography>
              <Typography color="inherit" variant="subtitle" gutterBottom>Deliverables</Typography>
              <Typography color="inherit" variant="caption" paragraph>Web</Typography>
            </div>
          </FlexChild>
          <FlexChild>
            <img src="/assets/images/xmlchallenge.jpg" alt="App detail screen" className={classes.imgres}/>
          </FlexChild>
        </Flex>
        <Flex flexDirection="column-reverse">
          <FlexChild>
            <img src="/assets/images/attensa.png" alt="App detail screen" className={classes.imgres}/>
          </FlexChild>
          <FlexChild background="secondary">
            <div>
              <Typography color="inherit" variant="subtitle" paragraph>Project summary</Typography>
              <Typography color="inherit" variant="h4" gutterBottom>Attensa</Typography>
              <Typography color="inherit" variant="h5" paragraph>
                Create and support the corporate marketing site, and provide technical marketing services to the marketing director for Attensa RSS Server.
              </Typography>
              <Typography color="inherit" variant="subtitle" gutterBottom>Disciplines</Typography>
              <Typography color="inherit" variant="caption" paragraph>Development, technical marketing</Typography>
              <Typography color="inherit" variant="subtitle" gutterBottom>Deliverables</Typography>
              <Typography color="inherit" variant="caption" paragraph>Web</Typography>
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
          <FlexChild>
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
        <Flex>
          <FlexChild background="primary">
            <div>
              <Typography color="inherit" variant="subtitle" paragraph>Project summary</Typography>
              <Typography color="inherit" variant="h4" gutterBottom>Promotion</Typography>
              <Typography color="inherit" variant="h5" paragraph>
                Drink local is a community initiative raising awareness of sustainable, local food and beverage products and supporting local business
              </Typography>
              <Typography color="inherit" variant="subtitle" gutterBottom>Disciplines</Typography>
              <Typography color="inherit" variant="caption" paragraph>Design, promotion, collaboration</Typography>
              <Typography color="inherit" variant="subtitle" gutterBottom>Deliverables</Typography>
              <Typography color="inherit" variant="caption" paragraph>Web, apparel</Typography>
            </div>
          </FlexChild>
          <FlexChild>
            <img src="/assets/images/get-a-shirt.jpg" alt="poster" className={classes.imgres}/>
          </FlexChild>
        </Flex>
      </React.Fragment>
    );

  }

}

export default withStyles(styles)(Projects);
