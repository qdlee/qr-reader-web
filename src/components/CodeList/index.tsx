import * as React from 'react';
import { Code as CodeItem } from '../../reducers';
import Code from '../Code';
import Divider from '../Divider';

interface Props {
  codeList: CodeItem[];
}

const CodeList: React.SFC<Props> = props => (
  <div>
    {props.codeList.map(code => (
      <React.Fragment key={code.id}>
        <Code code={code} />
        <Divider />
      </React.Fragment>
    ))}
  </div>
);

export default CodeList;
