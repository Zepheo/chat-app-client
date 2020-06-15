import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../../redux/actions';
import { RootState } from '../../redux/reducers';
import { UserState } from '../../types';
import { TextField, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  joinForm: {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column'
  },
  joinBtn: {
    marginTop: 10,
  },
  joinHeader: {
    fontFamily: 'Roboto',
  },
  joinError: {
    color: 'red',
  }
});


export default function Join(): JSX.Element {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user: UserState = useSelector((state: RootState) => state.User);
  const [ name, setName ] = useState('');

  return (
    <div>
      <h1 className={classes.joinHeader}>
        Welcome to the Chat
      </h1>
      <form
        action="."
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(setUser(name));
        }}
        className={classes.joinForm}
      > 
        <TextField
          id="outlined-basic"
          label="Username..."
          variant="outlined"
          onChange={(e) => setName(e.target.value)}
          autoComplete='off'
          autoFocus={true}
        />
        <br />
        {user.error && <p className={classes.joinError}>{user.error}</p>}
        <Button className={classes.joinBtn} variant="contained" color="primary" type='submit'>
          Join
        </Button>
      </form>
      
    </div>
  );
}