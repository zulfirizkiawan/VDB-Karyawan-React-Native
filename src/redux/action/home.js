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

export const getDokterData = () => dispatch => {
  Axios.get(`${API_HOST.url}/doctor`)
    .then(res => {
      // console.log('res dokter :', res.data.data);
      dispatch({type: 'SET_DOKTER', value: res.data.data});
    })
    .catch(err => {
      console.log('err :', err);
    });
};

export const getAllGrooming = () => dispatch => {
  Axios.all([
    Axios.get(`${API_HOST.url}/allGrooming?status=PENDING`),
    Axios.get(`${API_HOST.url}/allGrooming?status=PENJEMPUTAN`),
    Axios.get(`${API_HOST.url}/allGrooming?status=DI PROSES`),
    Axios.get(`${API_HOST.url}/allGrooming?status=DI ANTAR`),
  ])
    .then(
      Axios.spread((res1, res2, res3, res4) => {
        const pending = res1.data.data.data;
        const penjemputan = res2.data.data.data;
        const diProses = res3.data.data.data;
        const diAntar = res4.data.data.data;
        dispatch({
          type: 'SET_TOTAL_GROOMING',
          value: [...pending, ...penjemputan, ...diProses, ...diAntar],
        });
      }),
    )
    .catch(err => {
      showMessage('Terjadi Kesalahan di In Progress API');
    });
};

export const getAllPenitipan = () => dispatch => {
  Axios.all([
    Axios.get(`${API_HOST.url}/allPenitipan?status=PENDING`),
    Axios.get(`${API_HOST.url}/allPenitipan?status=PENJEMPUTAN`),
    Axios.get(`${API_HOST.url}/allPenitipan?status=DI PROSES`),
    Axios.get(`${API_HOST.url}/allPenitipan?status=DI ANTAR`),
  ])
    .then(
      Axios.spread((res1, res2, res3, res4) => {
        const pending = res1.data.data.data;
        const penjemputan = res2.data.data.data;
        const diProses = res3.data.data.data;
        const diAntar = res4.data.data.data;
        dispatch({
          type: 'SET_TOTAL_PENITIPAN',
          value: [...pending, ...penjemputan, ...diProses, ...diAntar],
        });
      }),
    )
    .catch(err => {
      showMessage('Terjadi Kesalahan di In Progress API');
    });
};

export const getAllPraktik = () => dispatch => {
  Axios.all([
    Axios.get(`${API_HOST.url}/allPraktik?status=PENDING`),
    Axios.get(`${API_HOST.url}/allPraktik?status=PENJEMPUTAN`),
    Axios.get(`${API_HOST.url}/allPraktik?status=DI PROSES`),
    Axios.get(`${API_HOST.url}/allPraktik?status=DI ANTAR`),
  ])
    .then(
      Axios.spread((res1, res2, res3, res4) => {
        const pending = res1.data.data.data;
        const penjemputan = res2.data.data.data;
        const diProses = res3.data.data.data;
        const diAntar = res4.data.data.data;
        dispatch({
          type: 'SET_TOTAL_PRAKTIK',
          value: [...pending, ...penjemputan, ...diProses, ...diAntar],
        });
      }),
    )
    .catch(err => {
      showMessage('Terjadi Kesalahan di In Progress API');
    });
};
