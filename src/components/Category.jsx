import { FaHamburger } from 'react-icons/fa';
import { GiCook, GiNoodles, GiChopsticks, GiIndianPalace, GiFireBowl } from 'react-icons/gi';
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
      <SLink to={'/cuisine/Indian'}>
        <GiIndianPalace />
        <h4>Indienne</h4>
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
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin: 1rem 0rem;
`;

const SLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 2rem;
    text-decoration: none;
    background: #29335C;
    width: 7rem;
    height: 7rem;
    cursor: pointer;
    transform: scale(0.8);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;

    h4{
        color: #b9eaf1;
        font-size: 1rem;
        font-weight: 400;
    }

    svg{
        color: #b9eaf1;
        font-size: 1.7rem;
    }
    &.active{
        background: #b9eaf1;
        border: none;
        h4{
          color: #29335c;
        }
        svg{
          color: #29335c;
        }
          
    }
`;

export default Category
