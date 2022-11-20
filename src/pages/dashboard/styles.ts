import { styled } from '../../styles';

export const Container = styled('section', {
  display: 'flex',
  justifyContent: 'space-between',
  height: '100vh',
  maxWidth: '1240px',
  margin: '0 auto',
  padding: '0 16px',
});

export const Board = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: 'calc(100% - 256px)',
  overflow: 'hidden',
});

export const Header = styled('header', {
  boxSizing: 'border-box',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const LogoWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '8px 24px',

  'h1': {
    fontFamily: '$Pokemon',
    fontSize: '64px',
    lineHeight: 1.5,
    color: '$yellow500',
    textShadow: '8px 0 #3A6BBA, -8px 0 #3A6BBA, 0 8px #3A6BBA, 0 -8px #3A6BBA, 0 12px #3A6BBA, 0 0 #3A6BBA, 0 0 #3A6BBA, 0 0 #3A6BBA;',
  },
  
  'h4': {
    fontFamily: '$ShadowIntoLight',
    fontWeight: 700,
    fontSize: '24px',
    letterSpacing: 1.2,
    marginTop: '12px',
    color: "$gray200",
    textShadow: '4px -1px 1px #3A6BBA;',
  },
});

export const TitlesContainer = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
});

export const Level = styled('div', {
  fontFamily: '$ShadowIntoLight',
  fontSize: '14px',
  fontWeight: 700,
  lineHeight: 1.1,
  color: '$gray700',

  strong: {
    fontSize: '20px',
  },
});

export const ProgressContainer = styled('div', {
  width: '100%',
  padding: '0 24px',
});