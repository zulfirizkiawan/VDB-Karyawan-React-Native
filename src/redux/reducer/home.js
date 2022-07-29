const initHome = {
  diskon: [],
  dokter: [],
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

  return state;
};
