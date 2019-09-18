import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  slideUp: {
    top: '15px',
    opacity: 0,
    transition: props => theme.transition.main(props.duration),

    '&.animate': {
      opacity: 1,
      top: '0px'
    }
  },

  slideDown: {
    top: props => `-${props.top}px`,
    transition: props => theme.transition.main(props.duration),

    '&.animate': {
      top: '0px'
    }
  },

  exitSlideDown: {
    top: 0,
    transition: props => theme.transition.leave(props.leave),

    '&.animate': {
      top: props => `${props.top}px`
    }
  },

  container: {
    overflow: 'hidden',
    display: props => props.display,

    '& h1, h2, h3, h4, h5, h6': {
      position: 'relative'
    }
  }
}));
