import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter } from 'react-router-dom';
import Search from "./components/Search";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";
import { MdRamenDining } from "react-icons/md";
import background from './bg2.jpg'
 
function App() {
  return (
    <div className="App">
    <Bg style={{ backgroundImage: `url(${background})` }}>
      <BrowserRouter>
        <Nav>
          <GiKnifeFork />
          <Logo to={"/"}>Cuisines Du Monde</Logo>
          <MdRamenDining />
        </Nav>
        <Category />
        <Search />
        <Pages />
      </BrowserRouter>
      </Bg>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 3.5rem;
  font-weight: 400;
  font-family: 'Aboreto', cursive;
  font-weight: 600;
  color: #29335c;
  margin: 0rem 3rem;
  @media (max-width: 986px) {
    display: none;
  }
`;

const Nav = styled.div`
  padding: 3rem 0rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #29335c;
  svg {
    font-size: 5rem;
    padding: 0.5rem;
    @media (max-width: 986px) {
      font-size: 8rem;
    }
  }
`;

const Bg = styled.div`
  height: 1600px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;




export default App;
