import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  slideRightIcon: {
    left: '-15px',
    opacity: 0,
    transition: props => theme.transition.main(props.duration),

    '&.animate': {
      opacity: 1,
      left: '5px'
    }
  },

  slideUpIcon: {
    top: '15px',
    opacity: 0,
    transition: props => theme.transition.main(props.duration),
    padding: 0,

    '&.animate': {
      opacity: 1,
      top: '0px'
    }
  },

  rotateIcon: {
    transform: 'rotateY(90deg)',
    transition: props => theme.transition.main(props.duration),

    '&.animate': {
      transform: 'rotateY(0deg)'
    }
  }
}));
