import Link from "next/link";
import Layout from "../components/Layout";

const about: React.FC = () => ( 
    <section id='about' className='about'>
        <div className='about__container'>
        <header>
            <h1 className='about__title--bg'>What is this site</h1>
            <h2 className='about__title'>About</h2>
        </header>
        <div className='about__description'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed vel tenetur id nesciunt laudantium dolor cumque, illum repudiandae laborum architecto aliquid? Nam ullam odio deleniti veniam, repellendus itaque eveniet quasi culpa impedit! Qui dolorem alias magnam? Eius atque minus eveniet, odio repudiandae voluptatem modi adipisci maxime laborum sint ipsum minima quaerat deserunt natus labore asperiores. Odio doloribus voluptatem nobis architecto!
        </div>
        </div>
        <div className='tiles__contact'>
            <Link href='/contact' >
                <h3 className='tiles__contact--cta'>&rsaquo; Contact</h3>
            </Link>
        </div>
        <div className='tiles__browse'>
            <Link href='#categories'>
                <h3 className='tiles__browse--cta'>&rsaquo; Browse</h3>
            </Link>
        </div>
    </section>
)

export default about;