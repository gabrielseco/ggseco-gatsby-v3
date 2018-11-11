import * as React from 'react';

const isReady = () =>
  typeof window !== 'undefined' &&
  typeof (window as any).grecaptcha !== 'undefined';

let readyCheck: any;

interface IProps {
    action: string;
    elementID: string;
    sitekey: string;
    verifyCallback: Function;
    verifyCallbackName: string;
} 

interface IState {
    ready: boolean;
}

class ReCaptcha extends React.Component<IProps, IState> {
  static defaultProps = {
    elementID: 'g-recaptcha',
    verifyCallbackName: 'verifyCallback',
  };
  constructor(props: any) {
    super(props);
    this.execute = this.execute.bind(this);
    this.state = {
      ready: isReady(),
    };

    if (!this.state.ready) {
      readyCheck = setInterval(this._updateReadyState.bind(this), 1000);
    }
  }

  componentDidMount() {
    if (!!this.state.ready) {
      this.execute();
    }
  }

  componentDidUpdate(_: any, prevState: any) {
    if (this.state.ready && !prevState.ready) {
      this.execute();
    }
  }

  componentWillUnmount() {
    clearInterval(readyCheck);
  }

  execute() {
    const { ready } = this.state;
    const { sitekey, verifyCallback, action } = this.props;

    if (ready) {
      (window as any).grecaptcha
        .execute(sitekey, { action })
        .then((token: string) => {
          verifyCallback(token);
        });
    }
  }

  _updateReadyState() {
    if (isReady()) {
      this.setState({ ready: true });
      clearInterval(readyCheck);
    }
  }

  render() {
    if (this.state.ready) {
      return (
        <div
          id={this.props.elementID}
          data-verifycallbackname={this.props.verifyCallbackName}
        />
      );
    } else {
      return <div id={this.props.elementID} className="g-recaptcha" />;
    }
  }
}

export default ReCaptcha;