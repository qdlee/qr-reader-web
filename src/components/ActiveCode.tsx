import * as React from 'react';

const styles = {
  backgroundColor: '#fff',
  fontSize: 15,
  textAlign:'center',
}

export default function ActiveCode(props: React.Props<any>) {
  return <div style={styles}>{props.children}</div>
}