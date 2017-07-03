import React from 'react';
import { connect }  from 'react-redux';
import moment from 'moment';
import withStyles  from 'isomorphic-style-loader/lib/withStyles';
import UI from '../../ui';
import styles from './SessionInfo.css'

class SessionInfo extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }
  static defaultProps = {
    cinema: { name: '', sessions: [] },
  };

  renderSessions = () => {
    let sessions = [];
    for (let i = 0; i < this.props.cinema.sessions; i ++) {
      sessions
    }
  }

  render() {
    return (
      <div className={styles.SessionInfo}>
        <div className={styles.name}>
          {this.props.cinema.name}
        </div>
        <div className={styles.sessionsList}>
          {this.props.cinema.sessions.map((session) => {
            return <div>{moment(session.start_at).format('k:mm')}</div>
          })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  bannerReducer: state.bannerReducer
});

export default connect(mapStateToProps)(withStyles(styles)(SessionInfo))
