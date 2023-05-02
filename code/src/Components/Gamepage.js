// Import React and necessary Redux hooks and components
import React from 'react';
import { labyrinthMango, continueGame } from 'Reducers/labyrinth';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from './Loader';
import { CoordsImageDisplay } from './CoordsImageDisplay';
import { GameWrapper } from '../Styles/Globalstyles';
import { DescriptionWrapper, DirectionWrapper, RestartBtn, DirectionBtn, GameEnd } from './Gamepage.styled';

// Create Gamepage component
export const Gamepage = () => {
  // Set up hooks for dispatch and store
  const dispatch = useDispatch()
  const description = useSelector((store) => store.labyrinthMango.description)
  const moves = useSelector((store) => store.labyrinthMango.moves)
  const loading = useSelector((store) => store.labyrinthMango.loading)
  const name = useSelector((store) => store.labyrinthMango.name)
  const history = useSelector((store) => store.labyrinthMango.history);
  const coordinates = useSelector((store) => store.labyrinthMango.coordinates);

  // Function to restart the game
  const restartGame = () => {
    dispatch(labyrinthMango.actions.restartGame())
  }

  // Function to go to the next step
  const goToNextStep = (e) => {
    dispatch(labyrinthMango.actions.setDirection(e.target.value)) // setDirection working?
    dispatch(continueGame())
  }

  // Return component content
  return (
    // Show loader if loading
    loading ? (
      <Loader />
    ) : (
      <>
        <GameWrapper>
          <DescriptionWrapper>
            <CoordsImageDisplay key={coordinates} coordinates={coordinates} />
            {/* Display welcome message if there's no history */}
            {history.length === 0 ? `Welcome, ${name}.` : ''} {/* name comes from the state */}
            <p>{description}</p>
          </DescriptionWrapper>
          <DirectionWrapper id={moves.length <= 1 ? 'oneMove' : 'twoMoves'}> {/* styling for 1or2 buttons from gamepage.styled */}
            {/* Map through moves and display buttons */}
            {moves && moves.map((action) => (
              <div key={action.direction}>
                <DirectionBtn
                  key={action.direction}
                  type="button"
                  id="nextBtn"
                  value={action.direction}
                  onClick={(e) => goToNextStep(e)}>
                  Go {action.direction} {/* the "Go" + the direction from the api
                  will have same styling */}
                </DirectionBtn>
              </div>
            ))}
          </DirectionWrapper>
          {/* Show win message if no moves left */}
          {moves.length === 0 && (
            <GameEnd>Wohoo! You have made it, {name}!</GameEnd>
          )}
        </GameWrapper>
        <RestartBtn onClick={restartGame}>Restart</RestartBtn>
        {/* This is defined in the begining of the page */}
      </>
    )
  )
}