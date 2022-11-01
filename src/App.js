import { useEffect, useState } from "react";
import styled from "styled-components";
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Movie from "./pages/Movie";

const App = () => {
  const [allMovies, setAllMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        const response = await fetch(`https://ghibliapi.herokuapp.com/films`);
        const data = await response.json();
        setAllMovies(data)
    }
    fetchData()
}, [])

  return (
    <>
      <BrowserRouter>
        <NavBar>
          <NavItem to="react-dynamic-route-demo/">Home</NavItem>
        </NavBar>

        <Routes>
          <Route path="react-dynamic-route-demo/" exact element={ <Home allMovies={allMovies} /> } />
          <Route path="product/:id" element={ <Movie /> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

const NavBar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #424651;
    padding: 10px;

    .menu {
      position: fixed;
      right: -200px;
      top: 0;
      width: 200px;
      height: 100vh;
      background-color: red;
      transition: right 0.5s;
    }
    .show {
      right: 0px;
    }
`

const NavItem = styled(Link)`
    font-size: 16px;
    margin: 0 16px;
    color: white;
    cursor: pointer;
    padding: 10px 15px;

    &:hover {
        background-color: #32394d;
    }
`