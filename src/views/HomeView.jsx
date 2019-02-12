import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles';

const styles = {
  root: {
  },
  blue: {
    background: '#193441'
  },
  content: {
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0
  },
  flex: {
    display: 'flex',
  },
  flexChild: {
    flexGrow: 1,
    maxHeight: '100vh',
    position: 'relative',
    textAlign: 'center',
    width: '50%',
    '&:before': {
      content: '""',
      display: 'block',
      paddingTop: '120%'
    }
  },
  green: {
    background: '#667645'
  }
}

class HomeView extends React.Component {

  render () {

    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.flex}>
          <div className={classes.flexChild}>
            <div className={classes.content}>Block 1</div>
          </div>
          <div className={[classes.flexChild, classes.green].join(' ')}>
            <div className={classes.content}>Block 2</div>
          </div>
        </div>
        <div className={classes.flex}>
          <div className={[classes.flexChild, classes.blue].join(' ')}>
            <div className={classes.content}>Block 3</div>
          </div>
          <div className={classes.flexChild}>
            <div className={classes.content}>Block 4</div>
          </div>
        </div>
      </div>
    );

  }
}

export default withStyles(styles)(HomeView);