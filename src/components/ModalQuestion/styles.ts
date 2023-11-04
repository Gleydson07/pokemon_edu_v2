import { styled } from '../../styles';

export const Overlay = styled('div', {
  position: 'fixed',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1,
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  boxShadow: 'rgba(0, 0, 0, 0.35) 0px 2px 6px',
  
  variants: {
    showOverlay: {
      true: {
        backgroundColor: '$blackOpacity300',
      },
      false: {
        backgroundColor: 'transparent',
      }    
    }
  }
});

export const Container = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  width: '560px',
  minHeight: '300px',
  maxHeight: '600px',
  borderRadius: '4px',
  padding: '24px',
  backgroundColor: '$white',
  boxShadow: 'rgba(0, 0, 0, 0.35) 0px 2px 6px',
});

export const Title = styled('h1', {
  fontFamily: '$Pokemon',
  fontSize: '32px',
  lineHeight: 1.25,
  marginBottom: '32px',
  width: '100%',
  textAlign: 'center',
  color: '$yellow500',
  textShadow: '4px 0 #3A6BBA, -4px 0 #3A6BBA, 0 4px #3A6BBA, 0 -4px #3A6BBA, 0 6px #3A6BBA, 0 0 #3A6BBA, 0 0 #3A6BBA, 0 0 #3A6BBA;',
});

export const QuestionWrapper = styled('div', {
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '16px',

  'small': {
    width: '60px',
    marginLeft: '8px',
  }
});

export const Question = styled('h3', {
  fontSize: '$lg',
  fontWeight: 'bold',
  color: '$black',
});

export const Options = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  width: '100%',
  marginLeft: '8px',

  'label': {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '8px',

    'input': {
      marginRight: '8px',
    }
  }
});

export const Button = styled('button', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '48px',
  marginTop: '24px',
  borderRadius: '4px',
  backgroundColor: '$yellow500',
  color: '$blue600',
  border: "2px solid $blue600",
  fontSize: '$lg',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  outline: 'none',
  cursor: 'pointer',
  transition: 'all 0.2s ease-in-out',
  
  '&:hover': {
    backgroundColor: '$blue600',
    border: "2px solid $blue200",
    color: "$yellow500",
  },

  '&[disabled]': {
    backgroundColor: '$gray100',
    border: "2px solid $gray100",
    color: "$gray400",
    cursor: 'not-allowed',
  }
});