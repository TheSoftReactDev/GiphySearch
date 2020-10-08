export const RECEIVE_IMAGES = "RECEIVE_IMAGES";

const initialState = {
  images: [],
};

export const SearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_IMAGES:
      return {
        ...state,
        images: action.images,
      };
    default:
      return state;
  }
};
