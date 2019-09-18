import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  '@global': {
    '.slide-appear': {
      color: 'white',
      top: '-60px'
    },

    '.slide-appear-active': {
      top: 0,
      transition: 'all 500ms ease-in-out'
    },

    '.slide-enter': {
      color: 'white',
      top: '-60px'
    },

    '.slide-enter-active': {
      top: 0,
      transition: 'all 300ms ease-in-out'
    },

    '.slide-exit': {
      top: 0,
      color: 'white'
    },

    '.slide-exit-active': {
      top: '50px',
      color: 'white',
      transition: 'all 800ms ease-in-out'
    },

    '.slide-exit-done': {
      opacity: 0
    },

    '.fade-appear': {
      opacity: 0,
      zIndex: 1
    },

    '.fade-appear-active': {
      opacity: 1,
      transition: 'opacity 800ms linear'
    },

    '.fade-enter': {
      opacity: '0',
      zIndex: 1
    },

    '.fade-enter-active': {
      opacity: 1,
      transition: 'opacity 500ms linear'
    },

    '.fade-exit': {
      opacity: 1
    },

    '.fade-exit-active': {
      opacity: 0,
      transition: 'opacity 500ms linear'
    },

    '.fade-exit-done': {
      opacity: 0
    },

    '.container': {
      overflow: 'hidden'
    }
  },

  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    backgroundColor: '#146982'
  }
}));

/*

 <div style={{ overflow: 'hidden' }}>
<CSSTransition
  key={`${index}t1`}
  classNames='slide'
  in={enter}
  timeout={1000}
  appear={true}
  onExited={() => {
    setEnter(true);
    setSlogan(texts[index].t1);
  }}
  unmountOnExit
>
  <Typography style={{ position: 'relative' }} variant='h2'>
    {slogan}
  </Typography>
</CSSTransition>
</div>

<div style={{ overflow: 'hidden' }}>
<CSSTransition
  key={`${index}t1`}
  classNames='slide'
  in={enter}
  timeout={1000}
  appear={true}
  onExited={() => {
    setEnter(true);
    setSlogan(texts[index].t1);
  }}
  unmountOnExit
>
  <Typography style={{ position: 'relative' }} variant='h2'>
    {slogan}
  </Typography>
</CSSTransition>
</div> 

*/
