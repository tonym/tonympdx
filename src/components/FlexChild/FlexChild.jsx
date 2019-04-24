import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

const propTypes = {
  background: PropTypes.oneOf(['primary', 'secondary']),
  full: PropTypes.bool
};

const defaultProps = {
  background: null,
  full: false
}

const styles = theme => ({
  root: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    padding: '120px',
    width: '50%',
    [theme.breakpoints.down('md')]: {
      height: '100%',
      padding: '120px 12px',
      textAlign: 'center',
      width: '100%'
    }
  },
  full: {
    width: '100%'
  },
  primary: {
    background: theme.palette.primary.main,
    color: theme.palette.background.paper
  },
  secondary: {
    background: theme.palette.secondary.main,
    color: theme.palette.background.paper
  },
  white: {
    background: '#fbf9e2'
  }
});

const FlexChild = props => {

  const { classes } = props;

  const className = classes.root + (props.background ? ' ' + classes[props.background] : '') + (props.full ? ' ' + classes.full : '');

  return (
    <div className={className}>
      {props.children}
    </div>
  );

}

FlexChild.propTypes = propTypes;
FlexChild.defaultProps = defaultProps;

export default withStyles(styles)(FlexChild);
