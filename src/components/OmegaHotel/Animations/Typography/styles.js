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
  }
}));
