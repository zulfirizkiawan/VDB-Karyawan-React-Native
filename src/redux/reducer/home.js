const initHome = {
  diskon: [],
  dokter: [],
  totalGrooming: [],
  totalPenitipan: [],
  totalPraktik: [],
};

export const homeReducer = (state = initHome, action) => {
  if (action.type === 'SET_DISKON') {
    return {
      ...state,
      diskon: action.value,
    };
  }

  if (action.type === 'SET_DOKTER') {
    return {
      ...state,
      dokter: action.value,
    };
  }

  if (action.type === 'SET_TOTAL_GROOMING') {
    return {
      ...state,
      totalGrooming: action.value,
    };
  }

  if (action.type === 'SET_TOTAL_PENITIPAN') {
    return {
      ...state,
      totalPenitipan: action.value,
    };
  }

  if (action.type === 'SET_TOTAL_PRAKTIK') {
    return {
      ...state,
      totalPraktik: action.value,
    };
  }

  return state;
};
