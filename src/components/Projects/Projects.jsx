import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape({
    brief: PropTypes.string.isRequired,
    client: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    featuredImage: PropTypes.string.isRequired,
    media: PropTypes.array,
    name: PropTypes.string.isRequired,
    subTypes: PropTypes.array,
    type: PropTypes.oneOf(['development', 'creative', 'ux']).isRequired,
  }))
};

const defaultProps = {
  projects: []
};

const styles = theme => ({
  root: {
    margin: 'auto',
    maxWidth: theme.local.maxWidth,
    paddingTop: theme.spacing.unit * 8,
  },
  card: {
    cursor: 'pointer',
    width: 300,
    margin: 6,
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing.unit / 2,
    top: theme.spacing.unit / 2
  },
  media: {
    height: 200,
  },
  productImage: {
    maxWidth: 400
  }
});

const Projects = props => {

  const [project, setProject] = React.useState(false);

  const [open, setOpen] = React.useState(false);

  const { classes, projects } = props;

  const handleClickOpen = (e) => {

    setProject(projects[e.currentTarget.dataset.id]);
    setOpen(true);

  }

  const handleClickClose = () => {

    setProject({});
    setOpen(false);

  }

  return (
    <div className={classes.root}>
      <Grid justify="center" container spacing={0}>
        {
          projects.map((project, index) => {
            return(
              <Grid item key={index} md>
                <Card className={classes.card} data-id={index} onClick={handleClickOpen}>
                  <CardMedia
                    className={classes.media}
                    image={project.featuredImage}
                    title={project.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="caption">
                      {project.type}
                    </Typography>
                    <Typography variant="subtitle2" component="h2">
                      {project.name}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })
        }
      </Grid>
      <Dialog maxWidth="sm" open={open} onClose={handleClickClose} aria-labelledby="form-dialog-title">
        <DialogTitle>
          <IconButton aria-label="Close" className={classes.closeButton} onClick={handleClickClose} size="small">
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Typography align="center" gutterBottom variant="h5">{project.name}</Typography>
          <Typography align="center">
            <img className={classes.productImage} src={project.featuredImage} alt={project.name} />
          </Typography>
          <Typography paragraph><strong>Discipline:</strong> {project.type}</Typography>
          {
            project.subTypes && project.subTypes.length ? <Typography paragraph><strong>Additional skills:</strong> {project.subTypes.join(', ')}</Typography> : null
          }
          <Typography paragraph variant="h6">{project.brief}</Typography>
          <Typography paragraph>{project.description}</Typography>
        </DialogContent>
      </Dialog>
    </div>
  );
}

Projects.propTypes = propTypes;
Projects.defaultProps = defaultProps;

export default withStyles(styles)(Projects);
