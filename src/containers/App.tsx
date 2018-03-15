import * as React from 'react';
import {connect} from 'react-redux';
import { ReduxState } from '../reducers';
import ActiveCode from '../components/ActiveCode';

interface Props extends ReduxState {
  
}

class App extends React.Component<Props> {
  componentDidMount() {
    
  }
  render() {
    return <div><ActiveCode >{this.props.activeCode}</ActiveCode></div>
  }
}

function mapStateToProps(state: ReduxState) {
  return {
    activeCode: state.activeCode
  }
}

connect(mapStateToProps)(App);

export default App;