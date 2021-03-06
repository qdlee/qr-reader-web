import * as React from 'react';

const styles: React.CSSProperties = {
  position: 'fixed',
  left: 0,
  top: 0,
  height: 50,
  width: '100%',
  backgroundColor: '#fff',
  fontSize: 15,
  textAlign: 'center',
};

const ActiveCode: React.SFC<{
  inputRef?: (el: any) => any;
  code: string;
}> = props => {
  return (
    <div style={styles}>
      <textarea
        style={{
          width: '100%',
          height: '100%',
          padding: 5,
          border: 0,
          outline: 0,
          resize: 'none',
          fontSize: 15,
          textAlign: 'center',
        }}
        readOnly={true}
        ref={props.inputRef}
        value={props.code}
      />
    </div>
  );
};

export default ActiveCode;
