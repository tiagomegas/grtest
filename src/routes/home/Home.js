
// NPM Dependencies ------------------------------------------------------------
import React from 'react';
import PropTypes from 'prop-types';
import { FormattedRelative } from 'react-intl';
import { withCookies } from 'react-cookie';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { connect } from 'react-redux';
import { resetFlow } from '../../actions/leasingFlow';
// Css store -------------------------------------------------------------------
import s from './Home.css';
import LeasingFlow from '../../components/LeasingFlow/LeasingFlow';


class Home extends React.Component {
  paginationTotalItems = 7;

  resetFlow = () => this.props.dispatch(resetFlow())

  render() {
    let flowResetable = true;
    if (this.props.bannerReducer.pagination.paginationIdx===0) {
      flowResetable = false;
    }
    console.log(flowResetable)
    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className="leasingLayout-flow">
            <LeasingFlow />
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
