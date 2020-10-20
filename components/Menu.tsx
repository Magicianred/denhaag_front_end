import Link from 'next/link'
import WeatherForecast from './WeatherForecast';

const Menu: React.FC = () =>{
    return(
    <menu className='menu'>
        <WeatherForecast />
        <Link href="/">
            <a className='menu__item'>Home</a>
        </Link>
        <Link href="/about">
            <a className='menu__item'>About</a>
        </Link>
        <Link href="/search">
            <a className='menu__item'>Search</a>
        </Link>
        <Link href="/random">
            <a className='menu__item'>Random</a>
        </Link>
    </menu>
    )
}
    
    

export default Menu;