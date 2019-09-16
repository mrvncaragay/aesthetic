import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  shrink: {
    width: '18.4%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0,
    color: 'black',
    backgroundColor: theme.palette.omegaHotel.background,

    transition: props => theme.transition.main(props.duration),

    '&.animate': {
      opacity: 1,
      backgroundColor: 'white'
    }
  },

  growShrink: {
    width: '18.4%',
    height: '0%',
    zIndex: 101,
    position: 'relative',
    backgroundColor: theme.palette.omegaHotel.background,

    '&.animate': {
      animation: '$growShrink 4s ease-in-out'
    }
  },

  '@keyframes growShrink': {
    '0%': { height: '0%' },
    '15%': { height: '100%' },
    '40%': { height: '100%' },
    '55%': { height: '20.5%' },
    '90%': { height: '0%' },
    '100%': { height: '0%' }
  }
}));
