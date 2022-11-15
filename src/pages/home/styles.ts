import { styled } from '../../styles';

export const Container = styled('section', {
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export const LogoWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '8px 24px',
  marginBottom: '8px',

  'h1': {
    fontFamily: '$Pokemon',
    fontSize: '128px',
    lineHeight: 1.5,
    color: '$yellow500',
    textShadow: '8px 0 #3A6BBA, -8px 0 #3A6BBA, 0 8px #3A6BBA, 0 -8px #3A6BBA, 0 12px #3A6BBA, 0 0 #3A6BBA, 0 0 #3A6BBA, 0 0 #3A6BBA;',
  },
  
  'h4': {
    fontFamily: '$ShadowIntoLight',
    fontWeight: 700,
    fontSize: '32px',
    letterSpacing: 1.2,
    marginTop: '24px',
    color: "$gray200",
    textShadow: '4px -1px 1px #3A6BBA;',
  },
});

export const ContactMeWrapper = styled('div', {
  position: 'fixed',
  bottom: '32px',
});