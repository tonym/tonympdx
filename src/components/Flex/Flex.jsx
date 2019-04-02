import React from 'react';
import PropTypes from 'prop-types';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

const propTypes = {
  alignContent: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'stretch', 'space-between', 'space-around']),
  alignItems: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'stretch', 'baseline']),
  breakpoint: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  breakDirection: PropTypes.oneOf(['row', 'row-reverse', 'column', 'column-reverse']),
  display: PropTypes.oneOf(['flex', 'inline-flex']),
  flexDirection: PropTypes.oneOf(['row', 'row-reverse', 'column', 'column-reverse']),
  flexWrap: PropTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse']),
  elemHeight: PropTypes.string,
  justifyContent: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly']),
  elemWidth: PropTypes.string
};

const defaultProps = {
  alignContent: 'stretch',
  alignItems: 'stretch',
  breakpoint: 'lg',
  breakDirection: 'row',
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'nowrap',
  elemHeight: 'auto',
  justifyContent: 'flex-start',
  method: 'isWidthDown',
  elemWidth: 'auto'
}

const Flex = props => {

  const style = {
    alignContent: props.alignContent,
    alignItems: props.alignItems,
    display: props.display,
    flexDirection: props.flexDirection,
    flexWrap: props.flexWrap,
    height: props.elemHeight,
    justifyContent: props.justifyContent,
    width: props.elemWidth,
  };

  if(isWidthUp(props.breakpoint, props.width)) {
    style.flexDirection = props.breakDirection;
  }

  return (
    <div style={style}>
      {props.children}
    </div>
  );

}

Flex.propTypes = propTypes;
Flex.defaultProps = defaultProps;

export default withWidth()(Flex);
