import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import _ from 'lodash';
import withStyles  from 'isomorphic-style-loader/lib/withStyles';
import requests from '../../data/requests.js';
import UI from '../ui';
import Input from '../ui/Input';
import { setField, saveRequest } from '../../actions/banner';
import SessionInfo from './SessionInfo'

import s from './Theaters.css';

class Theaters extends React.Component {

  constructor() {
    super();
    this.state = {
      timeFrom: moment().hours(0).minutes(0).seconds(0).format(),
      timeTo: moment().hours(23).minutes(59).seconds(59).format(),
      city:'',
      sessions: {}
    };
  }

  componentWillMount = () => {
    this.performSearch();
    this.timer = null;
  }

  requestSessions = () => {
    const url = 'https://api.internationalshowtimes.com/v4/showtimes?location=51.5074,0.1278&countries=GB&movie_id=20388&cinema_fields=id,name,location.address&append=cinemas&time_from=' + this.state.timeFrom + '&time_to=' + this.state.timeTo;
    requests.get(url)
      .then((response) => {
        //this.props.dispatch(saveRequest(response.data))
        this.parseRequestResponse(response.data.cinemas, response.data.showtimes);
      })
  }
  parseRequestResponse = (cinemas, showtimes) => {
    let sessionsByCinema = [];
    const cinemasByCity = _.filter(cinemas, (cinema) => {
      return this.state.city === cinema.location.address.city;
    });

    // filter sessions by cinema
    for (let i = 0; i < cinemasByCity.length; i++) {
      let filterSessions = _.filter(showtimes, (showtime) => {
        return showtime.cinema_id === cinemasByCity[i].id;
      });
      //filterSessions.name = cinemasByCity[i].name;
      sessionsByCinema.push(
        { id: cinemasByCity[i].id,
          sessions: filterSessions,
          name: cinemasByCity[i].name });
    }
    this.props.dispatch(setField('cinemas', sessionsByCinema));
    //this.props.dispatch(saveRequest({ cinemas: }))
  }

  performSearch = () => {
    this.requestSessions(this.parseRequestResponse);
    // filter cinemas by city
    /*let sessionsByCinema = {};
    const cinemasByCity = _.filter(this.props.bannerReducer.cinemas, (cinema) => {
      return this.state.city === cinema.location.address.city;
    });
    console.log(cinemasByCity);
    // filter sessions by cinema
    for (let i = 0; i < cinemasByCity.length; i++) {
      sessionsByCinema[cinemasByCity[i].id] = _.filter(this.props.bannerReducer.showtimes, (showtime) => {
        return showtime.cinema_id === cinemasByCity[i].id;
      });
    }
    this.props.dispatch(setField('sessions', sessionsByCinema));*/
  }

  inputChange = (ev) => {
    const inputString = ev.target.value;
    this.setState({
      city: inputString
    })
    if (inputString.length > 3) {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.performSearch();
      }, 500);
    }
  }

  selectDate = (timeFrom) => {
    const timeTo = timeFrom.clone().hours(23).minutes(59).seconds(0);
    this.setState({
      timeFrom: timeFrom.hours(0).minutes(0).seconds(0).format(),
      timeTo: timeTo.format()
    })
    this.performSearch()
  }

  renderDates = () => {
    const dates = [];

    for (let i = 0; i < 4; i++) {
      const date = moment().add(i, 'days');
      dates.push(<div onClick={this.selectDate.bind(this, date)}>
                  <div>{date.format('dddd')}</div>
                  <div>{date.format('D')}</div>
                  <div>{date.format('MMM')}</div>
                </div>)
    }

    return dates;
  }

  render() {
    const store = this.props.bannerReducer;
    return (
      <div className="Trailer">
        <Input
          icon="fa fa-search"
          format="text"
          onFieldChange={this.inputChange}
          className="form-control"
          placeholder="Search City"
        />
        {this.renderDates()}
        <SessionInfo
          cinema={store.cinemas[store.selectedCinema]}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  bannerReducer: state.bannerReducer
});

export default connect(mapStateToProps)(withStyles(s)(Theaters))
