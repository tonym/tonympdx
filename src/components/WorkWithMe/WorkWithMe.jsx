import React from 'react';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import ContactForm from '../ContactForm';
import Flex from '../../components/Flex';
import FlexChild from '../../components/FlexChild';

const styles = theme => ({
  flexChildRoot: {
    padding: theme.spacing.unit * 8,
    [theme.breakpoints.down('md')]: {
      height: 'auto',
      padding: 0,
      textAlign: 'left',
      width: 'auto'
    }
  },
});



const WorkWithMe = props => {

    const { classes } = props;

    return (
      <div className={classes.root}>
        <Flex alignItems="flex-start">
          <FlexChild classes={{root: classes.flexChildRoot}}>
            <div>
              <Typography paragraph variant="h6">
                Work with me
              </Typography>
              <Typography paragraph>
                If you share my enthusiasm for great ideas, a belief that what you do should be fun and rewarding, and value strong team players, lack of ego, and a value system based on acknowledgement and respect, let's chat.
              </Typography>
              <Typography paragraph variant="h6">What I'm good at</Typography>
              <Typography>
                <strong>Front end development</strong>
              </Typography>
              <Typography gutterBottom>
                <ul>
                  <li>Scalable front end architecture</li>
                  <li>Low level framework design and creation</li>
                  <li>Design systems and component libraries</li>
                  <li>High performance/high traffic web applications</li>
                  <li>Large scale front end design and development</li>
                  <li>Product management</li>
                </ul>
              </Typography>
              <Typography>
                <strong>UX design</strong>
              </Typography>
              <Typography gutterBottom>
                <ul>
                  <li>Interaction design/wireframing</li>
                  <li>Interactive prototyping</li>
                  <li>User interviews and defining personae</li>
                  <li>Interaction components for React</li>
                </ul>
              </Typography>
              <Typography>
                <strong>Creative</strong>
              </Typography>
              <Typography gutterBottom>
                <ul>
                  <li>Product promotion and photography</li>
                  <li>Creative direction/project managment</li>
                  <li>Content creation/writing</li>
                  <li>Brand building and curation</li>
                  <li>Campaign consulting and account management</li>
                </ul>
              </Typography>
              <Typography>
                <strong>Leadership</strong>
              </Typography>
              <Typography gutterBottom>
                <ul>
                  <li>Technical assesment and interviews</li>
                  <li>Mentoring and career development</li>
                  <li>Interdisciplinary coordination/management</li>
                  <li>Sprint planning, story writing, and team organization</li>
                </ul>
              </Typography>
            </div>
          </FlexChild>
          <FlexChild classes={{root: classes.flexChildRoot}}>
            <div>
              <Typography paragraph variant="h6">
                Get in touch
              </Typography>
              <Typography paragraph>
                I'm always interested in learning about new opportunities, new projects, and visionary products
              </Typography>
              <Typography paragraph>
                Whether you need creative support, technical services, coaching, or someone to organize and lead, I'd love to talk to you.
              </Typography>
              <ContactForm />
            </div>
          </FlexChild>
        </Flex>
      </div>
    );

}

export default withStyles(styles)(WorkWithMe);
