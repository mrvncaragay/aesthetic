import palette from './palette';

export default {
  fontFamily: ['Raleway', 'Helvetica', 'sans-serif'].join(','),

  h3: {
    fontWeight: '500',
    fontSize: '16px',
    letterSpacing: '3px',
    textTransform: 'uppercase'
  },

  h4: {
    color: palette.common.white,
    fontWeight: '500',
    fontSize: '14px',
    lineHeight: '24px'
  },

  h5: {
    fontWeight: '400',
    fontSize: '12px',
    color: palette.omegaHotel.main,
    letterSpacing: '1px',
    lineHeight: '28px'
  },

  h6: {
    color: palette.common.white,
    fontWeight: '500',
    fontSize: '14px',
    letterSpacing: '-0.05px',
    lineHeight: '20px'
  },

  subtitle1: {
    color: palette.common.white,
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
