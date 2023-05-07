// eslint-disable linebreak-style
import styled, { createGlobalStyle } from 'styled-components/macro';

// Define global styles to be applied to the entire application
export const GlobalRules = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Sora";
  }

  // Set body background styles, including responsive background size
  body {
    background-size: auto;
    background-position: center;
    background-attachment: fixed;
    background: #2C2C2C;
  
    @media (min-width: 1024px) {
      background-size: cover; 
    }
  }

  // Set the main container's position
  main {
    position: relative;
  }
`;

// Define the GameWrapper styled component
export const GameWrapper = styled.div`
  margin: 9vw;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  
  // Style h1 elements
  h1 {
    font-size: 8rem;
    color: #F5F5F5;
    text-shadow: 0px 0px 40px rgba(4, 4, 4, 0.3);
    
    // Responsive font size for h1 elements
    @media (max-width: 480px) {
      font-size: 6rem;
    }
    @media (max-width: 400px) {
      font-size: 5rem;
    }
  }

  // Style form elements
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 30px;
  }

  // Style label elements
  label {
    color: #fff;
    font-size: 1.2rem;
    padding-bottom: 10px;
  }

  // Style the usernameInput component
  #usernameInput {
    padding: 10px 28px;
    width: 155px;
    border-radius: 20px;
    background: #fcfdfc;
    border:none;
    font-size:1.1rem;
    opacity: 0.8;

    // Responsive styles for the usernameInput component
    @media (max-width: 400px) {
      font-size: 0.9rem;
      padding: 10px 20px;
      width: 135px;
      border-radius: 20px;
    }
  }

  // Style the gameEnd component
  #gameEnd {
    font-size:2.4rem;
  }
`;

// Define the LoadingText styled component
export const LoadingText = styled.h2`
  padding-top: 3rem;
  font-size: 8rem;
  color: #F5F5F5;
  font-weight: 700;
  text-shadow: 0px 0px 40px rgba(4, 4, 4, 0.3);
  z-index: 1000;

  // Responsive font size for LoadingText component
  @media (max-width: 680px) {
    font-size: 3rem;
  }

  @media (max-width: 420px) {
    font-size: 2.8rem;
  }

  @media (max-width: 370px) {
    font-size: 2rem;
  }
`;
