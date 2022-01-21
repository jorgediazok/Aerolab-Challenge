import '../styles/globals.css';
import 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import 'react-scroll';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ToastContainer position='bottom-left' />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
