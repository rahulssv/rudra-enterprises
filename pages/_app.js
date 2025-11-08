import '../styles/globals.css';
import Head from 'next/head';
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // Fix image paths for GitHub Pages basePath
    if (typeof window !== 'undefined' && window.__NEXT_DATA__) {
      const basePath = window.__NEXT_DATA__.assetPrefix || '';
      if (basePath) {
        // Update all img src attributes that start with /images/
        const images = document.querySelectorAll('img[src^="/images/"]');
        images.forEach((img) => {
          const src = img.getAttribute('src');
          if (src && src.startsWith('/images/') && !src.startsWith(basePath)) {
            img.setAttribute('src', basePath + src);
          }
        });
      }
    }
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

