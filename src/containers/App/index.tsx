import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch, Action } from 'redux';
import { ReduxState } from '../../reducers';
import { addCode } from '../../actions';
import ActiveCode from '../../components/ActiveCode';
import CodeList from '../../components/CodeList';

const styles: { [propName: string]: React.CSSProperties } = {
  history: {
    position: 'fixed',
    left: 0,
    top: 50,
    bottom: 50,
    width: '100%',
    overflow: 'hidden',
  },
  historyTitle: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    padding: '0 15px',
    height: 30,
    lineHeight: '30px',
    backgroundColor: '#ddd',
  },
  codeList: {
    position: 'absolute',
    left: 0,
    top: 30,
    bottom: 0,
    width: '100%',
    overflow: 'auto',
  },
  operation: {
    display: 'flex',
    position: 'fixed',
    left: 0,
    bottom: 0,
    width: '100%',
    height: 50,
  },
  btnWrapper: {
    flex: 1,
    height: '100%',
  },
  btn: {
    height: '100%',
    width: '100%',
  },
};

interface Props extends ReduxState {
  dispatch: Dispatch<Action>;
  onSave: (
    code: string
  ) => {
    type: string;
    code: string;
  };
}

class App extends React.Component<Props> {
  // componentDidMount() {
  //   const { dispatch } = this.props;
  //   console.log(this.props);

  //   const stateString = localStorage.getItem('redux-state');

  //   if (stateString) {
  //     const state: ReduxState = JSON.parse(stateString);
  //     dispatch(setActiveCode(state.activeCode));
  //     dispatch(setCodeList(state.codeList));
  //   }
  // }
  render() {
    const { activeCode, codeList, onSave } = this.props;
    return (
      <div>
        <ActiveCode>{activeCode}</ActiveCode>
        <div style={styles.history}>
          <div style={styles.historyTitle}>History</div>
          <div style={styles.codeList}>
            <CodeList codeList={codeList} />
          </div>
        </div>
        <div style={styles.operation}>
          <div style={styles.btnWrapper}>
            <button style={styles.btn} onClick={onSave.bind(this, activeCode)}>
              save
            </button>
          </div>
          <div style={styles.btnWrapper}>
            <button style={styles.btn}>copy</button>
          </div>
          <div style={styles.btnWrapper}>
            <button style={styles.btn}>open</button>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state: ReduxState) {
  return {
    activeCode: state.activeCode,
    codeList: state.codeList,
  };
}

function mapDispatchToProps(dispatch: Dispatch<Action>) {
  return {
    onSave: (code: string) => dispatch(addCode(code)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
