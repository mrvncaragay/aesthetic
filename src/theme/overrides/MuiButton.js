// Palette
import palette from '../palette';

export default {
  root: {
    borderRadius: 'none',
    marginRight: '16px'
  },

  text: {
    textTransform: 'none',
    letterSpacing: '0.8px',
    fontWeight: '500',
    fontSize: '14px',
    lineHeight: '24px',
    color: 'white'
  },

  outlined: {
    backgroundColor: palette.text.primary,
    letterSpacing: '0.15em',
    padding: '10px 32px 10px 32px',
    color: 'white',

    '&:hover': {
      backgroundColor: 'white',
      color: palette.text.primary
    }
  },

  contained: {
    letterSpacing: '0.1em',
    padding: '10px 32px 10px 32px',
    boxShadow: 'none',
    backgroundColor: '#4285F4 !important'
  }
};
