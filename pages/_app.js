import "react-toastify/dist/ReactToastify.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/animate.css'
import '../styles/flaticon.css'
import "../styles/font-awesome.min.css";
import "../styles/themify-icons.css";
import '../styles/sass/style.scss'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../store/index";
import { Provider } from "react-redux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Head from "next/head";
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    window.googleTranslateInit = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement({
          pageLanguage: 'en',
          includedLanguages: 'en,fr,de,zh-CN,ja,ko,ru,ar,hi,es,it,nl,pt',
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        }, 'google_translate_element');
      }
    };

    const script = document.createElement('script');
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateInit';
    script.async = true;
    document.body.appendChild(script);

    const interval = setInterval(() => {
      const nativeSelect = document.querySelector('.goog-te-combo');
      const customSelect = document.getElementById('lang-select');
      if (nativeSelect && customSelect) {
        customSelect.addEventListener('change', function () {
          const val = this.value;
          if (val === 'en') {
            const cookie = document.cookie.split(';').filter(c => c.includes('googtrans'));
            cookie.forEach(c => { document.cookie = c.replace(/^ /, '').replace(/=.*/, '=; expires=Thu, 01 Jan 1970; path=/'); });
            window.location.reload();
          } else {
            nativeSelect.value = val;
            nativeSelect.dispatchEvent(new Event('change'));
          }
        });
        clearInterval(interval);
      }
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <Head>
        <title>Memo's Inn - Hiriketiya Beach Accommodation, Sri Lanka</title>
      </Head>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
          <ToastContainer />
        </PersistGate>
      </Provider>
    </div>

  )
}

export default MyApp
