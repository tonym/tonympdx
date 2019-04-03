import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import Flex from '../../components/Flex';
import FlexChild from '../../components/FlexChild';

const styles = theme => ({
  link: {
    color: 'inherit',
    textDecoration: 'none',
    width: '100%'
  },
  list: {
    width: '100%'
  },
});



class Social extends Component {

  render() {

  const { classes } = this.props;

    return (
      <Flex flexDirection="column-reverse">
        <FlexChild>
          <div className={classes.list}>
            <Typography color="inherit" variant="h5">Github</Typography>
            <Typography color="inherit" variant="subtitle">Code samples and profile</Typography>
            <List className={classes.list} component="div">
              <ListItem button className={classes.listItem} divider>
                <a href="https://github.com/tonym/tonympdx" rel="noopener noreferrer" target="_blank" className={classes.link}>
                  <ListItemText>
                    Code for this website
                  </ListItemText>
                </a>
              </ListItem>
              <ListItem button className={classes.listItem} divider>
                <a href="https://github.com/tonym" rel="noopener noreferrer" target="_blank" className={classes.link}>
                  <ListItemText>
                    Profile
                  </ListItemText>
                </a>
              </ListItem>
              <ListItem button className={classes.listItem}>
                <a href="https://github.com/InspecDigital" rel="noopener noreferrer" target="_blank" className={classes.link}>
                  <ListItemText>
                    Organization
                  </ListItemText>
                </a>
              </ListItem>
            </List>
            <Typography color="inherit" variant="h5">Instagram</Typography>
            <Typography color="inherit" variant="subtitle">Many pretty pictures</Typography>
            <List className={classes.list} component="div">
              <ListItem button className={classes.listItem} divider>
                <a href="https://www.instagram.com/tony.m.pdx/" rel="noopener noreferrer" target="_blank" className={classes.link}>
                  <ListItemText>
                    @tony.m.pdx
                  </ListItemText>
                </a>
              </ListItem>
              <ListItem button className={classes.listItem}>
                <a href="https://www.instagram.com/theportlandpour/" rel="noopener noreferrer" target="_blank" className={classes.link}>
                  <ListItemText>
                    @theportlandpour
                  </ListItemText>
                </a>
              </ListItem>
            </List>
            <Typography color="inherit" variant="h5">Linkedin</Typography>
            <Typography color="inherit" variant="subtitle">Resume and references</Typography>
            <List className={classes.list} component="div">
              <ListItem button className={classes.listItem} divider>
                <a href="https://www.linkedin.com/in/tonympdx/" rel="noopener noreferrer" target="_blank" className={classes.link}>
                  <ListItemText>
                    www.linkedin.com/in/tonympdx
                  </ListItemText>
                </a>
              </ListItem>
            </List>
            <Typography color="inherit" variant="h5">Twitter</Typography>
            <Typography color="inherit" variant="subtitle">Random noise</Typography>
            <List className={classes.list} component="div">
              <ListItem button className={classes.listItem} divider>
                <a href="https://twitter.com/PortlandPour" rel="noopener noreferrer" target="_blank" className={classes.link}>
                  <ListItemText>
                    @PortlandPour
                  </ListItemText>
                </a>
              </ListItem>
            </List>
          </div>
        </FlexChild>
        <FlexChild background="secondary">
          <div>
            <Typography color="inherit" variant="h4">Connect</Typography>
            <Typography color="inherit" variant="h5">
              Where to find me online
            </Typography>
          </div>
        </FlexChild>
      </Flex>
    );

  }

}

export default withStyles(styles)(Social);
