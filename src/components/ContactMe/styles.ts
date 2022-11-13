import { styled } from '../../styles';

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignContent: 'center',
  width: '200px',
  height: '70px',
  borderRadius: '4px',
  backdropFilter: 'blur(16px)',
  padding: '8px',
  
  'p': {
    fontFamily: '$Roboto',
    textAlign: 'center',
    fontWeight: 500,
    marginBottom: '8px',
  },

  variants: {
    bg: {
      light: {
        backgroundColor: '$whiteOpacity300',
        'p': {
          color: '$gray700',
        },
      },
      dark: {
        backgroundColor: '$blackOpacity300',
      },
    }
  }
});

export const SocialMediasContainer = styled('div', {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  width: '100%',
  height: '100%',

  variants: {
    bg: {
      light: {
        'a': {
          'svg': {
            fill: '$gray700',
          }
        }
      },
      dark: {
        'a': {
          'svg': {
            fill: '$gray200',
          }
        }
      },
    }
  }
});