import { FaHamburger } from 'react-icons/fa';
import { GiCook, GiNoodles, GiChopsticks, GiSombrero, GiFireBowl } from 'react-icons/gi';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';


function Category() {
  return (
    <List>
      <SLink to={'/cuisine/French'}>
        <GiCook />
        <h4>Francaise</h4>
      </SLink>
      <SLink to={'/cuisine/American'}>
        <FaHamburger />
        <h4>Americaine</h4>
      </SLink>
      <SLink to={'/cuisine/Thai'}>
        <GiNoodles />
        <h4>Thai</h4>
      </SLink>
      <SLink to={'/cuisine/Chinese'}>
        <GiChopsticks />
        <h4>Chinoise</h4>
      </SLink>
      <SLink to={'/cuisine/Latin American'}>
        <GiSombrero />
        <h4>Latine</h4>
      </SLink>
      <SLink to={'/cuisine/Korean'}>
        <GiFireBowl />
        <h4>Coréenne</h4>
      </SLink>
    </List>
  )
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;
`;

const SLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 2rem;
    text-decoration: none;
    background: linear-gradient(35deg, #494949, #313131);
    width: 7rem;
    height: 7rem;
    cursor: pointer;
    transform: scale(0.8);

    h4{
        color: white;
        font-size: 0.8rem;
    }

    svg{
        color: white;
        font-size: 1.5rem;
    }
    &.active{
        background: linear-gradient(to right, #f27121, #e94057)
    }
`;

export default Category
