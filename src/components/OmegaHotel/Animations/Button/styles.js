import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  fadeInGrow: {
    opacity: 0,
    width: '0%',

    transition: props => theme.transition.main(props.duration),

    '&.animate': {
      opacity: 1,
      width: '100%'
    }
  }
}));
