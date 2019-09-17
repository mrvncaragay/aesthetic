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

    width: '15%',
    backgroundColor: 'white',
    transition: 'width 500ms ease-in-out',

    '&:hover': {
      width: '30%'
    }
  }
}));
