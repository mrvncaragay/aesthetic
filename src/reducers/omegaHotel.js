const reducer = (state, action) => {
  switch (action.type) {
    case 'NEXT':
      return {
        ...state,
        next: true,
        index: action.payload
      };

    case 'RESET_NEXT':
      return {
        ...state,
        next: false
      };

    default:
      return state;
  }
};

export default reducer;
