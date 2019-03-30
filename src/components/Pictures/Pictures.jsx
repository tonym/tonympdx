import React, { Component } from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

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
        <GridList cellHeight={280} spacing={4}>
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
        <div className={classes.root}>
          <div className={[classes.flexChild, classes.blue].join(' ')}>
            <div>
              <Typography color="inherit" variant="h4" gutterBottom>Create</Typography>
              <Typography color="inherit" variant="h5">
                Whether I'm creating product and editorial photography for clients, pictures for an art series, or sketches for a design or product, it all starts with a camera or a crayon.
              </Typography>
            </div>
          </div>
          {this.renderGrids(grids[0])}
        </div>
        <div className={[classes.root, classes.reverse].join(' ')}>
          {this.renderGrids(grids[1])}
          <div className={[classes.flexChild, classes.green].join(' ')}>
            <div>
              <Typography color="inherit" variant="h4" gutterBottom>Sell</Typography>
              <Typography color="inherit" variant="h5">
                You're passionate about what you do and what you make. So am I. You put your heart and soul into your project or product, and now it's time to share it with the world. No worries. I got your back.
              </Typography>
            </div>
          </div>
        </div>
        <div className={classes.root}>
          <div className={[classes.flexChild, classes.blue].join(' ')}>
            <div>
              <Typography color="inherit" variant="h4" gutterBottom>Show</Typography>
              <Typography color="inherit" variant="h5">
                When I'm not working on client projects, I still make art and show it online.
                Occasionally I show my work in my downtown studio, or in places around Portland.
              </Typography>
            </div>
          </div>
          {this.renderGrids(grids[2])}
        </div>
        <div className={[classes.root, classes.reverse].join(' ')}>
          {this.renderGrids(grids[3])}
          <div className={[classes.flexChild, classes.green].join(' ')}>
            <div>
              <Typography color="inherit" variant="h4" gutterBottom>Celebrate</Typography>
              <Typography color="inherit" variant="h5">
                Sometimes you can make art from products.
                My current project started out as a series of pictures of craft cocktails.
                It evolved into The Portland Pour.
              </Typography>
            </div>
          </div>
        </div>
      </React.Fragment>
    );

  }

}

export default withStyles(styles)(Pictures);
