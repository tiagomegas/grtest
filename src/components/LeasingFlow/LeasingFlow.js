// ----- NPM Dependencies ------------------------------------------------------
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// ----- Components Dependencies -----------------------------------------------
import Trailer from '../Trailer';
import Theaters from '../Theaters';
import UI from '../ui';
// ----- Constants -------------------------------------------------------------
const components = {
  TRAILER: Trailer,
  THEATERS: Theaters,
};
const ListMenu = [
  'TRAILER',
  'THEATERS',
];


class LeasingFlow extends React.Component {

  static propTypes = {
    leasingFlow: PropTypes.object,
  };

  render() {
    const DynamicComp = components[ListMenu[this.props.leasingFlow.pagination.paginationIdx]];
    return (
      <div>
        <h2>Spider-Man: Homecoming</h2>
        <DynamicComp />
        <UI.Button
           label = {"Trailer"}
           size  = "btn-default"
           color = "btn-warning"
           tooltip = {"Trailer"}
           rounded = {false}
           classes = {'m-b-sm'}
         />
         <UI.Button
            label = {"Theaters"}
            size  = "btn-default"
            color = "btn-warning"
            tooltip = {"Theaters"}
            rounded = {false}
            classes = {'m-b-sm'}
          />
      </div>);
  }
}

const mapStateToProps = state => ({
  leasingFlow: state.bannerReducer,
});

export default connect(mapStateToProps)(LeasingFlow);
