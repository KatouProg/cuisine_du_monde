import React, { useEffect, useState } from "react";
import styled from 'styled-components';
//import { motion } from 'framer-motion';
import {  useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

//💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩

function Cuisine() {

    const [cuisine, setCuisine] = useState([]);
    let params = useParams();

    const getCuisine = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=d15474f1c80e4b908ad1f0d389886533&cuisine=${name}&number=12`);
        const recipes = await data.json();
        setCuisine(recipes.results);
    };

    useEffect(() => {
        getCuisine(params.type)
        //console.log(params.type);
    },[params.type]);

  return (
    <Grid>
      {cuisine.map((item) => {
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
  )
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

export default Cuisine
