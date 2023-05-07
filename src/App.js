import React from 'react'
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { labyrinthMango } from './Reducers/labyrinth';
import { Firstscreen } from './Components/Firstscreen';
import { GlobalRules } from './Styles/Globalstyles';
// import AppLoader from './AppLoader'; // import AppLoader component

export const App = () => {
  // const [loading, setLoading] = useState(true); // define loading state

  //  useEffect(() => {
  // set a delay of 1 second before setting loading to false
  //    const timer = setTimeout(() => {
  //      setLoading(false);
  //    }, 1000);

  //    return () => clearTimeout(timer); // cleanup function to clear the timer
  //  }, []);

  const reducer = combineReducers({
    labyrinthMango: labyrinthMango.reducer
  });
  const store = configureStore({ reducer })

  return (
    <div>
      <Provider store={store}>
        <GlobalRules />
        <Firstscreen />
      </Provider>
    </div>
  )
}
