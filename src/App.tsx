import React from 'react';
import './App.scss';

import {
  IState,
  TAction,
  TStateContext,
  TReducer,
  StateProvider,
  useStateValue
} from './store/state';

const ThemedButton = () => {
  const [{ theme }, dispatch] = useStateValue() as TStateContext;

  return (
    <button
      type="button"
      style={{color: theme.primary}}
      onClick={() => dispatch({
        type: 'changeTheme',
        payload: { primary: 'red' }
      })}
    >
      Make me red!
    </button>
  );
}

function App() {
  const initState = {
    theme: { primary: 'blue' }
  };

  const reducer: TReducer<IState, TAction> = (state, action) => {
    switch (action.type) {
      case 'changeTheme':
        console.log(state);
        return {
          ...state,
          theme: action.payload
        };
      default:
        return state;
    }
  }

  return (
    <div className="App">
      <StateProvider initState={initState} reducer={reducer}>
        <ThemedButton />
      </StateProvider>
    </div>
  );
}

export default App;
