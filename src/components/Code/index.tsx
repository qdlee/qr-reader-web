import * as React from 'react';
import { Code as CodeItem } from '../../reducers';

const styles = {
  height: 40,
  lineHeight: '40px',
  padding: '0 15px',
};

interface Props {
  code: CodeItem;
}
const Code: React.SFC<Props> = props => (
  <div style={styles}>{props.code.value}</div>
);

export default Code;
