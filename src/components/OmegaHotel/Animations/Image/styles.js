import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%',
    left: '0px',
    top: '0px',
    overflow: 'hidden',
    position: 'absolute'
  },

  backgroundImage: {
    // Image style
    height: '100%',
    top: '0px',
    position: 'relative',
    backgroundImage: props => `url(${props.url})`,
    backgroundPosition: 'center'
  },

  growWidth: {
    width: '0%',
    transition: `all 2500ms cubic-bezier(.09,.55,0,.99)`,

    '&.animate': {
      width: '100%'
    }
  },

  exitSlideDown: {
    top: '0px',
    transition: `all 600ms ease-in-out`,

    '&.animate': {
      top: '600px'
    }
  },

  enterSlideDown: {
    top: '-600px',
    transition: `all 700ms ease-in-out`,

    '&.animate': {
      top: '0px'
    }
  },

  enterSlideRight: {
    left: '-100%',
    transition: `all 700ms ease-in-out`,

    '&.animate': {
      left: '0%'
    }
  },

  exitSlideRight: {
    left: '0%',
    transition: `all 700ms ease-in-out`,

    '&.animate': {
      left: '100%'
    }
  }
}));
