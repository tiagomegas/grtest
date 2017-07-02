import axios from 'axios';

var requests = {
  get: (path, params) => {
    return axios.get(
      path,
      {
        params: params,
        headers: { 'X-Api-Key': 'usrX3O8MQEo7ZgbcjNjboCbAp3HNrdvv' },
      })
  },
}

export default requests;
