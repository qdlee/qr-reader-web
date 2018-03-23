import * as React from 'react';
import QrReader from 'react-qr-reader';
import { Dispatch, Action } from 'redux';
import { connect } from 'react-redux';
import { setActiveCode } from '../../actions';

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
    height: 200,
  },
  btn: {
    padding: 0,
    height: 30,
    width: 80,
    backgroundColor: '#b3d465',
    color: '#fff',
    fontSize: '16px',
    border: 'solid 1px #7d9e2e',
    outline: 0,
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
          <div style={{ marginTop: 30 }}>
            <button
              style={styles.btn}
              onClick={() => this.setState({ isError: false })}
            >
              Retry
            </button>
            <span style={{ display: 'inline-block', width: 30 }} />
            <button style={styles.btn} onClick={this.goBack}>
              Return
            </button>
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

export default connect(null, mapDispatchToProps)(Reader);
