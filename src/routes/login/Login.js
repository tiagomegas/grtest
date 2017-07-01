// ----- Yarn Dependencies -----------------------------------------------------
import axios       from 'axios';
import React       from 'react';
import PropTypes   from 'prop-types';
import { defineMessages, FormattedMessage } from 'react-intl';
import withStyles  from 'isomorphic-style-loader/lib/withStyles';
import { withCookies, Cookies } from 'react-cookie';
// Components ------------------------------------------------------------------
import UI from '../../components/ui';
// ----- Redux Dependencies ----------------------------------------------------
import { connect }        from 'react-redux';
import { setUserSession } from '../../actions/user';
// ----- CSS Dependencies ------------------------------------------------------
import s from './Login.css';

import requests from '../../data/requests';
import history from '../../core/history';

const ContextType = {
  // Enables critical path CSS rendering
  // https://github.com/kriasoft/isomorphic-style-loader
  insertCss: PropTypes.func.isRequired,
  // Integrate Redux
  // http://redux.js.org/docs/basics/UsageWithReact.html
  store: PropTypes.shape({
    subscribe: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired,
    getState: PropTypes.func.isRequired,
  }).isRequired,
  // Apollo Client
  client: PropTypes.object.isRequired,
};

const messages = defineMessages({
  title: {
    id: 'login.title',
    defaultMessage: 'Log In',
    description: 'Title on the login page',
  },
  subtitle: {
    id: 'login.subtitle',
    defaultMessage: 'Log in with your company email address.',
    description: 'Sub title with the login page discription',
  },
  user: {
    id: 'login.user',
    defaultMessage: 'Email address:',
    description: 'Label indicating to input user email',
  },
  pword: {
    id: 'login.pword',
    defaultMessage: 'Password:',
    description: 'Label indicating to input user password',
  },
  loginBtn: {
    id: 'login.loginBtn',
    defaultMessage: 'Log in',
    description: 'Button label to execute the login',
  },
  show400: {
    id: 'login.show400',
    defaultMessage: 'Incorrect email and/or password.',
    description: 'Error message shown wen there is a login error',
  },
  showDefault: {
    id: 'login.showDefault',
    defaultMessage: 'Incorrect email and/or password.',
    description: 'Error message shown wen there is a login error',
  },
});

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user : "",
      pass : "",
      show400     : false,
      showDefault : false,
    };
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
    cookies: PropTypes.instanceOf(Cookies).isRequired
  };

  static contextTypes = ContextType;

  authenticate = (e) => {
    const headers = {
      'Accept'         : 'application/json',
      'Content-Type'   : 'application/x-www-form-urlencoded',
      'MerchantId'     : '959746303',
      'MerchantSecret' : '1245624032014',
    }

    let formData = new URLSearchParams();
    formData.append('email'    , this.state.user);
    formData.append('password' , this.state.pass);

    //requests.post('/login', formData, )

    axios.post('https://api.spektertechnology.com/login', formData, {headers})
      .then((response) => {
        this.props.cookies.set('session', response.data.session);
        this.context.store.dispatch(setUserSession(response.data));
        history.push('/')
      })
      .catch((error) => {
        if( 400===error.response.status ) {
          this.setState({show400: true})
        } else {
          this.setState({showDefault: true})
        }
      });
  }

  setUser = (ev) => {
    this.setState({user: ev.target.value})
  }

  setPass = (ev) => {
    this.setState({pass: ev.target.value})
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1><FormattedMessage {...messages.title} /></h1>
          <p className={s.lead}><FormattedMessage {...messages.subtitle} /></p>
          <div className={s.formGroup}>
            <label className={s.label} htmlFor="usernameOrEmail">
              <FormattedMessage {...messages.user} />
            </label>
            <input
              className={s.input}
              id="usernameOrEmail"
              type="text"
              name="usernameOrEmail"
              value={this.state.user}
              onChange={this.setUser}
              autoFocus
            />
          </div>
          <div className={s.formGroup}>
            <label className={s.label} htmlFor="password">
              <FormattedMessage {...messages.pword} />
            </label>
            <input
              className={s.input}
              id="password"
              type="password"
              name="password"
              value={this.state.pass}
              onChange={this.setPass}
            />
          </div>
          <div className={s.formGroup}>
            <button className={s.button} onClick={this.authenticate}>
              <FormattedMessage {...messages.loginBtn} />
            </button>
          </div>
          {this.state.show400 &&
            <UI.Alert
            color="alert-warning"
            persistant={false}
            onClose={()=>this.setState({show400: false})}
            title="Warning">
              <FormattedMessage {...messages.show400} />
          </UI.Alert>}
          {this.state.showDefault &&
            <UI.Alert
            color="alert-danger"
            persistant={false}
            onClose={()=>this.setState({showDefault: false})}
            title="Warning">
              <FormattedMessage {...messages.showDefault} />
          </UI.Alert>}
        </div>
      </div>
    );
  }
}

const mapState = state => ({
  user: state.user,
});

export default connect(mapState)(withCookies(withStyles(s)(Login)));
