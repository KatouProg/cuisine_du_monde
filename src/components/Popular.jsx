import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';

function Popular() {
    const [popular, setPopular] = useState([]);

    useEffect(() => {
        getPopular();
    },[]);

    const getPopular = async () => {

        // Put data in local storage because of API free version limitation
        const check = localStorage.getItem('popular');

        if(check) {
            setPopular(JSON.parse(check));
        }else{
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=61c397f900b74a03bded03cbae24a1a7&number=9`); // ***TODO*** apiKey=${process.env.REACT_APP_API_KEY}
            const data = await api.json();

            localStorage.setItem("popular", JSON.stringify(data.recipes));

            setPopular(data.recipes);
            console.log(data.recipes);
        }   
    };


  return (
    <div>
        <Wrapper>
            <h3>Recettes populaires</h3>
            <Splide options={{
                perPage: 3,
                arrows: true,
                pagination: true,
                drag: 'free',
                gap: '5rem',

            }}>
            {popular.map((recipe) => {
                return(
                    <SplideSlide key={ recipe.id }>
                    <Card>
                        <Link to={"/recipe/" + recipe.id}>
                            <p>{ recipe.title }</p>
                            <img src={ recipe.image } alt={ recipe.title } />
                            <Gradient />
                        </Link>
                    </Card>
                    </SplideSlide>                                
                );
            })}
            </Splide>
        </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
    margin: 4rem 0rem;
    background: #29335c;
    border-radius: 1rem;
    padding: 2rem;
    h3 {
        color: white;
    }
`;

const Card = styled.div`
    min-height: 25rem;
    border-radius: 2rem;
    overflow: hidden;
    position: relative;

    img {
        border-radius: 2rem;
        position: absolute;
        left: 0;
        width: 100%;
        height: 85%;
        object-fit: cover;
    }
    p {
        position: absolute;
        z-index: 10;
        left: 0%;
        bottom: 10%;
        color: white;
        width: 100%;
        text-align: center;
        font-weight: 600;
        font-size: 1rem;
        height: 40%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    h4{
        font-size: 0.9rem;
        margin-top: 1.5rem;
    }
    p{
        font-size: 0.9rem;
        margin-top: 1.5rem;
        font-weight: 500;
    }

`;

const Gradient = styled.div`
    z-index: 3;
    position: absolute;
    width: 100%;
    height: 85%;
    border-radius: 2rem;
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`;

export default Popular

