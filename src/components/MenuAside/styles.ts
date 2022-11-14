import { styled } from '../../styles';

export const Container = styled('aside', {
  display: 'flex',
  flexDirection: 'column',
  width: '220px',
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
  marginTop: '36px',
  padding: '0 12px',

  '> img': {
    borderRadius: '50%',
    height: '74px',
    width: '74px',
    border: '2px solid transparent',
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 2px 6px',
  },

  '> strong': {
    display: 'block',
    fontFamily: '$Roboto',
    fontSize: '14px',
    color: '$gray700',
    marginTop: '12px',
    width: '100%',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    textAlign: 'center',
  }
});

export const GameInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0 12px',
});

export const LifeStatus = styled('div', {
});

export const RankingPosition = styled('div', {
  marginTop: '12px',
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