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
  // useDispatch and useSelector: These are like our magic wand and magic telescope.
  // useSelector is like a magic telescope: Lets us look into the (Redux store) to see current state
  // of our hero's journey, such as location, available moves, and history of hero/user's journey.
  // useDispatch is our magic wand that lets us change these states, just like casting a spell
  // to move the hero, start a new game, or change the game's state in any other way.

  // Function to restart the game
  const restartGame = () => {
    dispatch(labyrinthMango.actions.restartGame())
  }
  // restartGame: When this spell is cast, it uses the magic wand aka. dispatch
  // to start the hero's journey from the beginning.

  // Function to go to the next step
  const goToNextStep = (e) => {
    dispatch(labyrinthMango.actions.setLoading(true));
    dispatch(labyrinthMango.actions.setDirection(e.target.value)) // setDirection working?
    dispatch(continueGame())
  }
  // goToNextStep: This "dispatch spell" directs the hero to move
  // in a chosen direction and continue journey.

  // Return component content
  return (
    // Show the loader if the game is loading
    loading ? (
      <Loader />
    ) : (
      <>
        <GameWrapper>
          <DescriptionWrapper>
            <CoordsImageDisplay
              coordinates={coordinates || '0,0'} />
            {history.length === 0 ? `Welcome, ${name}.` : ''}
            <p>{description}</p>
          </DescriptionWrapper>
          <DirectionWrapper id={moves.length <= 1 ? 'oneMove' : 'twoMoves'}> {/* styling for 1or2 buttons from gamepage.styled */}
            {/* Show buttons for available moves */}
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
          {/* Show a win message if there are no moves left */}
          {moves.length === 0 && (
            <GameEnd>Wohoo! You have made it, {name}!</GameEnd>
          )}
        </GameWrapper>
        {/* Show a restart button */}
        <RestartBtn onClick={restartGame}>Restart</RestartBtn>
        {/* This is defined in the begining of the page */}
      </>
    )
  )
}

// Gamepage component tells the story of a hero's journey through a magical maze.
// It shows the maze, describes each room, directs the hero's moves,
// and restarts the journey when needed.