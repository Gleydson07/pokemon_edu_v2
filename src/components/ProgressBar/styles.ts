import {keyframes, styled} from '../../styles';

const move = keyframes({
  '0%': {
    backgroundPosition: '0 0',
  },
  '100%': {
    backgroundPosition: '50px 50px',
  },
});

export const Container = styled('div', {
  width: '100%',
  height: 'fit-content',
  background: '$whiteOpacity400',
  backdropFilter: 'blur(16px)',
  borderRadius: '20px',
  padding: '2px',
});

export const Progress = styled('div', {
  position: 'relative',
  height: '10px',
  borderRadius: '50%',
  boxShadow: 'inset 0 -1px 1px rgba(255, 255, 255, 0.3)',

  '> span': {
    position: 'relative',
    display: 'block',
    height: '100%',
    borderRadius: '10px',
    backgroundColor: '$blue400',
    boxShadow: 'inset 0 2px 9px rgba(255, 255, 255, 0.3), inset 0 -2px 6px rgba(0, 0, 0, 0.4)',
    overflow: 'hidden',
  },

  '> span:after, > span > span': {
    content: '""',
    position: 'absolute',
    top: '0',
    left: '0',
    bottom: '0',
    right: '0',
    backgroundImage: `linear-gradient(
      -45deg,
      rgba(255, 255, 255, 0.2) 25%,
      transparent 25%,
      transparent 50%,
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0.2) 75%,
      transparent 75%,
      transparent
    )`,
    zIndex: 1,
    backgroundSize: '50px 50px',
    animation: `${move} 2s linear infinite`,
    bordeTopRightRadius: '8px',
    borderBottomRightRadius: '8px',
    bordeTopLeftRadius: '20px',
    borderBottomLeftRadius: '20px',
    overflow: 'hidden',
  },

  '> span:after': {
    display: 'none',
  },
});
