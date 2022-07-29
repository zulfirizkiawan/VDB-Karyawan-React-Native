const initPesanan = {
  pesananGrooming: [],
  pesananPenitipan: [],
  pesananPraktik: [],
  //----
  selesaiGrooming: [],
  batalGrooming: [],
  //---
  selesaiPenitipan: [],
  batalPenitipan: [],
  //---
  selesaiPraktik: [],
  batalPraktik: [],
};

export const pesananReducer = (state = initPesanan, action) => {
  if (action.type === 'SET_PESANAN_GROOMING') {
    return {
      ...state,
      pesananGrooming: action.value,
    };
  }
  if (action.type === 'SET_PESANAN_PENITIPAN') {
    return {
      ...state,
      pesananPenitipan: action.value,
    };
  }
  if (action.type === 'SET_PESANAN_PRAKTIK') {
    return {
      ...state,
      pesananPraktik: action.value,
    };
  }
  //----
  if (action.type === 'SET_SELESAI_GROOMING') {
    return {
      ...state,
      selesaiGrooming: action.value,
    };
  }
  if (action.type === 'SET_BATAL_GROOMING') {
    return {
      ...state,
      batalGrooming: action.value,
    };
  }
  //----
  if (action.type === 'SET_SELESAI_PENITIPAN') {
    return {
      ...state,
      selesaiPenitipan: action.value,
    };
  }
  if (action.type === 'SET_BATAL_PENITIPAN') {
    return {
      ...state,
      batalPenitipan: action.value,
    };
  }
  //----

  if (action.type === 'SET_SELESAI_PRAKTIK') {
    return {
      ...state,
      selesaiPraktik: action.value,
    };
  }
  if (action.type === 'SET_BATAL_PRAKTIK') {
    return {
      ...state,
      batalPraktik: action.value,
    };
  }

  return state;
};
