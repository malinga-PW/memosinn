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

const langFlags = {
  'en': '🇬🇧 ',
  'fr': '🇫🇷 ',
  'de': '🇩🇪 ',
  'zh-CN': '🇨🇳 ',
  'ja': '🇯🇵 ',
  'ko': '🇰🇷 ',
  'ru': '🇷🇺 ',
  'ar': '🇦🇪 ',
  'hi': '🇮🇳 ',
  'es': '🇪🇸 ',
  'it': '🇮🇹 ',
  'nl': '🇳🇱 ',
  'pt': '🇵🇹 ',
};

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    window.googleTranslateElementInit = () => {
      new google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'en,fr,de,zh-CN,ja,ko,ru,ar,hi,es,it,nl,pt',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false,
      }, 'google_translate_element');
    };

    const script = document.createElement('script');
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.body.appendChild(script);

    const flagInterval = setInterval(() => {
      const select = document.querySelector('.goog-te-combo');
      if (select) {
        Array.from(select.options).forEach(opt => {
          const flag = langFlags[opt.value];
          if (flag && !opt.text.startsWith(flag)) {
            opt.text = flag + opt.text;
          }
        });
        clearInterval(flagInterval);
      }
    }, 300);

    return () => {
      clearInterval(flagInterval);
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