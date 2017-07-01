import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import requests from '../../data/requests';
import s from './Layout.css';

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };
  componentWillMount = () => {
    const url = 'https://api.internationalshowtimes.com/v4/showtimes?location=51.5074,0.1278&countries=GB&movie_id=20345&cinema_fields=id,name,location.address&append=cinemas&time_from=2017-07-1T00:00:00+00:00'
    requests.get(url).then((response) => {
      console.log(response);
    })
  }
  render() {
    return (
      <div className={s.root}>
        {this.props.children}
      </div>
    );
  }
}

export default withStyles(s)(Layout);
