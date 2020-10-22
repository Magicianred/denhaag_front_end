import Link from "next/link";
import Layout from "../components/Layout";

const about: React.FC = () => ( 
    <section className='about'>
        <header>
            <h1 className='about__title--bg'>What is this site</h1>
            <h2 className='about__title'>About</h2>
        </header>
        <div className='about__description'>
        Are you a tourist, expat or a local looking for fun stuff to do in the Hague? 
        Have you already seen everything and you’d rather want to visit places nearby? 
        <br/>
        Maybe just stay at home. We also have something for everyone!
        </div>
        <div className='tiles__contact'>
            <Link href='/contact' >
                <h3 className='tiles__contact--cta'>&rsaquo; Contact</h3>
            </Link>
        </div>
        <div className='tiles__browse'>
            <Link href='/categories'>
                <h3 className='tiles__browse--cta'>&rsaquo; Browse</h3>
            </Link>
        </div>
    </section>
)

export default about;