import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  root: {

  }
});



class MediumPosts extends Component {

  render() {

    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Typography color="inherit" variant="h4">Latest case studies and essays</Typography>
      </div>
    );

  }

}

export default withStyles(styles)(MediumPosts);
