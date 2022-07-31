import Axios from 'axios';
import {getData, showMessage} from '../../utils';

const API_HOST = {
  url: 'http://vdb.otwlulus.com/api',
};

//----- riwayat grooming ----//

export const getPendingGrooming = () => dispatch => {
  Axios.get(`${API_HOST.url}/allGrooming?status=PENDING`)
    .then(res => {
      // console.log('get Rgrooming :', res.data.data.data);
      dispatch({type: 'SET_PENDING_GROOMING', value: res.data.data.data});
    })
    .catch(err => {
      showMessage('Terjadi Kesalahan di API Grooming');
    });
};

export const getPenjemputanGrooming = () => dispatch => {
  Axios.get(`${API_HOST.url}/allGrooming?status=PENJEMPUTAN`)
    .then(res => {
      // console.log('get Rgrooming :', res.data.data.data);
      dispatch({type: 'SET_PENJEMPUTAN_GROOMING', value: res.data.data.data});
    })
    .catch(err => {
      showMessage('Terjadi Kesalahan di API Grooming');
    });
};

export const getProsesGrooming = () => dispatch => {
  Axios.get(`${API_HOST.url}/allGrooming?status=DI PROSES`)
    .then(res => {
      // console.log('get Rgrooming :', res.data.data.data);
      dispatch({type: 'SET_PROSES_GROOMING', value: res.data.data.data});
    })
    .catch(err => {
      showMessage('Terjadi Kesalahan di API Grooming');
    });
};

export const getAntarGrooming = () => dispatch => {
  Axios.get(`${API_HOST.url}/allGrooming?status=DI ANTAR`)
    .then(res => {
      // console.log('get Rgrooming :', res.data.data.data);
      dispatch({type: 'SET_ANTAR_GROOMING', value: res.data.data.data});
    })
    .catch(err => {
      showMessage('Terjadi Kesalahan di API Grooming');
    });
};

export const getSelesaiGrooming = () => dispatch => {
  Axios.get(`${API_HOST.url}/allGrooming?status=SELESAI`)
    .then(res => {
      // console.log('get Rgrooming :', res.data.data.data);
      dispatch({type: 'SET_SELESAI_GROOMING', value: res.data.data.data});
    })
    .catch(err => {
      showMessage('Terjadi Kesalahan di API Grooming');
    });
};

export const getBatalGrooming = () => dispatch => {
  Axios.get(`${API_HOST.url}/allGrooming?status=DIBATALKAN`)
    .then(res => {
      // console.log('get Rgrooming :', res.data.data.data);
      dispatch({type: 'SET_BATAL_GROOMING', value: res.data.data.data});
    })
    .catch(err => {
      showMessage('Terjadi Kesalahan di API Grooming');
    });
};

//----- riwayat penitipan ----//
export const getPendingPenitipan = () => dispatch => {
  Axios.get(`${API_HOST.url}/allPenitipan?status=PENDING`)
    .then(res => {
      // console.log('get Rgrooming :', res.data.data.data);
      dispatch({type: 'SET_PENDING_PENITIPAN', value: res.data.data.data});
    })
    .catch(err => {
      showMessage('Terjadi Kesalahan di API PENITIPAN');
    });
};

export const getPenjemputanPenitipan = () => dispatch => {
  Axios.get(`${API_HOST.url}/allPenitipan?status=PENJEMPUTAN`)
    .then(res => {
      // console.log('get RPENITIPAN :', res.data.data.data);
      dispatch({type: 'SET_PENJEMPUTAN_PENITIPAN', value: res.data.data.data});
    })
    .catch(err => {
      showMessage('Terjadi Kesalahan di API PENITIPAN');
    });
};

export const getProsesPenitipan = () => dispatch => {
  Axios.get(`${API_HOST.url}/allPenitipan?status=DI PROSES`)
    .then(res => {
      // console.log('get RPENITIPAN :', res.data.data.data);
      dispatch({type: 'SET_PROSES_PENITIPAN', value: res.data.data.data});
    })
    .catch(err => {
      showMessage('Terjadi Kesalahan di API PENITIPAN');
    });
};

export const getAntarPenitipan = () => dispatch => {
  Axios.get(`${API_HOST.url}/allPenitipan?status=DI ANTAR`)
    .then(res => {
      // console.log('get RPENITIPAN :', res.data.data.data);
      dispatch({type: 'SET_ANTAR_PENITIPAN', value: res.data.data.data});
    })
    .catch(err => {
      showMessage('Terjadi Kesalahan di API PENITIPAN');
    });
};

export const getSelesaiPenitipan = () => dispatch => {
  Axios.get(`${API_HOST.url}/allPenitipan?status=SELESAI`)
    .then(res => {
      dispatch({type: 'SET_SELESAI_PENITIPAN', value: res.data.data.data});
    })
    .catch(err => {
      showMessage('Terjadi Kesalahan di API Penitipan');
    });
};

export const getBatalPenitipan = () => dispatch => {
  Axios.get(`${API_HOST.url}/allPenitipan?status=DIBATALKAN`)
    .then(res => {
      dispatch({type: 'SET_BATAL_PENITIPAN', value: res.data.data.data});
    })
    .catch(err => {
      showMessage('Terjadi Kesalahan di API Penitipan');
    });
};

//----- riwayat praktik ----//
export const getPendingPraktik = () => dispatch => {
  Axios.get(`${API_HOST.url}/allPraktik?status=PENDING`)
    .then(res => {
      // console.log('get Rgrooming :', res.data.data.data);
      dispatch({type: 'SET_PENDING_PRAKTIK', value: res.data.data.data});
    })
    .catch(err => {
      showMessage('Terjadi Kesalahan di API PRAKTIK');
    });
};

export const getPenjemputanPraktik = () => dispatch => {
  Axios.get(`${API_HOST.url}/allPraktik?status=PENJEMPUTAN`)
    .then(res => {
      // console.log('get RPRAKTIK :', res.data.data.data);
      dispatch({type: 'SET_PENJEMPUTAN_PRAKTIK', value: res.data.data.data});
    })
    .catch(err => {
      showMessage('Terjadi Kesalahan di API PRAKTIK');
    });
};

export const getProsesPraktik = () => dispatch => {
  Axios.get(`${API_HOST.url}/allPraktik?status=DI PROSES`)
    .then(res => {
      // console.log('get RPRAKTIK :', res.data.data.data);
      dispatch({type: 'SET_PROSES_PRAKTIK', value: res.data.data.data});
    })
    .catch(err => {
      showMessage('Terjadi Kesalahan di API PRAKTIK');
    });
};

export const getAntarPraktik = () => dispatch => {
  Axios.get(`${API_HOST.url}/allPraktik?status=DI ANTAR`)
    .then(res => {
      // console.log('get RPRAKTIK :', res.data.data.data);
      dispatch({type: 'SET_ANTAR_PRAKTIK', value: res.data.data.data});
    })
    .catch(err => {
      showMessage('Terjadi Kesalahan di API PRAKTIK');
    });
};

export const getSelesaiPraktik = () => dispatch => {
  Axios.get(`${API_HOST.url}/allPraktik?status=SELESAI`)
    .then(res => {
      dispatch({type: 'SET_SELESAI_PRAKTIK', value: res.data.data.data});
    })
    .catch(err => {
      showMessage('Terjadi Kesalahan di API Praktik');
    });
};

export const getBatalPraktik = () => dispatch => {
  Axios.get(`${API_HOST.url}/allPraktik?status=DIBATALKAN`)
    .then(res => {
      dispatch({type: 'SET_BATAL_PRAKTIK', value: res.data.data.data});
    })
    .catch(err => {
      showMessage('Terjadi Kesalahan di API Praktik');
    });
};
