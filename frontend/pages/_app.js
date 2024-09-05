import '@/styles/globals.css'
import '@/styles/style.css';
import React, { useEffect, useState } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'

export default function App({ Component, pageProps }) {

  const [loggedin, setloggedin] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setloggedin(true);
    }
  }, []);

  return (

    <>
      <Header loggedin={loggedin} setloggedin={setloggedin} />
      <Component setloggedin={setloggedin} />
      <Footer />
    </>

  )
}
