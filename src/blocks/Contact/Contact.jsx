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
        <Flex>
          <FlexChild background="primary">
            <div>
              <Typography color="inherit" variant="h4" gutterBottom>Contact</Typography>
              <Typography color="inherit" variant="h5">
                Thank you for your interest in working together!
                I'd love to hear about your project, brand or ideas.
                Send me a message and let's talk.
              </Typography>
            </div>
          </FlexChild>
          <FlexChild>
            <ContactForm />
          </FlexChild>
        </Flex>
      </div>
    );

  }

}

export default withStyles(styles)(Contact);
