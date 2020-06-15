import { ADD_MESSAGE, SET_USER, SET_ERROR, RESET } from './redux/actions/actionTypes';

export interface Message {
  user: string,
  text: string,
}

interface AddMessageAction {
  type: typeof ADD_MESSAGE,
  message: Message  
}

interface SetUserAction {
  type: typeof SET_USER,
  name: string
}

interface SetErrorAction {
  type: typeof SET_ERROR,
  error: Error
}
interface ResetAction {
  type: typeof RESET
}

export type ChatActionType = AddMessageAction | SetUserAction | SetErrorAction | ResetAction

export interface UserState {
  name: string,
  messages: Message[],
  error: Error | string,
}

export enum Error {
  taken = 'Username already in use',
  unavailable = 'Server unavailable',
  inactive = 'You have been disconnected due to inactivity',
  strange = 'Something strange happened and you have lost the connection. Try to rejoin the server'
}

export type UserNameError = {
  error: string
}

