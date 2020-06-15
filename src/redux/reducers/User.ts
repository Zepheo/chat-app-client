import {ChatActionType, UserState } from '../../types';
import { SET_USER, ADD_MESSAGE, SET_ERROR, RESET} from '../actions/actionTypes';

const initialState: UserState = {
  name: '',
  messages: [],
  error: '',
};

const User = (state = initialState, action: ChatActionType): UserState => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        name: action.name,
        error: ''
      };
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [ ...state.messages, action.message ]
      };
    case SET_ERROR:
      return {
        ...initialState,
        error: action.error
      };
    case RESET:
      return initialState;
    default:
      return state;
  }
};

export default User;
