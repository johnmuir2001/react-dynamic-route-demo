import { Link } from "react-router-dom";
import styled from "styled-components";

const Home = (props) => {

    return (
        <>
            <h1>Home Page</h1>
            {props.allMovies.map((film, index) => {
                return(
                    <Link key={index} to={`/product/${film.id}`}>
                        <Poster src={film.image} alt={film.title}/>
                    </Link>
                )
            })}
        </>
    )
}

export default Home

const Poster = styled.img`
    height: 200px;
    margin: 5px;
    cursor: pointer;
`;