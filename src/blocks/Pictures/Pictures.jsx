import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import Flex from '../../components/Flex';
import FlexChild from '../../components/FlexChild';

const styles = theme => ({
  button: {
    marginTop: theme.spacing.unit * 3
  },
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

const grids = [
  [
    'webshare-lo001-1.jpg',
    'webshare-lo001-2.jpg',
    'webshare-lo001-3.jpg',
    'webshare-lo001-4.jpg'
  ],
  [
    'webshare-lo001-37.jpg',
    'webshare-lo001-38.jpg',
    'webshare-lo001-42.jpg',
    'webshare-lo001-9.jpg'
  ],
  [
    'webshare-lo001-21.jpg',
    'webshare-lo001-16.jpg',
    'webshare-lo001-18.jpg',
    'webshare-lo001-20.jpg'
  ],
  [
    'webshare-lo001-20.jpg',
    'webshare-lo001-21.jpg',
    'webshare-lo001-22.jpg',
    'webshare-lo001-23.jpg'
  ],
  [
    'webshare-lo001-5.jpg',
    'webshare-lo001-10.jpg',
    'webshare-lo001-43.jpg',
    'webshare-lo001-8.jpg'
  ]
];

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

const ng = [
  'ng1.jpg',
  'ng2.jpg',
  'ng3.jpg',
  'ng4.jpg'
]

const past = [
  'pinup.jpg',
  'webshare-lo001-49.jpg',
  'webshare-lo001-50.jpg',
  'webshare-lo001-45.jpg'
];

class Pictures extends Component {

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
        <Flex>
          <FlexChild background="white" full>
            <div>
              <Typography align="center" color="inherit" variant="h4" gutterBottom>Creative work for clients and art galleries</Typography>
              <Typography align="center" color="inherit" variant="h5" gutterBottom>A short breakdown of various recent creative projects I or my company, Mouse and Moon Creations, has done for clients or for display in galleries or print.</Typography>
            </div>
          </FlexChild>
        </Flex>
        <Flex flexDirection="column-reverse" flexWrap="wrap">
          {this.renderGrids(grids[0])}
          <FlexChild background="secondary">
            <div>
              <Typography color="inherit" variant="h4" gutterBottom>Create</Typography>
              <Typography color="inherit" variant="h5" paragraph>
                Whether I'm creating product and editorial photography for clients, pictures for an art series, or sketches for a design or product, it all starts with a camera or a crayon.
              </Typography>
              <Button className={classes.button} variant="outlined" color="inherit" href="#contact">What can I create for you?</Button>
            </div>
          </FlexChild>
        </Flex>
        <Flex flexWrap="wrap">
          <FlexChild background="primary">
            <div>
              <Typography color="inherit" variant="subtitle" paragraph>Project summary</Typography>
              <Typography color="inherit" variant="h4" gutterBottom>The Portland Pour</Typography>
              <Typography color="inherit" variant="h5" paragraph>
                The Portland Pour started as an art project and a way to celebrate the amazing craft distilling and cocktails of Portland.
                It evovled into so much more, and has become the only website dedicated to local craft distilling art, news, and recipes.
              </Typography>
            </div>
          </FlexChild>
          {this.renderGrids(grids[2])}
        </Flex>
        <Flex flexDirection="column-reverse" flexWrap="wrap">
          {this.renderGrids(grids[1])}
          <FlexChild background="secondary">
            <div>
              <Typography color="inherit" variant="subtitle" paragraph>Project summary</Typography>
              <Typography color="inherit" variant="h4" gutterBottom>Beverage products</Typography>
              <Typography color="inherit" variant="h5" paragraph>
                Specializing in product photography for the beverage industry has been one of the most fun projects of them all.
                It's creative expression with a purpose, and helping local companies build their brand is very satisfying indeed.
              </Typography>
            </div>
          </FlexChild>
        </Flex>
        <Flex flexWrap="wrap">
          <FlexChild background="primary">
            <div>
              <Typography color="inherit" variant="subtitle" paragraph>Project summary</Typography>
              <Typography color="inherit" variant="h4" gutterBottom>Promotional work</Typography>
              <Typography color="inherit" variant="h5" paragraph>
                Occassionaly I'm asked to create images for promotional projects and brand awareness, or for use on websites and social media.
              </Typography>
            </div>
          </FlexChild>
          {this.renderGrids(grids[4])}
        </Flex>
        <Flex flexDirection="column-reverse" flexWrap="wrap">
          {this.renderGrids(awareness)}
          <FlexChild background="secondary">
            <div>
              <Typography color="inherit" variant="subtitle" paragraph>Art project</Typography>
              <Typography color="inherit" variant="h4" gutterBottom>Awareness</Typography>
              <Typography color="inherit" variant="h5" paragraph>
                My final (probably) art series deals with the topics of acknowledgement, awareness, and respect, and was first shown in 2017 in Portland.
              </Typography>
            </div>
          </FlexChild>
        </Flex>
        <Flex flexWrap="wrap">
          <FlexChild background="primary">
            <div>
              <Typography color="inherit" variant="subtitle" paragraph>Art project</Typography>
              <Typography color="inherit" variant="h4" gutterBottom>Stories</Typography>
              <Typography color="inherit" variant="h5" paragraph>
                Victorian fairy tales come to life.
                We made our own costumes, props and sets for each piece.
                The work has been shown in galleries and at events in Portland
              </Typography>
            </div>
          </FlexChild>
          {this.renderGrids(mouseAndMoon)}
        </Flex>
        <Flex flexDirection="column-reverse" flexWrap="wrap">
          {this.renderGrids(past)}
          <FlexChild background="secondary">
            <div>
              <Typography color="inherit" variant="subtitle" paragraph>Art project</Typography>
              <Typography color="inherit" variant="h4" gutterBottom>Past work</Typography>
              <Typography color="inherit" variant="h5" paragraph>
                A very brief summary of past art projects and studio creations.
              </Typography>
            </div>
          </FlexChild>
        </Flex>
        <Flex flexWrap="wrap">
          <FlexChild background="primary">
            <div>
              <Typography color="inherit" variant="subtitle" paragraph>Project summary</Typography>
              <Typography color="inherit" variant="h4" gutterBottom>Nervy Girl</Typography>
              <Typography color="inherit" variant="h5" paragraph>
                 From 2001 until 2003 I had the great privilege to write a feature column for Nervy Girl magazine.
                 As an English major, and a writer first, of all the works I've published, both before and since, this is the writing of which I am most proud.
              </Typography>
            </div>
          </FlexChild>
          {this.renderGrids(ng)}
        </Flex>
      </React.Fragment>
    );

  }

}

export default withStyles(styles)(Pictures);
