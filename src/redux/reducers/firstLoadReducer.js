const initialState = {
  firstLoad: true,
};

export default function firstLoadReducer(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_LOAD_STATE": {
      return {
        ...state,
        firstLoad: action.data,
      };
    }
    default: {
      return state;
    }
  }
}
