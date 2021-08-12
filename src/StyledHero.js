import styled from 'styled-components';

import defaultImg from './image/room-2.jpg';

/* styled hero is frame of room in container */
const StyledHero = styled.header`
  min-height: 60vh;
  background: url(${props => (props.img ? props.img : defaultImg)}) center/cover
    no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default StyledHero;