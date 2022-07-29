import Axios from 'axios';

const API_HOST = {
  url: 'http://vdb.otwlulus.com/api',
};

export const getDiskonData = () => dispatch => {
  Axios.get(`${API_HOST.url}/discount?id=1`)
    .then(res => {
      dispatch({type: 'SET_DISKON', value: res.data.data});
    })
    .catch(err => {
      console.log('err :', err);
    });
};
