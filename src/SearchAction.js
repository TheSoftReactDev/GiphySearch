import axios from "axios";

export const RECEIVE_IMAGES = "RECEIVE_IMAGES";

export const receiveImages = (images) => ({
  type: RECEIVE_IMAGES,
  images,
});

export const requestImages = (term) => {
  return (dispatch) => {
    let url =
      "http://api.giphy.com/v1/gifs/search?q=$" +
      term +
      "&api_key=8516ae5930e2408f8dd8849ccb63835d";
    console.log(url);
    axios
      .get(url)
      .then((x) => {
        const userItems = x.data.data;
        dispatch(receiveImages(userItems));
        console.log(userItems);
      })
      .catch((error) => {
        const errorMsg = error.message;
        console.log(errorMsg);
      });
  };
};
