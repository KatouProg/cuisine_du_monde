import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';


function Category() {
  return (
    <List>
      <NavLink to={'/cuisine/French'}>
        <FaPizzaSlice />
        <h4>Francaise</h4>
      </NavLink>
      <NavLink to={'/cuisine/American'}>
        <FaHamburger />
        <h4>Americaine</h4>
      </NavLink>
      <NavLink to={'/cuisine/Thai'}>
        <GiNoodles />
        <h4>Thai</h4>
      </NavLink>
      <NavLink to={'/cuisine/Chinese'}>
        <GiChopsticks />
        <h4>Chinoise</h4>
      </NavLink>
    </List>
  )
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;
`;

export default Category
