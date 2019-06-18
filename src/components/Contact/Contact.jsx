import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
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

    return (
      <div id="contact">
        <Typography paragraph variant="h6">
          Contact Tony
        </Typography>
        <Typography paragraph>
          Thank you for your interest in working together!
          I'd love to hear about your project, brand or ideas.
          Send me a message and let's talk!
        </Typography>
        <ContactForm />
      </div>
    );

  }

}

export default withStyles(styles)(Contact);
