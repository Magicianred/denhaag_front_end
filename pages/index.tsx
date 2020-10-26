import React, { useRef, useEffect} from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import About from './about';
import Categories from './categories';
import Search from './search';


const Index: React.FC = () => {
    return (
        <Layout>
            <Header/>
            <About/>
            <Search/>
            <Categories/>
        </Layout>
    )
}

export default Index;