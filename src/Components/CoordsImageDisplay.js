// Import React library for creating the component
// and styled-components for styling it
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { labyrinthMango } from '../Reducers/labyrinth';

// Import the background images for the labyrinth
// Each background corresponds to a specific location in the labyrinth
import background1 from './background1_web.jpg';
import background2 from './background2_web.jpg';
import background3 from './background3_web.jpg';
import background4 from './background7_web.jpg';
import background5 from './background5_web.jpg';
import background6 from './background6_web.jpg';
import background7 from './background4_web.jpg';

// Create a styled-component for the background image
// This defines how the background image will be displayed
// Create a styled-component for the background image
const BackgroundImage = styled.div`
  position: fixed;
  top: 0;
 left: 0;
 width: 100%;
 height: 100%;
 background-size: cover;
 background-position: center;
 background-attachment: fixed;
 z-index: -1;
 @media (min-width: 1024px) {
   background-size: cover;
  }
`;
// This component displays the correct background image based on the current coordinates
// It takes the current coordinates and two optional functions: onImageLoad
export const CoordsImageDisplay = ({ coordinates = '0,0' }) => {
  const currentCoordinates = coordinates;
  const [imageToShow, setImageToShow] = useState(null)
  const dispatch = useDispatch();
  const loading = useSelector((store) => store.labyrinthMango.loading);
  // Choose the correct image based on the current coordinates
  // Depending on where the player is in the labyrinth, we show a different background
  useEffect(() => {
    if (currentCoordinates === '0,0') {
      setImageToShow(background1);
    } else if (currentCoordinates === '1,0') {
      setImageToShow(background2);
    } else if (currentCoordinates === '1,1') {
      setImageToShow(background3);
    } else if (currentCoordinates === '0,1') {
      setImageToShow(background4);
    } else if (currentCoordinates === '0,2') {
      setImageToShow(background5);
    } else if (currentCoordinates === '0,3') {
      setImageToShow(background6);
    } else if (currentCoordinates === '1,3') {
      setImageToShow(background7);
    }
  }, [currentCoordinates])

  // Return the component to render
  return (
    <>
      {/* Set the background image based on the selected image */}
      <BackgroundImage style={loading ? { display: 'none' } : { backgroundImage: `url(${imageToShow})` }} />
      <img
        alt="test"
        style={{ display: 'none' }}
        src={imageToShow}
        onLoad={() => { dispatch(labyrinthMango.actions.setLoading(false)) }} />
    </>
  );
};
