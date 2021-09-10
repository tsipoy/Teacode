import React, { useContext } from "react";
import { Context } from "./GlobalContext";
import styled from "styled-components";

export default function CheckBox() {
  const {
    // handleCheckBox,
    contactData,
  } = useContext(Context);
  const contact = contactData.map((el) => {
    return (
      <Input
        key={el.id}
        type="checkbox"
        // checked={el.isChecked}
        // onChange={() => handleCheckBox(el.id)}
      />
    );
  });
  return (
    <Input
      // key={el.id}
      type="checkbox"
      // checked={el.isChecked}
      // onChange={() => handleCheckBox(el.id)}
    />
  );
  // <>{contact}</>;
}
const Input = styled.input``;
