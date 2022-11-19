import {keyframes, styled} from '../../styles';

const wiggle = keyframes({
  '20%': {
    boxShadow: 'inset -5px 0 5px 0 rgba(0,0,0,.4)',
    transform: 'rotate(7deg)',
  },
  '40%': {
    boxShadow: 'inset -11px 0 5px 0 rgba(0,0,0,.4)',
    transform: 'rotate(-14deg)',
  },
  '60%': {
    boxShadow: 'inset -5px 0 5px 0 rgba(0,0,0,.4)',
    transform: 'rotate(4deg)',
  },
  '80%': {
    boxShadow: 'inset -8px 0 5px 0 rgba(0,0,0,.4)',
    transform: 'rotate(-2deg)',
  },
  '100%': {
    boxShadow: 'inset -7px 0 5px 0 rgba(0,0,0,.4)',
    transform: 'rotate(0deg)',
  },
});

const antiWiggle = keyframes({
  '20%': {
    transform: 'translateX(4px) rotate(-7deg)',
  },
  '40%': {
    transform: 'translateX(-8px)  rotate(14deg)',
  },
  '60%': {
    transform: 'translateX(2px)  rotate(-4deg)',
  },
  '80%': {
    transform: 'translateX(-1px)  rotate(2deg)',
  },
  '100%': {
    transform: 'translateX(0px) rotate(0deg)',
  },
});

export const Container = styled('div', {
  position: 'relative',
  width: '150px',
  height: '150px',
  backgroundColor: 'transparent',
});

export const Content = styled('div', {
  position: 'absolute',
  width: '100%',
  height: '100%',
  transformStyle: 'preserve-3d',
  transition: 'all 0.5s ease',
  backgroundColor: 'transparent',

  '&.rotate': {
    transform: 'rotateY(180deg)',
  },
});

export const Front = styled('div', {
  position: 'absolute',
  width: '100%',
  height: '100%',
  transform: 'rotate(10deg)',
  border: '2px solid black',
  borderRadius: '50%',
  backgroundColor: '$white',
  boxShadow: 'inset -10px -10px 0px #e8e3e7',
  overflow: 'hidden',
  cursor: 'pointer',
  backfaceVisibility: 'hidden',

  '*': {
    position: 'absolute',
  },
  
  '.shadow': {
    width: '110%',
    height: '100%',
    bottom: '-2%',
    left: '-2%',
    borderRadius: '50%',
    boxShadow: 'inset 0px -10px 1px #e8e3e7',
    zIndex: '1',
    overflow: 'hidden',
  },
  
  '.sparkle': {
    width: '40px',
    height: '25px',
    background: '$white',
    borderRadius: '30px / 20px',
    zIndex: '1',
    top: '14%',
    left: '8%',
    transform: 'rotate(140deg)',
  },
  
  '.pokeball-inner': {
    height: '100%',
    width: '100%',
    background: 'linear-gradient(red calc(50% - 1px), black calc(50% - 1px) calc(50% + 6px), white calc(50% + 1px))',
  },
  
  '.button': {
    width: '25%',
    height: '25%',
    border: '2px solid black',
    borderRadius: '50%',
    backgroundColor: 'black',
    top: '50%',
    left: '55%',
    transform: 'translate(-50%, -50%)',
  },
  
  '.button-outer': {
    width:' 80%',
    height: '80%',
    border: '2px solid black',
    borderRadius: '50%',
    backgroundColor: 'white',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  
  '.button-inner': {
    width: '75%',
    height: '75%',
    border: '2px solid black',
    borderRadius: '50%',
    backgroundColor: 'white',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  
  '&:hover .button-inner': {
    backgroundColor: 'rgba(255, 0, 0, 0.6)',
  },
  
  '&:hover': {
    transition: 'all 0.2s',
     animation: `${antiWiggle} 1s ease-in-out`,
  },

  '&:hover:after': {
    transition: 'all 0.2s',
    animation: `${wiggle} 1s ease-in-out`,
  },
});

export const Back = styled('div', {
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  backfaceVisibility: 'hidden',
  borderRadius: '50%',
  overflow: 'hidden',
  transform: 'rotateY(180deg)',
  backgroundColor: '$whiteOpacity300',
  backdropFilter: 'blur(16px)',
  
  '.content': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    border: '4px solid rgba(255, 0, 0, 0.6)',
  },
});