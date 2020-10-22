import * as React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Waves from '../components/Waves';
import Squares from '../components/Squares';

const Index: React.FC = () => {
    return (
        <Layout>
            <Header/>
            <div className='squares'>
                <Squares/>
            </div>
        </Layout>
    )
}

export default Index;