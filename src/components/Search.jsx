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
                onChange={(e) => setInput(e.target.value)} 
                type="text" 
                value={input}
                />
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
        background: #29335c;
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
        color: #F3A712;
    }
`;

export default Search