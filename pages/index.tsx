import * as React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Squares from '../components/Squares';
import About from './about';
import Categories from './categories';
import Search from './search';

const Index: React.FC = () => {
    return (
        <Layout>
            <Header/>
            <About/>
            <Squares/>
            <Search/>
            <Categories/>
        </Layout>
    )
}

export default Index;