import * as React from 'react';
import './style.css';

interface Props {
  content: string;
  type: string;
  title?: string;
  cancelButtonTxt?: string;
  confirmButtonTxt?: string;
  [propName: string]: any;
}

interface State {
  visible: boolean;
}

const defaults: Props = {
  type: 'alert',
  content: '',
  title: '提示',
  cancelButtonTxt: '取消',
  confirmButtonTxt: '确定',
};

export default class MessageBox extends React.Component<Props, State> {
  state = {
    visible: true,
  };

  constructor(props: Props) {
    super(props);
    this.handleAction = this.handleAction.bind(this);
  }

  componentDidMount() {
    const { type, promise, close } = this.props;
    if (type === 'toast') {
      setTimeout(() => {
        promise.resolve();
        close();
      }, 2000);
    }
  }

  handleAction(action: string) {
    const { promise, close, handleCancel } = this.props;
    if (action === 'confirm') {
      close();
      promise.resolve();
    } else {
      close();
      if (handleCancel) {
        promise.reject();
      }
    }
  }

  render() {
    const { type, title, content, confirmButtonTxt, cancelButtonTxt }: Props = {
      ...defaults,
      ...this.props,
    };
    const buttons: JSX.Element =
      type === 'alert' ? (
        <button
          className="btn single"
          onClick={() => {
            this.handleAction('confirm');
          }}
        >
          {confirmButtonTxt}
        </button>
      ) : (
        <span>
          <button
            className="btn left border-right"
            onClick={() => {
              this.handleAction('cancel');
            }}
          >
            {cancelButtonTxt}
          </button>
          <button
            className="btn double"
            onClick={() => {
              this.handleAction('confirm');
            }}
          >
            {confirmButtonTxt}
          </button>
        </span>
      );
    const msgBox: JSX.Element = (
      <div className="wrap">
        <div className="msg">
          <div>
            <h3 className="title">{title}</h3>
          </div>
          <div>
            <p className="content">{content}</p>
          </div>
          <div className="buttons border-top">{buttons}</div>
        </div>
      </div>
    );

    const toast: JSX.Element = (
      <div className="toast">
        <p className="toast-content">{content}</p>
      </div>
    );
    const loading: JSX.Element = (
      <div className="mask">
        <div className="in-center">
          <div className="waiting" />
          <p className="loading-txt">{content}</p>
        </div>
      </div>
    );
    if (type === 'alert' || type === 'confirm') {
      return msgBox;
    } else if (type === 'loading') {
      return loading;
    } else {
      return toast;
    }
  }
}
