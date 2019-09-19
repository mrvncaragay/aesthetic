const reducer = (state, action) => {
  switch (action.type) {
    case 'NEXT_CATEGORY': {
      return {
        ...state,
        nextCategory: true,
        category: action.payload
      };
    }

    case 'NEXT_INDEX':
      return {
        ...state,
        nextIndex: true,
        index: action.payload
      };

    case 'RESET':
      return {
        ...state,
        nextCategory: false,
        nextIndex: false
      };

    default:
      return state;
  }
};

export default reducer;
