import { styled } from '../../styles';

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignContent: 'center',
  borderRadius: '4px',
  backdropFilter: 'blur(16px)',
  padding: '8px',
  
  '> p': {
    fontFamily: '$Roboto',
    fontSize: '14px',
    textAlign: 'center',
    color: '$gray700',
    fontWeight: 700,
    marginBottom: '8px',
  },
  
  '> strong': {
    fontFamily: '$Roboto',
    fontSize: '12px',
    fontWeight: 400,
    textAlign: 'center',

    '> a': {
      fontWeight: 500,

      '&:hover': {
        transition: 'all 0.2s',
      }
    }
  },

  variants: {
    bg: {
      light: {
        backgroundColor: '$whiteOpacity300',

        '> p': {
          color: '$gray700',
        },

        '> strong': {
          color: '$gray700',
      
          '> a': {
            color: '$blue600',
      
            '&:hover': {
              color: '$blue800',
            }
          }
        },
      },

      dark: {
        backgroundColor: '$blackOpacity300',

        '> p': {
          color: '$gray200',
        },

        '> strong': {
          color: '$gray200',
      
          '> a': {
            color: '$blue200',
      
            '&:hover': {
              color: '$blue300',
            }
          }
        },
      },
    }
  }
});

export const SocialMediasContainer = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  marginBottom: '4px',

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