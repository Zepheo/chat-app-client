import {ChatActionType, UserState } from '../../types';

const initialState: UserState = {
  name: undefined,
  messages: [],
  error: undefined,
};

const User = (state = initialState, action: ChatActionType) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        name: action.name
      }
    case 'ADD_MESSAGE':
      return {
        ...state,
        messages: [ ...state.messages, action.message ]
      };
    case 'SET_ERROR':
      return {
        ...initialState,
        error: action.error
      };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

export default User;
