import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import requests from '../../data/requests';

import s from './Layout.css';

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <div className={s.root}>
        {this.props.children}
      </div>
    );
  }
}

export default withStyles(s)(Layout);
