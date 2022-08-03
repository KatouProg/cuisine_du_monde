import styled from "styled-components";
import {useState} from 'react';
import {FaSearch} from 'react-icons/fa'

function Search() {

    const [input, setInput] = useState("");

  return (
    <FormStyle>
        <div>
            <FaSearch></FaSearch>
            <input 
            onChange={(e) => setInput(e.target.value)} 
            type="text" 
            value={input} />
        </div>
    </FormStyle>
  );
}

const FormStyle = styled.div`
    margin: 0rem 20rem;
    
    div{
    position: relative;
    width: 100%;
    }
    input{
        border: none;
        border-radius: 1rem;
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 1.5rem;
        padding: 1rem 3rem;
        color: white;
        outline: none;
        width: 100%;
    }
    svg{
        position: absolute;
        top: 50%;
        left:0%;
        transform: translate(100%, -50%);
        color: white;
    }
`;

export default Search