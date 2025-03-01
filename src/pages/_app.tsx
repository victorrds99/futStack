import type { AppProps } from 'next/app';
import '../../styles/globals.scss';
import 'materialize-css/dist/css/materialize.min.css';
import Header from '../components/Header';
import { Footer } from '../components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
