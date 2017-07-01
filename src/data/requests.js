import axios from 'axios';

 let baseURL = 'https://api.spektertechnology.com'
/* -> helder */
//let baseURL = 'http://192.168.1.78:8080';
/* Ricardi */
//let baseURL = 'http://192.168.2.226:8080';

const headers = {
  'Accept'         : 'application/json',
  'Content-Type'   : 'application/json',
  'X-Api-Key'      : 'usrX3O8MQEo7ZgbcjNjboCbAp3HNrdvv',
};

var requests = {
/*     const url = 'https://api.internationalshowtimes.com/v4/showtimes?location=51.5074,0.1278&countries=GB&movie_id=20487&cinema_fields=id,name,location.address&append=cinemas&time_from=2017-06-20T00:00:00+00:00'
    headers.append('X-Api-Key', 'usrX3O8MQEo7ZgbcjNjboCbAp3HNrdvv');

    const resp = await fetch(url, { headers, method: 'GET' });
    const data = (resp.status === 200) ? await resp.json() : [];
    console.log(data);*/
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
