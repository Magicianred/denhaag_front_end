import * as React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Waves from '../components/Waves';

const Index: React.FC = () => {
    return (
        <Layout>
            <Header/>
            <div className='waves'>
                <Waves/>
            </div>
        </Layout>
    )
}

export default Index;