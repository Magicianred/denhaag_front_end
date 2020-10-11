import * as React from "react";
import Head from 'next/head';
import Menu from "./Menu";
import Waves from "./Waves";

const Layout = props => (
    <div className="Layout" >
    <Head>
        <title>What to do in the Hague?</title>
    </Head>
    <Menu/>
      <div className="Content">
        {props.children}
      </div>
      <div className='waves'>
        <Waves/>
      </div>
    
    </div>
  );
  
  export default Layout;