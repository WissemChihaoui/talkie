import React, { createContext, useReducer } from 'react';

const initialState = {
  activeStep: 0,
  formData: {
    step1: {
      name: '',
    },
    step2: {
      // Initial values for Step 2 form fields
    },
    step3: {
      // Initial values for Step 3 form fields
    },
  },
};

// Define the actions for updating the form data and active step
const registrationReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_FORM_DATA':
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.step]: action.formData,
        },
      };
    case 'SET_ACTIVE_STEP':
      return { ...state, activeStep: action.step };
    default:
      return state;
  }
};

export const RegistrationContext = createContext(initialState);

export const RegistrationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(registrationReducer, initialState);

  return (
    <RegistrationContext.Provider value={{ state, dispatch }}>
      {children}
    </RegistrationContext.Provider>
  );
};
