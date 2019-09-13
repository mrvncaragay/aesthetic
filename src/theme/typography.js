import palette from './palette';

export default {
  fontFamily: ['Raleway', 'Helvetica', 'sans-serif'].join(','),

  h1: {
    color: palette.text.primary,
    fontWeight: '400',
    fontSize: '35px',
    letterSpacing: '-1.5px',
    lineHeight: '40px',
    textTransform: 'uppercase'
  },

  h2: {
    color: palette.text.primary,
    fontWeight: '400',
    fontSize: '29px',
    letterSpacing: '-0.5px',
    lineHeight: '32px'
  },

  h3: {
    color: palette.text.primary,
    fontWeight: '400',
    fontSize: '24px',
    letterSpacing: '-1.5px',
    lineHeight: '28px',
    textAlign: 'center',
    textTransform: 'uppercase'
  },

  h4: {
    color: palette.text.primary,
    fontWeight: '600',
    fontSize: '20px',
    letterSpacing: '-0.5px',
    lineHeight: '24px'
  },
  h5: {
    color: palette.text.primary,
    fontWeight: '600',
    fontSize: '16px',
    letterSpacing: '-0.5px',
    lineHeight: '20px',
    textTransform: 'uppercase'
  },
  h6: {
    color: palette.text.primary,
    fontWeight: '500',
    fontSize: '14px',
    letterSpacing: '-0.05px',
    lineHeight: '20px'
  },

  subtitle1: {
    color: palette.text.secondary,
    fontSize: '16px',
    letterSpacing: '-0.50px',
    lineHeight: '25px',
    textTransform: 'uppercase'
  },

  subtitle2: {
    color: palette.text.primary,
    fontSize: '16px',
    letterSpacing: '-0.50px',
    lineHeight: '16px'
  },
  body1: {
    color: palette.text.primary,
    fontSize: '14px',
    letterSpacing: '-0.05px',
    lineHeight: '21px'
  },
  body2: {
    color: palette.text.primary,
    fontSize: '12px',
    letterSpacing: '-0.04px',
    lineHeight: '14px'
  },
  button: {
    color: palette.text.primary,
    fontSize: '14px'
  },
  caption: {
    color: palette.text.secondary,
    fontSize: '12px',
    letterSpacing: '0.3px',
    lineHeight: '16px'
  }
};
