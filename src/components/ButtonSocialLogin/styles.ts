import { styled } from '../../styles';


export const Button = styled('button', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '48px',
  minWidth: '252px',
  padding: '8px',
  borderRadius: '4px',
  border: 'none',
  cursor: 'pointer',
  boxShadow: 'rgba(0, 0, 0, 0.35) 0px 3px 10px;',

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
          backgroundColor: '$gray200',
        }
      },
      microsoft: {
        backgroundColor: '$green500',
        color: '$white',
        
        '&:hover': {
          backgroundColor: '$green700',
          color: '$white',
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