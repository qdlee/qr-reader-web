import * as React from 'react';
import { connect } from 'react-redux';
import { ReduxState, Code } from '../../reducers';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import ArrowBack from 'material-ui-icons/ArrowBack';
import List, {
  ListItem,
  ListItemAvatar,
  // ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
} from 'material-ui/List';
import FolderIcon from 'material-ui-icons/Folder';
import DeleteIcon from 'material-ui-icons/Delete';
import Avatar from 'material-ui/Avatar';

function generate(element: any) {
  return [0, 1, 2].map(value =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

interface Props {
  codeList: Code[];
}

class History extends React.Component<Props> {
  render() {
    return (
      <div>
        <div>
          <AppBar position="static">
            <Toolbar>
              <IconButton color="inherit" aria-label="Menu">
                <ArrowBack />
              </IconButton>
              <Typography variant="title" color="inherit">
                History
              </Typography>
            </Toolbar>
          </AppBar>
          <div>
            <List dense={false}>
              {generate(
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Single-line item"
                    secondary={false ? 'Secondary text' : null}
                  />
                  <ListItemSecondaryAction>
                    <IconButton aria-label="Delete">
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              )}
            </List>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state: ReduxState) {
  return {
    codeList: state.codeList,
  };
}

export default connect(mapStateToProps)(History);
