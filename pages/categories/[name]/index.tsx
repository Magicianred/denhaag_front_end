import * as React from 'react';
import Layout from '../../../components/Layout';
import {getCategory} from '../../../API/getMethods'
import { GetStaticProps, NextApiResponse, GetStaticPaths } from 'next';
import { Art } from '../../../interfaces'
import { NextRouter, useRouter } from 'next/dist/client/router';

const art: React.FC = (art: object) => {
    let artList: Art[] = Object.keys(art).map((key) => art[key]);
    return (
    <Layout>
        <section className='category'>
        <h1>art</h1>
            {artList.map(instance => 
            <div key={instance.id} className='category__item'>
                <h3 className='category__item--title'>{instance.name}</h3>
              {/*   <p>{instance.description.split(' ').slice(0, 20).join(' ')}...</p> */}
                <button>Details</button>
            </div>)}   
        </section>  
    </Layout>
    )
}

export async function getStaticPaths() {
    return {
      paths: [
        { params: { name: 'art' } },
        { params: { name: 'friends' } },
        { params: { name: 'food' } },
        { params: { name: 'learning' } },
        { params: { name: 'sport' } },
        { params: { name: 'party' } },
        { params: { name: 'travel' } }
      ],
      fallback: true
    };
  }
    

export const getStaticProps: GetStaticProps = async ({params}) => {

    const art: NextApiResponse = await getCategory(params.name)
    
    return {
      props: Object.assign({}, art)
    }
  }

export default art;