import { appleImg, bagImg, hamburgerImg, searchImg } from '../utils'
import { navLists } from '../constants'

function Navbar() {
    return (
        <header className='w-full h-16 px-6 py-2 max-screen-width'>
            <nav className='w-full h-full flex-between '>
                <img  src={appleImg} width={16} height={16} alt='Apple' />
                <div className="navItems  gap-6 visible max-md:invisible flex-between">
                    {navLists.map(item => {
                        return <div className="navItem opacity-70 hover:opacity-85 cursor-pointer" key={item}>{item}</div>
                    })}
                </div>
                <div className='navIcons flex-between gap-6'>
                    <img src={searchImg} width={16} height={16} alt='Search'
                     />
                    <img src={bagImg} width={16} height={16} alt='bar' />
                    <img className='max-md:flex hidden navMenu' src={hamburgerImg} width={16} height={16} alt='items' />
                    
                </div>
            </nav>
        </header>
    )
}

export default Navbar