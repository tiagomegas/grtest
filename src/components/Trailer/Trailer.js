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
import { setField, resetFlow } from '../../actions/leasingFlow';
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
          <iframe src={"http://www.youtube.com/embed/U0D3AOldjMU"} frameBorder="0" allowFullScreen></iframe>
        </div>
      </div>
    )
  }

}

const mapStateToProps = state => ({
  leasingFlow: state.leasingFlowReducer
});

export default connect(mapStateToProps)(withStyles(s)(Trailer))
