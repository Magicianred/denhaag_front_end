import {useEffect, useRef} from 'react';
import type { AppProps , AppContext } from 'next/app'
import '../styles/style.css'
import './index'
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function MyApp({ Component, pageProps }: AppProps) {
  
gsap.registerPlugin(ScrollTrigger);

useEffect(() => {
  let tl = gsap.timeline({scrollTrigger: {
    trigger: '.about__title', 
    end: 'top 50%',
    toggleActions: 'restart none reverse reverse',
    scrub: true
   }})

 tl.to('.rect--light', { 
     rotation: 180, 
     y: 500,  
     duration: 2
 })
 tl.to('.rect--dark', { 
    rotation: 180, 
    y: 140, 
    duration: 2
  })
}); 
  return <Component {...pageProps} />
}
/*   MyApp.getInitialProps = async (appContext: AppContext) => {
    const appProps = await App.getInitialProps(appContext);
    return { ...appProps }
  } */
  
export default MyApp