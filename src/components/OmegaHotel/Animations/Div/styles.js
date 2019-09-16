import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  shrink: {
    position: 'relative',
    zIndex: 101,
    // width: '18.66666%',
    top: '-245px',
    height: '390px',
    display: 'flex',
    width: '18.4%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0,
    color: 'black',
    backgroundColor: 'white',

    transition: props => theme.transition.main(props.duration),

    '&.animate': {
      height: '100%',
      // width: '18.4%',
      top: '0px',
      opacity: 1
    }
  }
}));
