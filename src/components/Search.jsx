import styled from "styled-components";
import {useEffect} from 'react';
import {useState} from 'react';
import {FaSearch} from 'react-icons/fa';
import {useNavigate} from 'react-router-dom';


function Search() {
    const [input, setInput] = useState("");
    let navigate = useNavigate();
   
    const handleSubmit = (e) => {
        e.preventDefault()
        navigate("/searched/" + input);
        console.log('form submitted ✅');
      };

    useEffect(() => {
        const keyDownHandler = event => {
          //console.log('User pressed: ', event.key);
    
          if (event.key === 'Enter') {
            event.preventDefault();

            handleSubmit(event);
          }
        };
    
        document.addEventListener('keydown', keyDownHandler);
    
        return () => {
          document.removeEventListener('keydown', keyDownHandler);
        };
      });
   

  return (
    
    <FormStyle onSubmit={handleSubmit}>
        <div>
            <FaSearch></FaSearch>
            <input 
                placeholder="Ingrédient ou recette (en anglais) ..."
                onChange={(e) => setInput(e.target.value)} 
                type="text" 
                value={input}
                />
        </div>
    </FormStyle>
  );
}

const FormStyle = styled.div`
    margin: 3rem 14rem;
    
    div{
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    }
    input{
        border: 1px solid #29335c;
        border-radius: 1rem;
        font-size: 0.8rem;
        padding: 1rem 1.5rem;
        color: #29335c;
        outline: none;
        width: 60%;
        height: 100%;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        @media (max-width: 1500px) {
          width: 200px;
        }
        @media (max-width: 768px) {
          display: none;
        }
    }
    svg{
        position: absolute;
        color: #29335c;
        display: none;
    }
`;

export default Search