import * as React from 'react';
import QrReader from 'react-qr-reader';
import { Dispatch, Action } from 'redux';
import { connect } from 'react-redux';
import { setActiveCode } from '../actions';

const styles: { [propName: string]: React.CSSProperties } = {
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#f5f5f5',
  },
  error: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

interface Props {
  handleScan: (code: string) => { type: string; code: string };
}

interface State {
  isError: boolean;
}

class Reader extends React.PureComponent<Props, State> {
  state: State = {
    isError: false,
  };
  handleError = () => {
    this.setState({ isError: true });
  };
  goBack = () => {
    history.back();
  };
  render() {
    const qrReader = (
      <QrReader
        delay={300}
        onError={this.handleError}
        onScan={this.props.handleScan}
        style={{ width: '100%', height: '100%' }}
      />
    );
    const errorMsg = (
      <div style={styles.error}>
        <div>
          <p>There is an error occured.</p>
          <div>
            <button>retry</button>
            <button onClick={this.goBack}>return</button>
          </div>
        </div>
      </div>
    );
    return (
      <div style={styles.container}>
        {this.state.isError ? errorMsg : qrReader}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch: Dispatch<Action>) {
  return {
    handleScan: (code: string) => {
      dispatch(setActiveCode(code));
      history.back();
    },
  };
}

export default connect(mapDispatchToProps)(Reader);
