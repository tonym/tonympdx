import React from 'react';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import ContactForm from '../ContactForm';

const styles = theme => ({
  root: {

  }
});



const WorkWithMe = props => {

    const { classes } = props;

    return (
      <div className={classes.root}>
        <Typography paragraph variant="h6">
          Work with me
        </Typography>
        <Typography paragraph>
          If you share my enthusiasm for great ideas, a belief that what you do should be fun and rewarding, and value strong team players, lack of ego, and a value system based on acknowledgement and respect, let's chat.
        </Typography>
        <Typography paragraph>
          I'm always interested in learning about new opportunities, new projects, and visionary products
        </Typography>
        <Typography paragraph>
          Whether you need creative support, technical services, coaching, or someone to organize and lead, I'd love to talk to you.
        </Typography>
        <Typography paragraph variant="h6">What I'm good at</Typography>
        <Typography>
          <strong>Creative</strong>
        </Typography>
        <ContactForm />
      </div>
    );

}

export default withStyles(styles)(WorkWithMe);
