import React from 'react';
import { useSelector } from 'react-redux';
import { Startpage } from './Startpage';
import { Gamepage } from './Gamepage';
import { GameWrapper } from '../Styles/Globalstyles';

export const Firstscreen = () => {
  const userName = useSelector((store) => store.labyrinthMango.userName)
  return (
    <GameWrapper>
      {userName === '' ? <Startpage /> : <Gamepage />}  {/* Ternary Operator */}
    </GameWrapper>
  )
};