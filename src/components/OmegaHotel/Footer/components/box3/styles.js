import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  box: {
    height: '100%',
    width: '16.66666%',
    color: 'white'
  },

  title: {
    marginBottom: theme.spacing(1),

    '& h5': {
      position: 'relative'
    }
  },

  t1: {
    top: '10px',
    opacity: 0,
    transition: 'all 600ms cubic-bezier(0.25, 0.45, 0.45, 0.95)',

    '&.animate': {
      opacity: 1,
      top: '0px'
    }
  },

  fab: {
    color: props => props.color || 'white',
    top: '15px',
    opacity: 0,
    boxShadow: 'none',
    backgroundColor: props => props.bgc || theme.palette.omegaHotel.background,
    transition: 'all 600ms cubic-bezier(0.25, 0.45, 0.45, 0.95)',

    '&.MuiFab-root': {
      marginRight: theme.spacing(1)
    },

    '&.animate': {
      top: '0px',
      opacity: 1
    },

    '&:hover': {
      color: 'black'
    }
  }
}));
