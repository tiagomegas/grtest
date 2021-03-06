// NPM Dependencies ------------------------------------------------------------
import React from 'react';
import { connect }  from 'react-redux';
import moment    from 'moment';
import withStyles  from 'isomorphic-style-loader/lib/withStyles';
// Internal Dependencies ------------------------------------------------------------
import requests from '../../data/requests.js';
// React components -----------------------------------------------------------------
import UI    from '../ui';
// Redux store -----------------------------------------------------------------
import { setField, resetFlow } from '../../actions/banner';
// ----- CSS Dependencies ------------------------------------------------------
import s from './Trailer.css';

class Trailer extends React.Component {

  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return(
      <div className="Trailer">
        <div className="videoWrapper">
          <iframe src={"http://www.youtube.com/embed/VSB4wGIdDwo"} frameBorder="0" allowFullScreen></iframe>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  bannerReducer: state.bannerReducer
});

export default connect(mapStateToProps)(withStyles(s)(Trailer))
