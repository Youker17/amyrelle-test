import Loader from '@/components/Layout/Loader';
import { Toaster } from '@/components/ui/toaster';
import { store } from '@/redux/store';
import '@/styles/globals.css';
import { motion } from 'framer-motion';
import { Provider } from 'react-redux';

export default function App({ Component, pageProps,router  }) {
  
  const excludedLinks = ["/","/fr","/es","/de","/it"]
  const isHomePage = excludedLinks.includes(router.pathname);

  return (
    <>
      <Loader />
      <Provider store={store}>
      <motion.div className='' initial={{display:"hidden",opacity:0}} animate={{display:"block", opacity:1}} transition={{delay:5}}>
            <Toaster />
            <Component {...pageProps} />
      </motion.div>
      </Provider>
    </>
  );
  
}
