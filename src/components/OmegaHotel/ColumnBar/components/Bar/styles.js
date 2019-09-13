import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  root: {
    width: '16.6666%',
    backgroundColor: theme.palette.omegaHotel.background,
    animation: '$grow',
    animationDuration: props => `${props.duration}ms`,
    animationTimingFunction: 'cubic-bezier(1, 0, .6, 1)',
    animationIterationCount: 2,
    animationDirection: 'alternate'
  },

  '@keyframes grow': {
    '0%': {
      height: '0%'
    },

    '70%, 100%': {
      height: '100%'
    }
  },

  hga: {
    height: props => console.log(props.height)
  }
}));
