import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import io from 'socket.io-client';
import { RootState } from '../../redux/reducers';
import { addMessage, setError, reset } from '../../redux/actions';
import ChatInput from './ChatInput';
import { Error, UserNameError, Message, UserState } from '../../types';
import { CircularProgress, Button, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ChatMessages from './ChatMessages';

const useStyles = makeStyles({
  chatHeader: {
    fontFamily: 'Roboto'
  },
  hideScroll: {
    height: '100%',
    width: '100%',
    maxWidth: 400,
    overflow: 'hidden',
  },
});


let socket: SocketIOClient.Socket;

export default function Chat(): JSX.Element {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user: UserState = useSelector((state: RootState) => state.User);
  const [ loaded, setloaded ] = useState(false);

  const url = 'salty-earth-56339.herokuapp.com';

  useEffect(() => {
    socket = io(url, {
      'reconnection': false
    });

    socket.emit('join', { name: user.name }, (error: UserNameError) => {
      if (error) {
        dispatch(setError(Error.taken));
        return socket.close();
      }
      setloaded(true);
    });

    socket.on('message', (message: Message) => {
      dispatch(addMessage(message));
    });

    socket.on('disconnect', (reason: string) => {
      if (reason === 'io server disconnect') {
        dispatch(setError(Error.inactive));
        socket.close();
      }
    });

    socket.on('connect_error', () => {
      dispatch(setError(Error.unavailable));
      socket.close();
    });

    socket.on('error', () => {
      dispatch(setError(Error.strange));
      socket.close();
    });

    return () => {
      socket.emit('disconnect');

      socket.close();
    };
  }, [user.name, dispatch]);

  const handleSendMessage = (messageString: string) => {
    socket.emit('userMessage', messageString);
  };

  const handleLeave = () => {
    socket.emit('disconnect');
    socket.close();
    dispatch(reset());
  };

  return (
    loaded ? (
      <div>
        <h1 className={classes.chatHeader}>
          Connected as: {user.name} <Button variant="contained" color='secondary' onClick={handleLeave}>Leave</Button>
        </h1>
        <Paper className={classes.hideScroll}>
          <ChatMessages chatMessages={user.messages} />
          <ChatInput sendMessage={handleSendMessage} />
        </Paper>
      </div>
    ): (
      <CircularProgress />
    )
  );
}
