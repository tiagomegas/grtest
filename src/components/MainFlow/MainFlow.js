import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import Trailer from '../Trailer';
import Theaters from '../Theaters';
import UI from '../ui';
import { setField, saveRequest } from '../../actions/banner';
import requests from '../../data/requests.js';

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

  componentWillMount = () => {
    const timeFrom = moment().hours(0).minutes(0).seconds(0).format();
    const timeTo = moment().hours(23).minutes(59).seconds(59).format();
    const url = 'https://api.internationalshowtimes.com/v4/showtimes?location=51.5074,0.1278&countries=GB&movie_id=20388&cinema_fields=id,name,location.address&append=cinemas&time_from=' + timeFrom + '&time_to=' + timeTo;
    requests.get(url)
      .then((response) => {
        const responseCinemas = response.data.cinemas;
        const responseShowtimes = response.data.cinemas;
        const cinemas = {};

        for (let i = 0; i < responseCinemas.length; i++) {
          cinemas[responseCinemas[i].id] = { name: responseCinemas[i].id.name, city: responseCinemas[i].location.address.city }
        }

      this.props.dispatch(saveRequest({ cinemas, showtimes: responseShowtimes }));
      })
  }

  toggleView = () => {
    const idx = this.props.bannerReducer.viewIdx === 0 ? 1 : 0;
    this.props.dispatch(setField('viewIdx', idx))
  }

  render() {
    const DynamicComp = components[ListMenu[this.props.bannerReducer.viewIdx]];
    return (
      <div>
        <h2>Wonder Woman</h2>
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
