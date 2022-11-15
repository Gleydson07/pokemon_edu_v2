import { styled } from '../../styles';

export const Container = styled('aside', {
  position: 'fixed',
  display: 'flex',
  flexDirection: 'column',
  width: '240px',
  height: '100vh',
  backdropFilter: 'blur(16px)',
  backgroundColor: '$whiteOpacity300',
  boxShadow: 'rgba(0, 0, 0, 0.35) 0px 2px 6px',
});

export const UserInfo = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '8px',
  paddingTop: '32px',
  background: '$gray100',

  '.avatar-container': {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    
    '.avatar-wrapper': {
      borderRadius: '50%',
      height: '74px',
      width: '74px',
      
      '.avatar-image': {
        borderRadius: '50%',
        maxHeight: '74px',
        minHeight: '74px',
        minWidth: 'auto',
        border: '2px solid transparent',
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 2px 6px',
      },
    },
    
    '.avatar-laurels': {
      position: 'fixed',
      left: '50%',
      transform: 'translateX(-50%)',
    },

    '.avatar-medal': {
      marginTop: '-4px',
    },
  },

  '> strong': {
    display: 'block',
    fontFamily: '$Roboto',
    fontSize: '14px',
    color: '$gray700',
    marginTop: '8px',
    width: '100%',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    textAlign: 'center',
  },
});

export const GameInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0 12px',
  margin: '20px',
});

export const LifeStatus = styled('div', {
  marginTop: '2px',
});

export const RankingPosition = styled('div', {
});

export const BlockInfo = styled('div', {
  '& + &': {
    marginTop: '8px',
  },

  '> small': {
    display: 'block',
    textAlign: 'center',
    color: '$gray700',
  },
  
  '> strong': {
    display: 'block',
    textAlign: 'center',
    color: '$gray700',
    fontSize: '20px',

    '> span': {
      fontSize: '14px',
    }
  }
});

export const SignOut = styled('button', {
  position: 'fixed',
  bottom: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '52px',
  border: 'none',
  backgroundColor: '$whiteOpacity300',
  color: '$gray700',
  fontFamily: '$Roboto',
  fontWeight: 500,
  fontSize: '14px',
  cursor: 'pointer',

  '&:hover': {
    transition: 'all 0.2s',
    backgroundColor: '$whiteOpacity400',
  },

  svg: {
    marginLeft: '8px',
  }
});