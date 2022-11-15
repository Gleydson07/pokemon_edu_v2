
import { styled } from '../../../styles';

export const Container = styled('li', {
  display: 'grid',
  gridTemplateColumns: '30px 40px 115px 50px',
  listStyleType: 'none',
  padding: '2px',
  margin: '2px 0',
  backgroundColor: '$whiteOpacity400',
  overflow: 'hidden',
  color: '$gray700',
  
  '& + &': {
    marginTop: '2px',
  },

  '> small, strong': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  '> small': {
    fontWeight: 500,
  },

  'small:first-child': {
    borderRight: '1px solid',
    borderColor: '$gray400',
  },

  'small:not(:first-child)': {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '0 8px',
    borderRight: '1px solid',
    borderColor: '$gray400',
  },
  
  '> div': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '8px',

    '> img': {
      width: '36px',
      height: '36px',
      borderRadius: '50%',
    },
  },

  '&:hover': {
    transition: 'all 0.2s',
    backgroundColor: '$blue400',
    color: '$gray200',
  },
  
  variants: {
    me: {
      true: {
        backgroundColor: '$yellow500',
      },

      false: {}
    }
  }
});