import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
    title: '',
    github_url: '',
    live_website_url: '',
    feedback: ''
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  // function deleteSolution(id) {
  //   dispatch({
  //     type: 'DELETE_SOLUTION',
  //     payload: id
  //   });
  // }

  function addSolution(solution) {
    dispatch({
      type: 'ADD_SOLUTION',
      payload: solution
    });
  }

  // function updateSolution(solution) {
  //   dispatch({
  //     type: 'UPDATE_SOLUTION',
  //     payload: solution
  //   });
  // }

  return (<GlobalContext.Provider value={{
    solutions: state.solutions,
    // deleteSolution,
    addSolution
  }}>
    {children}
  </GlobalContext.Provider>);
}