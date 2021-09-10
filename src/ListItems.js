import React, { useContext } from "react";
import { Context } from "./GlobalContext";
import styled from "styled-components";
import CheckBox from "./CheckBox";

export default function ListItems() {
  const { contactsName } = useContext(Context);

  const sortDataByLastName = contactsName.sort(function (a, b) {
    return a?.last_name.localeCompare(b?.last_name);
  });

  const dataLists = sortDataByLastName.map((item) => {
    const firstName = item.first_name;
    const lastName = item.last_name;
    const firstLaterFromNames =
      firstName.substring(0, 1) + "" + lastName.substring(0, 1);
    const name = firstLaterFromNames.toUpperCase();

    return (
      <ListContainer key={item.id}>
        <ListsAvatar key={item.id}>
          {item.avatar === null ? (
            <AvatarName>{name}</AvatarName>
          ) : (
            <Image src={item.avatar} alt={item.first_name} />
          )}
        </ListsAvatar>
        <Lists>
          {item.first_name} {item.last_name}
          <Email>{item.email}</Email>
        </Lists>
        <Span>
          <CheckBox />
        </Span>
      </ListContainer>
    );
  });
  return <ListWraper>{dataLists}</ListWraper>;
}

const ListWraper = styled.div``;
const ListContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(240, 240, 240);
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-block-start: 0;
  margin-block-end: 0;
  padding-inline-start: 0;
`;
const Lists = styled.li``;
const ListsAvatar = styled.li`
  background-color: #ffffff;
`;
const Image = styled.img``;
const Span = styled.span``;
const Email = styled.p``;
const AvatarName = styled.p`
  padding-inline-end: 11px;
  padding-inline-start: 17px;
`;
