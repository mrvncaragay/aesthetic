import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  root: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  },

  line: {
    cursor: 'pointer',
    margin: theme.spacing(0.6),
    color: 'black',
    padding: '1px',
    width: '5%',
    backgroundColor: 'white',
    transition: 'all 300ms ease-in-out',

    '&:hover': {
      width: '10%'
    },

    '&.active': {
      width: '10%'
    }
  }
}));
