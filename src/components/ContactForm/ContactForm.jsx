import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  form: {
    maxWidth: '360px',
    margin: '12px auto',
    width: '100%'
  },
  textField: {
    marginBottom: theme.spacing.unit * 3,
    width: '100%'
  }
});



class ContactForm extends Component {

  render() {

    const { classes } = this.props;

    return (
      <form className={classes.form} action="https://formspree.io/tony@mouseandmooncreations.com" method="post">
        <input type="hidden" name="_subject" value="Portfolio contact" />
        <TextField
          className={classes.textField}
          id="name"
          label="Name"
          name="name"
          type="text"
          variant="outlined"
        />
        <TextField
          className={classes.textField}
          id="email"
          label="Email address"
          name="email"
          type="email"
          variant="outlined"
        />
        <TextField
          className={classes.textField}
          id="organization"
          label="Organization"
          name="organization"
          type="text"
          variant="outlined"
        />
        <TextField
          className={classes.textField}
          id="description"
          label="Project description"
          multiline
          name="description"
          rows={3}
          type="text"
          variant="outlined"
        />
        <Button
          className={classes.textField}
          color="secondary"
          size="large"
          type="submit"
          variant="contained"
        >
          Submit
        </Button>
      </form>
    );

  }

}

export default withStyles(styles)(ContactForm);
