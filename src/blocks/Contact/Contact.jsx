import React, { Component } from 'react';
import Flex from '../../components/Flex';
import ContactForm from '../ContactForm';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  root: {

  }
});



class Contact extends Component {

  render() {

    const { classes } = this.props;

    return (
      <Flex>
        <ContactForm />
      </Flex>
    );

  }

}

export default withStyles(styles)(Contact);
