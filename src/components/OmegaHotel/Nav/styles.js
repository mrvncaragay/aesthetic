import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(6, 12, 6, 12),
    color: 'white'
  },

  title: {
    flex: 1
  },

  list: {
    width: '250px',
    display: 'flex',
    justifyContent: 'space-between'
  },

  button: {
    color: 'white',
    textTransform: 'capitalize',
    marginRight: '0px',

    '& svg': {
      marginLeft: '5px'
    }
  },

  search: {
    transform: 'rotate(90deg) scale(0.5)',
    opacity: 0,
    transition: 'all 1s cubic-bezier(0.25, 0.45, 0.45, 0.95)',

    '&.animateSearch': {
      transform: 'rotate(0) scale(1)',
      opacity: 1
    }
  },

  menu: {
    right: '-15px',
    opacity: 0,
    paddingLeft: 0,
    paddingRight: 0,
    transform: 'scale(0.5)',
    transition: 'all 1s cubic-bezier(0.25, 0.45, 0.45, 0.95)',

    '&.animateMenu': {
      right: '0px',
      opacity: 1,
      transform: 'scale(1)'
    }
  }
}));
