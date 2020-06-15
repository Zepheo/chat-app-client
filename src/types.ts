import { Action } from "redux";

export interface MessageType {
  user: string,
  text: string,
}

export interface ChatActionType extends Action{
  name?: string,
  message?: MessageType,
  error?: Error,
}

export interface UserState {
  name: string | undefined,
  messages: MessageType[],
  error: Error | undefined,
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

