// Import styled-components and disable linebreak-style ESLint rule
/* eslint-disable linebreak-style */
import styled from 'styled-components/macro';

// Define the DescriptionWrapper styled-component
export const DescriptionWrapper = styled.div`
  // Basic styles and layout
  position: relative;
  display: flex;
  flex-direction: column;
  font-size:2rem;
  text-shadow: 0px 0px 40px rgba(4, 4, 4, 1);
  padding: 0 2.8rem ;
  font-weight: 600;
  color: #F5F5F5;
  padding-bottom: 30px;

  // Responsive styles for smaller screens
  @media (max-width: 490px) {
    padding-bottom: 10px;
    font-size: 1.4rem;
    padding: 0 0.3rem ;
  }

  @media (max-width: 375px) {
    padding-bottom: 10px;
    font-size: 1.2rem;
    padding: 0 1rem ;
  }
`;

// Define the DirectionWrapper styled-component
export const DirectionWrapper = styled.div`
  display: grid;
  min-height: 250px;
  justify-content: center;

  // Grid layouts based on number of moves
  &#twoMoves {
    grid-template-columns: 1fr 1fr;
  }
  &#oneMove {
    grid-template-columns: 1fr;
  }

  // Paragraph styles
  p {
    font-size: 1.6rem;
    font-family: 'Sora', sans-serif;
    font-weight: 500;
    color: #F5F5F5
  }

  // Div styles
  div {
    max-width: 200px;
    padding: 10px;
  }
`;

// Define the DirectionBtn styled-component
export const DirectionBtn = styled.button`
  // Basic styles
  background: #2C2C2C;
  color: #F5F5F5;
  border: none;
  margin: 10px 0px;
  padding: 15px 30px;
  border-radius: 30px;
  font-size: 1.1rem;
  font-weight: 500;
  opacity: 0.8;

  // Hover effect
  &:hover {
    opacity: 1;
  }

  // Responsive styles for smaller screens
  @media (max-width: 680px) {
      font-size: 1rem;
      margin-top: 24px;
      padding: 14px 18px;
      width:120px;
    border-radius: 28px;
  }

  @media (max-width: 400px) {
      font-size: 0.9rem;
      margin-top: 18px;
      padding: 12px 10px;
      width:120px;
    border-radius: 24px;
  }
`;

// Define the StartBtn styled-component
// Basic styles and layout
export const StartBtn = styled.button`

  align-items: center;
  font-weight: 600;
  margin: 30px 0px 10px 0px;
  padding: 8px 0px;
  border-radius: 20px;
  opacity: 0.8;
  border: none;
  background-color: #F5F5F5;
  box-sizing: border-box;
  color: #2C2C2C;
  cursor: pointer;
  height: 40px;
  width: 80px;

  justify-content: center;
line-height: 1;
list-style: none;
overflow: hidden;
font-size: 14px;

// Hover effect
&:hover {
opacity: 1;
}

// Responsive styles for smaller screens
@media (max-width: 400px) {
font-size: 0.8rem;
padding: 10px 20px;
border-radius: 20px;
}
`;

// Define the RestartBtn styled-component (based on StartBtn)
export const RestartBtn = styled(StartBtn)`
display: flex;
justify-content: center;
position: absolute;
top: 82vh;

// Basic styles and layout
width: 100px;
height: 40px;

// Label styles
label {
color:#233924;
}

// Image styles
img {
width: 30px;
}

// Responsive styles for smaller screens
@media (max-width: 500px) {
top: 70vh;
width: 100px;
font-size: 0.8rem;
}

@media (min-width: 1280px) {
top: 70vh;
}
`;

// Define the GameEnd styled-component
export const GameEnd = styled.div`
position: absolute; top: 65%;
font-size: 2.4rem;
font-family: "sora", sans-serif;
font-weight: 600;
color: #F5F5F5;

  @media (max-width: 680px) {
   
    font-size: 2rem;

  }

  @media (max-width: 490px) {
   
    font-size: 1.4rem;
   
  }

  @media (max-width: 375px) {
    
    font-size: 1.2rem;
   
  }
`;
