import "./App.css";
import ListItems from "./ListItems";
import styled from "styled-components";
import SearchInput from "./SearchInput";

const Container = styled.section``;
const Heading = styled.h1`
  background: linear-gradient(96deg, green 30%, skyblue);
  padding-block-end: 10px;
  padding-block-start: 10px;
  margin-block-end: 0;
  margin-block-start: 0;
`;

function App() {
  return (
    <Container>
      <Heading>Contacts</Heading>
      <SearchInput />
      <ListItems />
    </Container>
  );
}

export default App;
