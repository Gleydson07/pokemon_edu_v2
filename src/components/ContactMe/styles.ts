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
    fontSize: '14px',
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
        'p': {
          color: '$gray200',
        },
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
        a: {
          svg: {
            color: '$blue600',
          },

          '&:hover': {
            svg: {
              transition: 'all 0.2s',
              color: '$blue800',
            }
          }
        }
      },
      dark: {
        a: {
          svg: {
            color: '$gray200',
          },

          '&:hover': {
            svg: {
              transition: 'all 0.2s',
              color: '$blue100',
            }
          }
        }
      },
    }
  }
});