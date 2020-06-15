import { SET_USER, ADD_MESSAGE, RESET, SET_ERROR } from './actionTypes'
import { MessageType, Error} from '../../types';

export const setUser = (name: string) => ({
  type: SET_USER,
  name
});

export const addMessage = (message: MessageType) => ({
  type: ADD_MESSAGE,
  message
});

export const setError = (error: Error) => ({
  type: SET_ERROR,
  error
});

export const reset = () => ({
  type: RESET
});