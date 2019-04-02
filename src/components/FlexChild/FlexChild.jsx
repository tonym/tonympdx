import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

const propTypes = {
  width: PropTypes.string
};

const defaultProps = {
  width: '50%'
}

const styles = theme => ({
  flexChild: {
    alignItems: 'center',
    display: 'flex',
    padding: '120px',
    width: '50%',
    [theme.breakpoints.down('md')]: {
      padding: '120px 12px',
      textAlign: 'center',
      width: '100%'
    }
  },
  flexChildFull: {
    alignItems: 'center',
    display: 'flex',
    flexGrow: 1,
    height: '100%',
    justifyContent: 'center',
    padding: '120px',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      padding: '40px 12px',
      textAlign: 'center'
    }
  }
});



class FlexChild extends Component {

  render() {

    const { classes, fullHeight } = this.props;

    const flexClass = fullHeight ? 'flexFull' : 'flex'

    return (
      <div className={classes[flexClass]}>
        {this.props.children}
      </div>
    );

  }

}

FlexChild.propTypes = propTypes;
FlexChild.defaultProps = defaultProps;

export default withStyles(styles)(FlexChild);
