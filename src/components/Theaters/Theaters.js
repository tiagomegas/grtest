// NPM Dependencies ------------------------------------------------------------
import React from 'react';
import { connect }  from 'react-redux';
import moment    from 'moment';
import withStyles  from 'isomorphic-style-loader/lib/withStyles';
// Internal Dependencies ------------------------------------------------------------
import requests from '../../data/requests.js';
// React components -----------------------------------------------------------------
import UI    from '../ui';
import Input from '../ui/Input';
// Redux store -----------------------------------------------------------------
import { setField } from '../../actions/banner';
// ----- CSS Dependencies ------------------------------------------------------
import s from './Theaters.css';

class Theaters extends React.Component {

  constructor() {
    super();
    this.state = {
    };
  }
  performSearch = () => {

  }
  inputChange = () => {

  }
  renderDates = () => {
    let dates=[];
    let date;
    for(let i=0;i < 4; i++){
      date = moment().add(i);
      
      dates.push(<div>{date.day()}</div>)
    }
    console.log(dates);
    return dates;
  }
  render() {
    return(
      <div className="Trailer">
        <Input
          icon="fa fa-search"
          format="numeric"
          onFieldChange={this.inputChange}
          className="form-control"
          placeholder="Search City"
        />
        {this.renderDates()}
      </div>
    )
  }

}

const mapStateToProps = state => ({
  bannerReducer: state.bannerReducer
});

export default connect(mapStateToProps)(withStyles(s)(Theaters))
