import { SET_USER, ADD_MESSAGE, RESET, SET_ERROR } from './actionTypes';
import { Message, Error, ChatActionType} from '../../types';

export const setUser = (name: string): ChatActionType => ({
  type: SET_USER,
  name
});

export const addMessage = (message: Message): ChatActionType => ({
  type: ADD_MESSAGE,
  message
});

export const setError = (error: Error): ChatActionType => ({
  type: SET_ERROR,
  error
});

export const reset = (): ChatActionType => ({
  type: RESET
});