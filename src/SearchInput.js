import React, { useContext } from "react";
import { Context } from "./GlobalContext";
import styled from "styled-components";
import searchIcon from "../src/assets/search-icon.svg";

const Input = styled.input`
  background-image: url("${searchIcon}");
  background-repeat: no-repeat;
  background-position-x: 2%;
  background-position-y: 50%;
  width: -webkit-fill-available;
  padding-block-end: 9px;
  padding-block-start: 8px;
  padding-inline-start: 39px;
  border: none;
`;

export default function SearchInput() {
  const { setInputValue, inputValue } = useContext(Context);

  return (
    <Input
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
    />
  );
}
