import Link from 'next/link'

const handleScroll = () => {
    document.getElementById('about').scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'}
    )
}

const Menu: React.FC = () =>{
    return(
    <menu className='menu'>
        <Link href="/">
            <a className='menu__logo'onClick={handleScroll}>thehague.fun</a>
        </Link>
        <Link href="#about">
            <a className='menu__item' onClick={handleScroll}>About</a>
        </Link>
        <Link href="#search">
            <a className='menu__item'onClick={handleScroll}>Search</a>
        </Link>
        <Link href="#contact">
            <a className='menu__item'onClick={handleScroll}>Contact</a>
        </Link>
    </menu>
    )
}
    
    

export default Menu;