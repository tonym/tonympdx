import React from 'react';
import Fab from '@material-ui/core/Fab';
import withStyles from '@material-ui/core/styles/withStyles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import EmailIcon from '@material-ui/icons/Email';
import Brands from '../blocks/Brands';
import Contact from '../components/Contact';
import Design from '../blocks/Design';
import Develop from '../blocks/Develop';
import Headshot from '../components/Headshot';
import Hero from '../components/Hero';
import Pictures from '../blocks/Pictures';
import Projects from '../components/Projects';
import Social from '../blocks/Social';
import Workshops from '../blocks/Workshops';

const links = [
  'More info',
  'Contact'
];

const styles = theme => ({
  fab: {
    bottom: '10%',
    position: 'absolute',
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
      <Fab aria-label="Contact" className={classes.fab} color="primary" onClick={() => handleLinkClick(1) }>
        <EmailIcon />
      </Fab>
      <Dialog maxWidth="lg" open={open} onClose={handleClickClose} aria-labelledby="form-dialog-title">
        <DialogContent>
          {dialogComponents[dialogComponent]}
        </DialogContent>
      </Dialog>
    </div>
  );

}

export default withStyles(styles)(HomeView);