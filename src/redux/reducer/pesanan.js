const initPesanan = {
  //---- grooming
  pendingGrooming: [],
  penjemputanGrooming: [],
  prosesGrooming: [],
  antarGrooming: [],
  selesaiGrooming: [],
  batalGrooming: [],
  //---penitipan
  pendingPenitipan: [],
  penjemputanPenitipan: [],
  prosesPenitipan: [],
  antarPenitipan: [],
  selesaiPenitipan: [],
  batalPenitipan: [],

  //--- praktik
  pendingPraktik: [],
  penjemputanPraktik: [],
  prosesPraktik: [],
  antarPraktik: [],
  selesaiPraktik: [],
  batalPraktik: [],
};

export const pesananReducer = (state = initPesanan, action) => {
  //--- grooming
  if (action.type === 'SET_PENDING_GROOMING') {
    return {
      ...state,
      pendingGrooming: action.value,
    };
  }
  if (action.type === 'SET_PENJEMPUTAN_GROOMING') {
    return {
      ...state,
      penjemputanGrooming: action.value,
    };
  }
  if (action.type === 'SET_PROSES_GROOMING') {
    return {
      ...state,
      prosesGrooming: action.value,
    };
  }
  if (action.type === 'SET_ANTAR_GROOMING') {
    return {
      ...state,
      antarGrooming: action.value,
    };
  }
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
  //---- penitipan
  if (action.type === 'SET_PENDING_PENITIPAN') {
    return {
      ...state,
      pendingPenitipan: action.value,
    };
  }
  if (action.type === 'SET_PENJEMPUTAN_PENITIPAN') {
    return {
      ...state,
      penjemputanPenitipan: action.value,
    };
  }
  if (action.type === 'SET_PROSES_PENITIPAN') {
    return {
      ...state,
      prosesPenitipan: action.value,
    };
  }
  if (action.type === 'SET_ANTAR_PENITIPAN') {
    return {
      ...state,
      antarPenitipan: action.value,
    };
  }
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
  //---- praktik
  if (action.type === 'SET_PENDING_PRAKTIK') {
    return {
      ...state,
      pendingPraktik: action.value,
    };
  }
  if (action.type === 'SET_PENJEMPUTAN_PRAKTIK') {
    return {
      ...state,
      penjemputanPraktik: action.value,
    };
  }
  if (action.type === 'SET_PROSES_PRAKTIK') {
    return {
      ...state,
      prosesPraktik: action.value,
    };
  }
  if (action.type === 'SET_ANTAR_PRAKTIK') {
    return {
      ...state,
      antarPraktik: action.value,
    };
  }
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
