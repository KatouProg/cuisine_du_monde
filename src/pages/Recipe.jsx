import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import React from 'react'

function Recipe() {

    let params = useParams();
    const [details, setDetails] = useState({});
    const [activeTab, setActiveTab] = useState('instructions');

    const fetchDetails = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=61c397f900b74a03bded03cbae24a1a7`);
        const detailData = await data.json();
        setDetails(detailData);
        console.log(detailData);
    };

    useEffect(() => {
        fetchDetails();
    }, [params.name]);


  return (
    <DetailWrapper>
        <div>
            <h2>{details.title}</h2>
            <img src={details.image} alt={details.title} />
        </div>
        <Info>
            <Button className={activeTab === 'instructions' ? 'active' : ''} onClick={() => setActiveTab("instructions")}>Instructions</Button>
            <Button className={activeTab === 'ingredients' ? 'active' : ''} onClick={() => setActiveTab("ingredients")}>Ingrédients</Button>
            {activeTab === "instructions" && (
                <div>
                <h4 dangerouslySetInnerHTML={{ __html: details.summary }}></h4>
                <p dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
                </div>
            )}
            {activeTab === "ingredients" && (
                <div className="recipeList">
                <ul>
                    {details.extendedIngredients.map((ingredient) => (  //Used () instead of {} because of map issue
                        <li key={ingredient.id}>{ingredient.original}</li>
                    ))}
                </ul>
            </div>
            )}
           
            
        </Info>
    </DetailWrapper>
  )
}

const DetailWrapper = styled.div`
    margin-top: 10rem;
    margin-bottom: 5rem;
    display: flex;
    margin: 0rem 20rem;
    .active{
        background: #29335c;
        color: white;
    }
    h2{
        margin-bottom: 2rem;
    }
    li{
        font-size: 1rem;
        line-height: 1.8rem;
    }
    ul{
        margin-top: 2rem;
    }
    img {
        box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
        border-radius: 2rem;
    }
`;

const Button = styled.button`
    padding: 1rem 2rem;
    color: #313131;
    background: #ffd0f4;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
    border-radius: 1rem;
    margin-right: 2rem;
    font-weight: 500;
`;

const Info = styled.div`
    margin-left: 10rem;
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

export default Recipe
