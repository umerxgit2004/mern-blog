import { Navbar, TextInput, Button } from 'flowbite-react';
import {AiOutlineSearch} from 'react-icons/ai'
import { FaMoon } from 'react-icons/fa';
import {Link} from 'react-router-dom';


function Header() {
  return (
    <Navbar className='border-b-2'>
        <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white '>MyMedia</span>
            Blog
        </Link>
        <form >
            <TextInput type='text' placeholder='Search..'
            rightIcon={AiOutlineSearch}
            className='hidden lg:inline'/>
        </form>
        <Button className="w-12 h-10 lg:hidden" color="gray" pill>
            <AiOutlineSearch/>
        </Button>
        <div className="">
            <Button className='w-12 h-10 hidden sm:inline' color='gray' pill>
                <FaMoon/>
            </Button>
            <Link to="/sign">

            </Link>
        </div>

    </Navbar>
  )
}

export default Header