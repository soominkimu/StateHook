/*=============================================================================
 State Management with React Hooks and Context API

 by Soomin K.
 (C) 2020 SPACETIMEQ INC.
 * Credit: https://medium.com/simply/state-management-with-react-hooks-and-context-api-at-10-lines-of-code-baf6be8302c
=============================================================================*/
import React from 'react';

//----------------------------------------------------------------------
// State and Action definition
//----------------------------------------------------------------------
export interface IState {
  theme: { primary: string };
}
export type TAction =
  | { type: 'changeTheme', payload: { primary: string } };
//----------------------------------------------------------------------

//----------------------------------------------------------------------
// State Context: state and dispatch
//----------------------------------------------------------------------
export type TDispatch = (action: TAction) => void;
export type TStateContext = [IState, TDispatch];
export const StateContext = React.createContext<TStateContext | null>(null);

//----------------------------------------------------------------------
// Context Provider: reducer and the initial state should be provided
// const reducer: TReducer<IState, TAction> = (state, action) => {...
//----------------------------------------------------------------------
export type TReducer<S, A> = (prevState: S, action: A) => S;
export const StateProvider = (props: {
  reducer:   TReducer<IState, TAction>,
  initState: IState,
  children:  React.ReactNode
}) => <StateContext.Provider value={React.useReducer(props.reducer, props.initState)}>
    {props.children}
  </StateContext.Provider>;

//----------------------------------------------------------------------
// Context Consumer: custom hook, state and dispath will be accessible
// const [state, dispath] = useStateValue() as TStateContext;
//----------------------------------------------------------------------
export const useStateValue = () => React.useContext(StateContext);
