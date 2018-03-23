import * as React from 'react';
import { Code as CodeItem } from '../../reducers';

const styles: React.CSSProperties = {
  position: 'relative',
  height: 40,
  lineHeight: '40px',
  padding: '0 15px',
};

const btnWidth: number = 80;
const translateWidth: number = 30;

interface Props {
  code: CodeItem;
  onCodeTouch: (id: number) => void;
  touchCode: number;
  onCodeDelete: (id: number) => void;
}

class Code extends React.PureComponent<Props> {
  startPoint: Touch;
  state = {
    left: 0,
  };

  touchStart = (e: React.TouchEvent<any>) => {
    this.startPoint = e.touches[0];
    this.props.onCodeTouch(this.props.code.id);
  };

  touchMove = (e: React.TouchEvent<any>) => {
    const touch: Touch = e.touches[0];
    const movePixel = touch.clientX - this.startPoint.clientX;
    let left = 0;
    if (movePixel < 0) {
      left = Math.max(movePixel, -btnWidth);
    } else {
      left = Math.min(btnWidth, movePixel);
      left = Math.min(0, left - btnWidth);
    }
    this.setState({ left });
  };

  touchEnd = (e: React.TouchEvent<any>) => {
    e.persist();
    const touch: Touch = e.changedTouches[0];
    const movePixel = touch.clientX - this.startPoint.clientX;
    if (movePixel < translateWidth * -1) {
      this.setState({ left: btnWidth * -1 });
    } else if (movePixel < 0) {
      this.setState({ left: 0 });
    } else if (movePixel > translateWidth) {
      this.setState({ left: 0 });
    } else if (movePixel > 0) {
      this.setState({ left: btnWidth * -1 });
    }
  };

  touchCancel = (e: React.TouchEvent<any>) => {
    this.setState({ left: 0 });
  };

  componentWillReceiveProps(nextProps: Props) {
    if (nextProps.touchCode !== this.props.touchCode) {
      const left =
        this.props.touchCode === this.props.code.id ? this.state.left : 0;
      this.setState({ left: left });
    }
  }

  render() {
    const left =
      this.props.touchCode === this.props.code.id ? this.state.left : 0;
    return (
      <div
        style={styles}
        onTouchStart={this.touchStart}
        onTouchMove={this.touchMove}
        onTouchEnd={this.touchEnd}
        onTouchCancel={this.touchCancel}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 2,
            width: '100%',
            height: '100%',
            backgroundColor: '#fff',
            transform: `translateX(${left}px)`,
            transition: 'transform .2s linear',
          }}
        >
          <div style={{ marginLeft: 15 }}>{this.props.code.value}</div>
        </div>
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            zIndex: 1,
            width: btnWidth,
            height: '100%',
            backgroundColor: '#FF3333',
            color: '#fff',
            textAlign: 'center',
          }}
          onClick={() => {
            this.props.onCodeDelete(this.props.code.id);
          }}
        >
          Delete
        </div>
      </div>
    );
  }
}

export default Code;
