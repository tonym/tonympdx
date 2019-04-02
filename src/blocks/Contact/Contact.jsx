import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import ContactForm from '../ContactForm';
import Flex from '../../components/Flex';
import FlexChild from '../../components/FlexChild';

const styles = theme => ({
  root: {

  }
});



class Contact extends Component {

  render() {

    const { classes } = this.props;

    return (
      <Flex>
        <FlexChild background="primary">
        </FlexChild>
        <FlexChild>
          <ContactForm />
        </FlexChild>
      </Flex>
    );

  }

}

export default withStyles(styles)(Contact);
