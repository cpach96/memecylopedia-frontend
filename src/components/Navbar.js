import { Link } from 'react-router-dom'



const NavBar = () => (
    <header className='navbar'>
        <Link to={'/'}>
        <div className='navbar__title navbar__item'>Memecyclopedia</div>
        </Link>
        <Link to={'/memes'}>
        <div className='navbar__item'>Memes</div>
        </Link>
        <Link to={'/memes/new'}>
        <div className='navbar__item'>Add a meme!</div>
        </Link>    
    </header>
);

export default NavBar