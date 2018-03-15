declare module 'react-qr-reader' {
  export interface Props {
    onScan: Function;
    onError: Function;
    onLoad?: Function;
    onImageLoad?: Function;
    delay?: number | boolean;
    facingMode?: string;
    legacyMode?: boolean;
    resolution?: number;
    showViewFinder?: boolean;
    style?: any;
    className?: string;
  }
  export default class ListView extends React.Component<Props, any> {
    render(): JSX.Element;
    openImageDialog(): any;
  }
}
