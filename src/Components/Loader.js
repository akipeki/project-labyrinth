// Import necessary libraries
import React from 'react';
import { useSelector } from 'react-redux'; // useSelector allows us to extract data from the Redux store state
import { CoordsImageDisplay } from './CoordsImageDisplay'; // This is our custom component that displays the correct background image based on the current coordinates
import { GameWrapper, LoadingText } from '../Styles/Globalstyles'; // These are styled components for the game wrapper and loading text

// Define the Loader component
export const Loader = () => {
  const loading = useSelector((store) => store.labyrinthMango.loading);

  // Get the current game's coordinates from the Redux store
  const coordinates = useSelector((store) => store.labyrinthMango.coordinates);

  return (
    <GameWrapper>
      {/* If the image has loaded, we do not display loading text, else display the loading text */}
      {loading && (<LoadingText>Loading.. </LoadingText>)}
      {/* Here, we are rendering the CoordsImageDisplay component with the current coordinates */}
      {/* If coordinates are not yet set, we pass a default value of '0,0' */}
      <CoordsImageDisplay
        coordinates={coordinates || '0,0'} />
    </GameWrapper>
  );
};

// Finally, our Loader does two main things:

// If the loaded switch is off, it shows "Loading.." message. If it's on, it doesn't show anything.
// It calls upon the CoordsImageDisplay, that finds the right background image for the current room.
// CoordsImageDisplay also tells handleImageLoad when the image is loaded and ready to be shown.