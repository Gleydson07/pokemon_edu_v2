import NextImage, { ImageProps } from 'next/image';

interface NewImageProps extends ImageProps{
  src: string,
}

export const Image = ({ src, ...props }: NewImageProps) => {
   if(src) {
      return <NextImage src={src} {...props}/>
   }
}