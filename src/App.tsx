import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { RootState } from './redux/reducers';
import Join from './components/join/Join';
import Chat from './components/chat/Chat';
import { UserState } from './types';

const useStyles = makeStyles({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'lightgray',
    padding: 30,
    borderRadius: 10,
  },
})

function App() {
  const classes = useStyles();
  const user: UserState = useSelector((state: RootState) => state.User);


  return (
    <Container className={classes.wrapper} maxWidth='sm'>
      { !user.name ? <Join /> : <Chat />}
    </Container>
  );
}

export default App;
