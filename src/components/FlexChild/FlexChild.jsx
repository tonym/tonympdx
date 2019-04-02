import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

const propTypes = {
  background: PropTypes.oneOf(['primary', 'secondary'])
};

const defaultProps = {
  background: null
}

const styles = theme => ({
  root: {
    alignItems: 'center',
    display: 'flex',
    padding: '120px',
    width: '50%',
    [theme.breakpoints.down('md')]: {
      height: '100%',
      padding: '120px 12px',
      textAlign: 'center',
      width: '100%'
    }
  },
  primary: {
    background: theme.palette.primary.main,
    color: theme.palette.background.paper
  },
  secondary: {
    background: theme.palette.secondary.main,
    color: theme.palette.background.paper
  }
});

const FlexChild = props => {

  const { classes } = props;

  const className = classes.root + (props.background ? ' ' + classes[props.background] : '');

  return (
    <div className={className}>
      {props.children}
    </div>
  );

}

FlexChild.propTypes = propTypes;
FlexChild.defaultProps = defaultProps;

export default withStyles(styles)(FlexChild);
