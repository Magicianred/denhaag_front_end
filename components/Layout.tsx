import * as React from "react";
import Head from 'next/head';
import Menu from "./Menu";
import { motion } from "framer-motion";
import Contact from "../pages/contact";
type Props = {
  title?: string;
  className?: string;
};


const Layout: React.FC<Props> = ({
  children,
  className = "",
  title = 'thehague.fun'
}) => (
    <motion.div 
    exit={{ opacity: 0 }}
    initial="initial"
    animate="animate"
    className={`app-container ${className}`}>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="shortcut icon" type="image/x-icon" href=''/>
    </Head>
    <Menu/>
      <main>
        {children}
      </main>
    <footer>
      <Contact/>
    </footer>
    </motion.div>
  );
  
  export default Layout;