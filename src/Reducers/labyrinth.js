// Import necessary libraries
import { createSlice } from '@reduxjs/toolkit'; // This is like a magic tool for creating a piece of our game's memory (or state)
import { v4 as uuidv4 } from 'uuid'; // This generates a unique ID, like a special name for each player

// Set initial state for the store
const initialState = {
  // These are all the details we need to remember about our game at the start
  userName: '', // The player's name
  name: '', // Another field for the player's name
  description: '', // A description of the player's current location
  direction: '', // The direction the player last moved
  moves: '', // The moves the player can make next
  history: [], // A record of all the moves the player has made
  loading: false, // Whether the game is currently busy doing something
  coordinates: '' // The player's current location in the game world
};

// Create Redux slice
export const labyrinthMango = createSlice({
  name: 'labyrinthMango', // This is the name of our slice of the game's memory
  initialState, // We start with our initial state
  reducers: { // These are all the ways we can change the game's memory
    setUserName: (store, action) => { // This spell changes the player's name
      const input = action.payload; // The new name is the "payload" of the action
      const userId = uuidv4(input); // We create a unique ID for the player
      store.userName = userId; // We store the unique ID as the user's name
      store.name = input; // We also store the input as the player's name
    },
    // The rest of these "spells" change other parts of the game's memory
    setDescription: (store, action) => { // Changes the description of the player's current location
      store.description = action.payload; // We set the description to the "payload" of the action
    },
    setMoves: (store, action) => { // This changes the moves the player can make
      store.moves = action.payload; // We set the moves to the "payload" of the action
    },
    setDirection: (store, action) => { // Changes direction user last moved +updates users's history
      store.direction = action.payload; // We set the direction to the "payload" of the action
      store.history = [...store.history, store.direction]; // We add the direction to user's history
    },
    setLoading: (store, action) => { // This changes whether the game is busy
      store.loading = action.payload; // We set the loading state to the "payload" of the action
    },
    setCoordinates: (store, action) => { // This changes the player's location in the game world
      store.coordinates = action.payload; // We set the coordinates to the "payload" of the action
    },
    restartGame: () => { // This resets the game
      return initialState; // We return the game's memory to the initial state
    }
  }
});

export const startGame = () => {
  return async (dispatch, getState) => {
    dispatch(labyrinthMango.actions.setLoading(true));

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: getState().labyrinthMango.userName })
    };

    try {
      const response = await fetch('https://labyrinth.technigo.io/start', options);
      const json = await response.json();

      dispatch(labyrinthMango.actions.setDescription(json.description));
      dispatch(labyrinthMango.actions.setMoves(json.actions));
      dispatch(labyrinthMango.actions.setCoordinates(json.coordinates));
    } catch (error) {
      console.error('Error starting the game:', error);
    } finally {
      dispatch(labyrinthMango.actions.setLoading(false));
      if (!getState().labyrinthMango.coordinates) {
        dispatch(labyrinthMango.actions.setCoordinates('0,0')); // Set initial coordinates to '0,0' if not already set
      }
    }
  };
};

export const continueGame = () => {
  return async (dispatch, getState) => {
    dispatch(labyrinthMango.actions.setLoading(true));

    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        username: getState().labyrinthMango.userName,
        type: 'move',
        direction: getState().labyrinthMango.direction
      })
    };

    try {
      const response = await fetch('https://labyrinth.technigo.io/action', options);
      const json = await response.json();

      dispatch(labyrinthMango.actions.setDescription(json.description));
      dispatch(labyrinthMango.actions.setMoves(json.actions));
      dispatch(labyrinthMango.actions.setCoordinates(json.coordinates));
      dispatch(labyrinthMango.actions.setDirection(json.actions.direction));
    } catch (error) {
      console.error('Error continuing the game:', error);
    } finally {
      dispatch(labyrinthMango.actions.setLoading(false));
    }
  };
};

