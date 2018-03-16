import * as React from 'react';

const styles: React.CSSProperties = {
  position: 'fixed',
  left: 0,
  top: 0,
  minHeight: 50,
  width: '100%',
  backgroundColor: '#fff',
  fontSize: 15,
  textAlign: 'center',
};

const ActiveCode: React.SFC<{}> = props => {
  return <div style={styles}>{props.children}</div>;
};

export default ActiveCode;
