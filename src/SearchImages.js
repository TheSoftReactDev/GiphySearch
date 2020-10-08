import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";

import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { requestImages } from "./SearchAction";

//style
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-color:
    font-family: sans-serif;
  }
`;
const WrapperImages = styled.section`
  max-width: 70rem;
  margin: 4rem auto;
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 300px;
`;
const getImages = createSelector(
  (state) => state.SearchReducer,
  (SearchReducer) => SearchReducer
);

const SearchImages = () => {
  const { images } = useSelector(getImages);
  const dispatch = useDispatch();
  const onInputChange = (e) => {
    console.log(images);
    dispatch(requestImages(e.target.value));
  };
  const listItems = images.map((x) => {
    return <img key={x.id} src={x.images.fixed_width.url} />;
  });

  return (
    <div>
      <GlobalStyle />
      <br />
      <input
        type="text"
        onChange={onInputChange}
        placeholder="Search Giphy"
      ></input>
      <WrapperImages>{listItems}</WrapperImages>
    </div>
  );
};
export default SearchImages;
