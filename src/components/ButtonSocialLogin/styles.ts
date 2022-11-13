import { styled } from '../../styles';


export const Button = styled('button', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '48px',
  minWidth: '200px',
  padding: '8px',
  borderRadius: '4px',
  border: 'none',
  cursor: 'pointer',

  '&:hover': {
    transition: 'all 0.2s',
  },

  '> small': {
    marginRight: '12px',
  },

  '> strong': {
    fontFamily: '$Roboto',
    fontWeight: 700,
  },

  '& + &': {
    marginTop: '8px',
  },

  variants: {
    loginType: {
      google: {
        backgroundColor: '$blue400',
        color: '$white',

        '&:hover': {
          backgroundColor: '$blue600',
        }
      },
      apple: {
        backgroundColor: '$white',
        color: '$black',
        
        '&:hover': {
          backgroundColor: '$gray100',
        }
      },
      microsoft: {
        backgroundColor: '$white',
        color: '$blue600',
        
        '&:hover': {
          backgroundColor: '$gray100',
          color: '$blue800',
        }
      },
      anonymous: {
        backgroundColor: '$black',
        color: '$gray100',

        '&:hover': {
          backgroundColor: '$gray900',
          color: '$white',
        }
      },
    }
  }
});