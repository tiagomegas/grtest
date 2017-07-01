
import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, FormattedMessage } from 'react-intl';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ErrorPage.css';

const messages = defineMessages({
  title: {
    id: 'errorPage.title',
    defaultMessage: 'Error!',
    description: 'Error page title',
  },
  description: {
    id: 'errorPage.description',
    defaultMessage: 'There was some problem. Please ty again later or contact support',
    description: 'Description in error page',
  },
});

class ErrorPage extends React.Component {
  static propTypes = {
    error: PropTypes.shape({
      name: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
      stack: PropTypes.string.isRequired,
    }).isRequired,
  };

  render() {
    if (__DEV__) {
      const { error } = this.props;
      return (
        <div>
          <h1>{error.name}</h1>
          <p>{error.message}</p>
          <pre>{error.stack}</pre>
        </div>
      );
    }

    return (
      <div>
        <h1>
          <FormattedMessage {...messages.title} />
        </h1>
        <p>
          <FormattedMessage {...messages.description} />
        </p>
      </div>
    );
  }
}

export { ErrorPage as ErrorPageWithoutStyle };
export default withStyles(s)(ErrorPage);
