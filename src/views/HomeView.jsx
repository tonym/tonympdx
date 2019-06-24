import React from 'react';
import Fab from '@material-ui/core/Fab';
import withStyles from '@material-ui/core/styles/withStyles';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import EmailIcon from '@material-ui/icons/Email';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Headshot from '../components/Headshot';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import WorkWithMe from '../components/WorkWithMe';
import projects from '../projects';

const links = [
  'About',
  'Work with me',
  'Contact'
];

const styles = theme => ({
  closeButton: {
    position: 'absolute',
    right: theme.spacing.unit / 2,
    top: theme.spacing.unit / 2
  },
  fab: {
    bottom: '10%',
    position: 'fixed',
    right: '10%',
    zIndex: 1200,
    [theme.breakpoints.down('sm')]: {
      bottom: theme.spacing.unit * 4,
      left: 0,
      margin: '0 auto',
      right: 0
    }
  },
});

const HomeView = props => {

  const [dialogComponent, setDialogComponent] = React.useState(false);

  const [open, setOpen] = React.useState(false);

  const dialogComponents = [
    <Headshot />,
    <WorkWithMe />,
    <Contact />
  ];

  const { classes } = props;

  const handleClickOpen = () => {

    setOpen(true);

  }

  const handleClickClose = () => {

    setOpen(false);

  }

  const handleLinkClick = link => {

    setDialogComponent(link);
    handleClickOpen();

  }

  return (
    <div className={classes.root}>
      <Hero handleLinkCallback={handleLinkClick} links={links} />
      <Projects projects={projects} />
      <Footer />
      <Fab aria-label="Contact" className={classes.fab} color="primary" onClick={() => handleLinkClick(1) }>
        <EmailIcon />
      </Fab>
      <Dialog maxWidth="md" open={open} onClose={handleClickClose} aria-labelledby="form-dialog-title">
        <DialogTitle>
          <IconButton aria-label="Close" className={classes.closeButton} onClick={handleClickClose} size="small">
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          {dialogComponents[dialogComponent]}
        </DialogContent>
      </Dialog>
    </div>
  );

}

export default withStyles(styles)(HomeView);