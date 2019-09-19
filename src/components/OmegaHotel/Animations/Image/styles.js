import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%',
    top: '0px',
    left: '0px'
  },

  backgroundImage: {
    // Image style
    height: '100%',
    top: '0px',
    position: 'relative',
    backgroundImage: props => `url(${props.url})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  },

  growWidth: {
    width: '0%',
    transition: `all 2500ms cubic-bezier(.09,.55,0,.99)`,

    '&.animate': {
      width: '100%'
    }
  },

  slideDown: {
    top: '0px',
    transition: `all 2500ms cubic-bezier(.09,.55,0,.99)`,

    '&.animate': {
      top: '600px'
    }
  }
}));
