import * as React from "react";
import Head from 'next/head';
import Menu from "./Menu";

const Layout: React.FC = props => (
    <div className="Layout" >
    <Head>
        <title>What to do in the Hague?</title>
    </Head>
    <Menu/>
      <main className="Content">
        {props.children}
      </main>
    </div>
  );
  
  export default Layout;