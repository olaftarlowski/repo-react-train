import { Navigate, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import PokeFullList from "./components/PokeFullList/PokeFullList";
import SideMenu from "./components/SideMenu/SideMenu";
import styled, { css } from "styled-components";
import backgroundImage from "../src/assets/container_bg.png";
import PokeSingle from "./components/PokeSingle/PokeSingle";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  min-height: 110vh;
  background: url(${backgroundImage});
`;

const Button = styled.button`
  border-radius: 5px;
  border: 2px solid palevioletred;
  background-color: #e3350d;
  margin: 1em 2em;
  transition: background-color 0.3s;
  transition-timing-function: ease-out;

  &:hover {
    background: #fff;
  }

  ${(props) =>
    props.backBtn &&
    css`
      background: #fff;
      color: #000;

      &:hover {
        background-color: #e3350d;
      }
    `}
  > a {
    color: #090909;
    font-size: 24px;
    padding: 0.25em 1em;
    display: inline-block;
    text-decoration: none;
  }
`;

const Headline = styled.h1`
  font-size: 2.5em;
  text-decoration: underline;
`;

function App() {
  return (
    <Container>
      <Headline>PokeApp</Headline>
      <div>
        <Button>
          <Link to="/">More</Link>
        </Button>
        <Button backBtn>
          <Link to="/">Back</Link>
        </Button>
      </div>
      <Routes>
        <Route path="/" exact element={<PokeFullList></PokeFullList>}></Route>
        <Route
          path="/:pokeNameCode"
          element={<PokeSingle></PokeSingle>}
        ></Route>
        <Route path="*" element={<Navigate to="/" />}></Route>
      </Routes>
      <SideMenu></SideMenu>
    </Container>
  );
}

export default App;
