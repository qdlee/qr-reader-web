import * as React from 'react';
import * as ReactDOM from 'react-dom';
import MessageBox from './MessageBox';

let loading: any;

interface Params {
  content: string;
  handleCancel?: boolean;
}

function alert(params: Params) {
  return show('alert', params);
}

function confirm(params: Params) {
  return show('confirm', params);
}

function showToast(params: Params) {
  return show('toast', params);
}

function showLoading(params: Params) {
  const div = document.createElement('div');
  document.body.appendChild(div);
  document.body.style.setProperty('overflow', 'hidden');

  const ele = React.createElement(MessageBox, {
    type: 'loading',
    content: params.content,
  });
  loading = div;
  ReactDOM.render(ele, div);
}

function hideLoading() {
  if (!loading) {
    return;
  }
  ReactDOM.unmountComponentAtNode(loading);
  document.body.removeChild(loading);
  document.body.style.setProperty('overflow', 'auto');
  loading = null;
}

function show(type: string, params: Params): Promise<any> {
  return new Promise((resolve, reject) => {
    const div = document.createElement('div');
    document.body.appendChild(div);
    document.body.style.setProperty('overflow', 'hidden');
    const ele = React.createElement(MessageBox, {
      promise: { resolve, reject },
      type,
      content: params.content,
      handleCancel: params.handleCancel,
      close: () => {
        ReactDOM.unmountComponentAtNode(div);
        document.body.removeChild(div);
        document.body.style.setProperty('overflow', 'auto');
      },
    });
    ReactDOM.render(ele, div);
  });
}

export default {
  alert,
  confirm,
  showToast,
  showLoading,
  hideLoading,
};
