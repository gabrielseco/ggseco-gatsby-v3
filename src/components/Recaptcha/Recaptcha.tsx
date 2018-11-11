import * as React from 'react';

/* const propTypes = {
    className: PropTypes.string,
    onloadCallbackName: PropTypes.string,
    elementID: PropTypes.string,
    onloadCallback: PropTypes.func,
    verifyCallback: PropTypes.func,
    expiredCallback: PropTypes.func,
    render: PropTypes.string,
    sitekey: PropTypes.string,
    theme: PropTypes.string,
    type: PropTypes.string,
    verifyCallbackName: PropTypes.string,
    expiredCallbackName: PropTypes.string,
    size: PropTypes.string,
    tabindex: PropTypes.string,
    hl: PropTypes.string,
    badge: PropTypes.string,
}; */

/* const defaultProps = {
    elementID: 'g-recaptcha',
    onloadCallback: undefined,
    onloadCallbackName: 'onloadCallback',
    verifyCallback: undefined,
    verifyCallbackName: 'verifyCallback',
    expiredCallback: undefined,
    expiredCallbackName: 'expiredCallback',
    render: 'onload',
    theme: 'light',
    type: 'image',
    size: 'normal',
    tabindex: '0',
    hl: 'en',
    badge: 'bottomright',
    render: 'explicit'
}; */

const isReady = () => typeof window !== 'undefined' && typeof (window as any).grecaptcha !== 'undefined';

let readyCheck: any;

class ReCaptcha extends React.Component<any, any> {
    static defaultProps = {
      elementID: 'g-recaptcha',
    }
    constructor(props: any) {
        super(props);
        this.execute = this.execute.bind(this);
        this.state = {
            ready: isReady(),
            widget: null,
        };

        if (!this.state.ready) {
          readyCheck = setInterval(this._updateReadyState.bind(this), 1000);
        }
    }

    componentDidMount() {
        if (!!(this.state.ready)) {
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
          (window as any).grecaptcha.execute(sitekey, {action})
            .then(function(token: string) {
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
            <div id={this.props.elementID}
                 data-verifycallbackname={this.props.verifyCallbackName}
            />
        );
      } else {
        return (
            <div id={this.props.elementID}
                 className="g-recaptcha"
            />
        );
      }
    }
}

export default ReCaptcha;