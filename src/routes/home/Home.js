
// NPM Dependencies ------------------------------------------------------------
import React from 'react';
import PropTypes from 'prop-types';
import { FormattedRelative } from 'react-intl';
import { withCookies } from 'react-cookie';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { connect } from 'react-redux';
// Css store -------------------------------------------------------------------
import s from './Home.css';
import MainFlow from '../../components/MainFlow/MainFlow';


class Home extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <div>
            <MainFlow />
          </div>
        </div>
      </div>
    );
  }

}

const mapStateToProps = state => ({
  bannerReducer: state.bannerReducer,
});

export default connect(mapStateToProps)(withCookies(Home));
