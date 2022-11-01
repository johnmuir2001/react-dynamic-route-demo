import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"

const Movie = () => {
    const [film, setFilm] = useState({})

    const { id } = useParams()

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://ghibliapi.herokuapp.com/films/${id}`);
            const data = await response.json();
            setFilm(data)
            console.log(data)
        }
        fetchData()
    }, [id])

    return (
        <FilmInfo>
            <img src={film.image}/>
            <div>
                <h5>{film.original_title}</h5>
                <h1>{film.title}</h1>
                <h3>{film.original_title_romanised}</h3>
                <p>{film.description}</p>
            </div>
        </FilmInfo>
    )
}

export default Movie

const FilmInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px;

    img {
        height: 400px;
    }
    div {
        width: 50vw;
        margin: 0 0 0 30px;
    }
    h5, h1, h3 {
        margin: 0;
    }
`;