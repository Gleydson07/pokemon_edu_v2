import { Html, Head, Main, NextScript } from 'next/document';
import { getCssText } from '../styles';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet"/>
        <link href="https://fonts.cdnfonts.com/css/pokemon-solid" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto&family=Shadows+Into+Light&display=swap" rel="stylesheet"/>
        <link rel="shortcut icon" href="./favicon.png" type="image/png"/>
        <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
      </Head>
      <body>
        <Main/>
        <NextScript/>
      </body>
    </Html>
  )
}