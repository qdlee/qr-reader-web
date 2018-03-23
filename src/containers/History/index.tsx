import * as React from 'react';
import { connect } from 'react-redux';
import { ReduxState, Code } from '../../reducers';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import ArrowBack from 'material-ui-icons/ArrowBack';

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
              <IconButton color="inherit" aria-label="Menu" />
              <Typography variant="title" color="inherit">
                Title
              </Typography>
            </Toolbar>
          </AppBar>
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
