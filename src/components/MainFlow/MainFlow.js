// ----- NPM Dependencies ------------------------------------------------------
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// ----- Components Dependencies -----------------------------------------------
import Trailer from '../Trailer';
import Theaters from '../Theaters';
import UI from '../ui';
import { setField } from '../../actions/banner';
// ----- Constants -------------------------------------------------------------
const components = {
  TRAILER: Trailer,
  THEATERS: Theaters,
};
const ListMenu = [
  'TRAILER',
  'THEATERS',
];


class MainFlow extends React.Component {

  static propTypes = {
    bannerReducer: PropTypes.object,
  };
  toggleView = () => {
    const idx = this.props.bannerReducer.viewIdx === 0 ? 1 : 0;
    console.log(idx);
    this.props.dispatch(setField('viewIdx', idx))
  }
  render() {
    const DynamicComp = components[ListMenu[this.props.bannerReducer.viewIdx]];
    return (
      <div>
        <h2>Spider-Man: Homecoming</h2>
        <DynamicComp />
        <div className="navButtons">
        <UI.Button
           label = {"Trailer"}
           size  = "btn-default"
           color = "btn-warning"
           disabled={this.props.bannerReducer.viewIdx===0}
           rounded = {false}
           classes = {'m-b-sm'}
           onClick = {this.toggleView}
         />
         <UI.Button
            label = {"Theaters"}
            size  = "btn-default"
            color = "btn-warning"
            disabled={this.props.bannerReducer.viewIdx===1}
            rounded = {false}
            classes = {'m-b-sm'}
            onClick = {this.toggleView}
          />
          </div>
      </div>);
  }
}

const mapStateToProps = state => ({
  bannerReducer: state.bannerReducer,
});

export default connect(mapStateToProps)(MainFlow);
