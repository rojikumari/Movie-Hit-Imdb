import React from "react";
import styled from "styled-components";
import arr from "./Image";

import {Link,Routes,Route} from "react-router-dom";
console.log(arr);
const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 280px;
  box-shadow: 0 3px 10px 0 #aaa;
  cursor: pointer;
`;
const CoverImage = styled.img`
  object-fit: cover;
  width: 280px;
  height: 362px;
`;
const MovieName = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: black;
  margin: 15px 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;
const InfoColumn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const MovieInfo = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: black;
  text-transform: capitalize;
`;



const MovieComponent = (props) => {
//     <Routes>
// <Route path="/details" element={<Movie/>}></Route>
// </Routes>
  return (
    <MovieContainer>
   
      <Link to="/details">

        <CoverImage src={props.image} />
      </Link>
      <MovieName>{props.movName}</MovieName>
      <InfoColumn>
        <MovieInfo>BoxOffice: {props.boxoffice}</MovieInfo>
        <MovieInfo>ImdbRating: {props.imdrate}</MovieInfo>
      </InfoColumn>
    </MovieContainer>
  );
};
export default MovieComponent;
