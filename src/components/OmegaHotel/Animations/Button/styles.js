import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  root: {
    top: 0,
    opacity: 1,
    overflow: 'hidden',
    position: 'relative'
  },

  fadeInGrow: {
    opacity: 0,
    width: '0%',

    transition: props => theme.transition.main(props.duration),

    '&.animate': {
      opacity: 1,
      width: '100%'
    }
  },

  fadeIn: {
    top: '5%',
    opacity: 0,

    transition: props => theme.transition.main(props.duration),

    '&.animate': {
      opacity: 1,
      top: '0%'
    }
  }
}));
