import * as React from 'react';
import Layout from '../../../components/Layout';
import { NextRouter, useRouter } from 'next/dist/client/router';

const details: React.FC = (art: object) => {
    const router: NextRouter = useRouter()
    return (
    <Layout>
        <h1>details page: {router.query.name} {router.query.subname}</h1>
    </Layout>
    )
}

export default details;