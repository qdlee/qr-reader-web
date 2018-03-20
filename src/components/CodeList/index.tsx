import * as React from 'react';
import { Code as CodeItem } from '../../reducers';
import Code from '../Code';
import Divider from '../Divider';

interface Props {
  codeList: CodeItem[];
  onCodeDelete: (id: number) => void;
}

class CodeList extends React.PureComponent<Props> {
  state = {
    touchCode: 0,
  };

  codeTouch = (id: number) => {
    this.setState({ touchCode: id });
  };

  render() {
    return (
      <div>
        {this.props.codeList.map(code => (
          <React.Fragment key={code.id}>
            <Code
              code={code}
              onCodeTouch={this.codeTouch}
              touchCode={this.state.touchCode}
              onCodeDelete={this.props.onCodeDelete}
            />
            <Divider />
          </React.Fragment>
        ))}
      </div>
    );
  }
}

export default CodeList;
