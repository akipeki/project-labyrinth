import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { labyrinthMango, startGame } from '../Reducers/labyrinth';
import { GameWrapper } from '../Styles/Globalstyles';
import { StartBtn } from './Gamepage.styled';
import { CoordsImageDisplay } from './CoordsImageDisplay';

export const Startpage = () => {
  const dispatch = useDispatch()
  const [input, setInput] = useState('')

  const letsStart = (e) => {
    e.preventDefault();
    dispatch(labyrinthMango.actions.setUserName(input));
    dispatch(startGame());
  }

  return (
    <GameWrapper>
      <CoordsImageDisplay coordinates="0,0" />
      <h1>ROAD</h1>
      <form onSubmit={letsStart}>
        <input
          type="text"
          alt="input"
          id="usernameInput"
          placeholder="Username"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          required />
        <StartBtn type="submit" onClick={letsStart}>Start</StartBtn>
      </form>
    </GameWrapper>
  )
};