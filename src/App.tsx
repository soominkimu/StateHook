import React from 'react';
import './App.scss';

import {
  IState,
  TAction,
  TReducer,
  StateProvider
} from './store/state';

import ThemedButton from './ThemedButton';

const reducer: TReducer<IState, TAction> = (state, action) => {
  switch (action.type) {
    case 'changeTheme':
      console.log(action.payload);
      return {
        ...state,
        theme: action.payload
      };
    default:
      return state;
  }
}

function App() {
  const initState = {
    theme: { primary: 'blue' }
  };

  return (
    <div className="App">
      <StateProvider initState={initState} reducer={reducer}>
        <ThemedButton color="red" />
        <ThemedButton color="cyan" />
        <ThemedButton color="magenta" />
      </StateProvider>
    </div>
  );
}

export default App;
