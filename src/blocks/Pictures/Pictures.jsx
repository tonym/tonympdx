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

const grids = [
  [
    'webshare-lo001-1.jpg',
    'webshare-lo001-2.jpg',
    'webshare-lo001-3.jpg',
    'webshare-lo001-4.jpg'
  ],
  [
    'webshare-lo001-9.jpg',
    'webshare-lo001-7.jpg',
    'webshare-lo001-8.jpg',
    'webshare-lo001-5.jpg'
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
  ]
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
        <Flex flexWrap="wrap">
          <FlexChild background="primary">
            <div>
              <Typography color="inherit" variant="h4" gutterBottom>Create</Typography>
              <Typography color="inherit" variant="h5">
                Whether I'm creating product and editorial photography for clients, pictures for an art series, or sketches for a design or product, it all starts with a camera or a crayon.
              </Typography>
            </div>
          </FlexChild>
          {this.renderGrids(grids[0])}
        </Flex>
        <Flex flexDirection="column-reverse" flexWrap="wrap">
          {this.renderGrids(grids[2])}
          {this.renderGrids(grids[1])}
        </Flex>
      </React.Fragment>
    );

  }

}

export default withStyles(styles)(Pictures);
