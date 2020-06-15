import React from 'react'
import { makeStyles, ListItem, ListItemText, Typography } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/reducers'
import { UserState } from '../../types'

const useStyles = makeStyles({
  chatMessage: {
    alignSelf: 'flex-start',
  },
  chatMessageSelf: {
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    alignItems: 'flex-end',
    textAlign: 'end'
  },
  chatMessageName: {

  },
  chatMessageText: {
    margin: 4,
    display: 'inline-flex',
    boxSizing: 'border-box',
    borderRadius: '16px',
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 10,
    paddingRight: 10,
  },
})

export default function ChatMessage({name, message}: {name: string, message: string}) {
  const classes = useStyles();
  const user: UserState = useSelector((state: RootState) => state.User);
  console.log(name, user.name)

  return (
    <ListItem className={name === user.name ? classes.chatMessageSelf : classes.chatMessage}>
      <ListItemText 
        primary={name}
        secondary={
          <div className={classes.chatMessageText} style={{backgroundColor: name === user.name ? '#3f51b5' : '#f50057'}}>
            <Typography style={{color: '#fff'}}>
              {message}
            </Typography>
          </div>
        }
      />
    </ListItem>
  )
}
