import Axios from 'axios';
import {getData, showMessage} from '../../utils';

const API_HOST = {
  url: 'http://vdb.otwlulus.com/api',
};

export const getGrooming = () => dispatch => {
  getData('token').then(resToken => {
    Axios.all([
      Axios.get(`${API_HOST.url}/grooming?status=PENDING`, {
        headers: {
          Authorization: resToken.value,
        },
      }),
      Axios.get(`${API_HOST.url}/grooming?status=PENJEMPUTAN`, {
        headers: {
          Authorization: resToken.value,
        },
      }),
      Axios.get(`${API_HOST.url}/grooming?status=DI PROSES`, {
        headers: {
          Authorization: resToken.value,
        },
      }),
      Axios.get(`${API_HOST.url}/grooming?status=DI ANTAR`, {
        headers: {
          Authorization: resToken.value,
        },
      }),
    ])
      .then(
        Axios.spread((res1, res2, res3, res4) => {
          const pending = res1.data.data.data;
          const penjemputan = res2.data.data.data;
          const diProses = res3.data.data.data;
          const diAntar = res4.data.data.data;
          dispatch({
            type: 'SET_PESANAN_GROOMING',
            value: [...pending, ...penjemputan, ...diProses, ...diAntar],
          });
        }),
      )
      .catch(err => {
        showMessage('Terjadi Kesalahan di In Progress API');
      });
  });
};

export const getPenitipan = () => dispatch => {
  getData('token').then(resToken => {
    Axios.all([
      Axios.get(`${API_HOST.url}/penitipan?status=PENDING`, {
        headers: {
          Authorization: resToken.value,
        },
      }),
      Axios.get(`${API_HOST.url}/penitipan?status=PENJEMPUTAN`, {
        headers: {
          Authorization: resToken.value,
        },
      }),
      Axios.get(`${API_HOST.url}/penitipan?status=DI PROSES`, {
        headers: {
          Authorization: resToken.value,
        },
      }),
      Axios.get(`${API_HOST.url}/penitipan?status=DI ANTAR`, {
        headers: {
          Authorization: resToken.value,
        },
      }),
    ])
      .then(
        Axios.spread((res1, res2, res3, res4) => {
          const pending = res1.data.data.data;
          const penjemputan = res2.data.data.data;
          const diProses = res3.data.data.data;
          const diAntar = res4.data.data.data;

          dispatch({
            type: 'SET_PESANAN_PENITIPAN',
            value: [...pending, ...penjemputan, ...diProses, ...diAntar],
          });
        }),
      )
      .catch(err => {
        showMessage('Terjadi Kesalahan di In Progress API');
      });
  });
};

export const getPraktik = () => dispatch => {
  getData('token').then(resToken => {
    Axios.all([
      Axios.get(`${API_HOST.url}/praktik?status=PENDING`, {
        headers: {
          Authorization: resToken.value,
        },
      }),
      Axios.get(`${API_HOST.url}/praktik?status=PENJEMPUTAN`, {
        headers: {
          Authorization: resToken.value,
        },
      }),
      Axios.get(`${API_HOST.url}/praktik?status=DI PROSES`, {
        headers: {
          Authorization: resToken.value,
        },
      }),
      Axios.get(`${API_HOST.url}/praktik?status=DI ANTAR`, {
        headers: {
          Authorization: resToken.value,
        },
      }),
    ])
      .then(
        Axios.spread((res1, res2, res3, res4) => {
          const pending = res1.data.data.data;
          const penjemputan = res2.data.data.data;
          const diProses = res3.data.data.data;
          const diAntar = res4.data.data.data;

          dispatch({
            type: 'SET_PESANAN_PRAKTIK',
            value: [...pending, ...penjemputan, ...diProses, ...diAntar],
          });
        }),
      )
      .catch(err => {
        showMessage('Terjadi Kesalahan di In Progress API');
      });
  });
};

//----- riwayat grooming ----//
export const getSelesaiGrooming = () => dispatch => {
  getData('token').then(resToken => {
    Axios.get(`${API_HOST.url}/grooming?status=SELESAI`, {
      headers: {
        Authorization: resToken.value,
      },
    })
      .then(res => {
        // console.log('get Rgrooming :', res.data.data.data);
        dispatch({type: 'SET_SELESAI_GROOMING', value: res.data.data.data});
      })
      .catch(err => {
        showMessage('Terjadi Kesalahan di API Grooming');
      });
  });
};

export const getBatalGrooming = () => dispatch => {
  getData('token').then(resToken => {
    Axios.get(`${API_HOST.url}/grooming?status=DIBATALKAN`, {
      headers: {
        Authorization: resToken.value,
      },
    })
      .then(res => {
        // console.log('get Rgrooming :', res.data.data.data);
        dispatch({type: 'SET_BATAL_GROOMING', value: res.data.data.data});
      })
      .catch(err => {
        showMessage('Terjadi Kesalahan di API Grooming');
      });
  });
};

//----- riwayat penitipan ----//
export const getSelesaiPenitipan = () => dispatch => {
  getData('token').then(resToken => {
    Axios.get(`${API_HOST.url}/penitipan?status=SELESAI`, {
      headers: {
        Authorization: resToken.value,
      },
    })
      .then(res => {
        dispatch({type: 'SET_SELESAI_PENITIPAN', value: res.data.data.data});
      })
      .catch(err => {
        showMessage('Terjadi Kesalahan di API Penitipan');
      });
  });
};

export const getBatalPenitipan = () => dispatch => {
  getData('token').then(resToken => {
    Axios.get(`${API_HOST.url}/penitipan?status=DIBATALKAN`, {
      headers: {
        Authorization: resToken.value,
      },
    })
      .then(res => {
        dispatch({type: 'SET_BATAL_PENITIPAN', value: res.data.data.data});
      })
      .catch(err => {
        showMessage('Terjadi Kesalahan di API Penitipan');
      });
  });
};

//----- riwayat praktik ----//
export const getSelesaiPraktik = () => dispatch => {
  getData('token').then(resToken => {
    Axios.get(`${API_HOST.url}/praktik?status=SELESAI`, {
      headers: {
        Authorization: resToken.value,
      },
    })
      .then(res => {
        dispatch({type: 'SET_SELESAI_PRAKTIK', value: res.data.data.data});
      })
      .catch(err => {
        showMessage('Terjadi Kesalahan di API Praktik');
      });
  });
};

export const getBatalPraktik = () => dispatch => {
  getData('token').then(resToken => {
    Axios.get(`${API_HOST.url}/praktik?status=DIBATALKAN`, {
      headers: {
        Authorization: resToken.value,
      },
    })
      .then(res => {
        dispatch({type: 'SET_BATAL_PRAKTIK', value: res.data.data.data});
      })
      .catch(err => {
        showMessage('Terjadi Kesalahan di API Praktik');
      });
  });
};
