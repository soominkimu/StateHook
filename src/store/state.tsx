/*=============================================================================
 State Management with React Hooks and Context API

 by Soomin K.
 (C) 2020 SPACETIMEQ INC.
 * Credit: https://medium.com/simply/state-management-with-react-hooks-and-context-api-at-10-lines-of-code-baf6be8302c
=============================================================================*/
import React from 'react';

export interface IState {
  theme: { primary: string };
}

export type TAction =
  | { type: 'changeTheme', payload: { primary: string } };

export type TReducer<S, A> = (prevState: S, action: A) => S;
export type TDispatch = (action: TAction) => void;
export type TStateContext = [IState, TDispatch];
export const StateContext = React.createContext<TStateContext | null>(null);

export const StateProvider = (props: {
  reducer:   TReducer<IState, TAction>,
  initState: IState,
  children:  React.ReactNode
}) => <StateContext.Provider value={React.useReducer(props.reducer, props.initState)}>
    {props.children}
  </StateContext.Provider>;

export const useStateValue = () => React.useContext(StateContext);  // custom hook
