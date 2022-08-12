import React from 'react';
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Searched() {

    const [searchedRecipes, setSearchedRecipes] = useState([]);
    let params = useParams();

    const getSearched = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=61c397f900b74a03bded03cbae24a1a7&query=${name}&number=12`);
        const recipes = await data.json();
        setSearchedRecipes(recipes.results);
    };

    useEffect(() => {
        getSearched(params.search);
    },[params.search]);

  return (
    <Grid>
        {searchedRecipes.map((item) => {
            return(
               <Card key={item.id}>
                    <Link to={"/recipe/" + item.id}>
                        <img src={item.image} alt="" />
                        <h4>{item.title}</h4>
                    </Link>
               </Card> 
            )
        })}
    </Grid>
  );
}


const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    grid-gap: 3rem;
`;

const Card = styled.div`
    img{
        border-radius: 2rem;
        width: 100%;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
    a{
        text-decoration: none;
    }
    h4{
        text-align: center;
        padding: 1rem;
        font-size: 0.9rem;
        margin-top: 1.5rem;
    }
    p{
        font-size: 0.9rem;
        margin-top: 1.5rem;
        font-weight: 500;
    }
`;

export default Searched