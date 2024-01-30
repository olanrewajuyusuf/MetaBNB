import { useState } from 'react';
import Logo from '../assets/logo.png';
import { NavLink } from 'react-router-dom';
import { HiMenuAlt3 } from "react-icons/hi";
import { CgClose } from "react-icons/cg";

const Navbar = ({setModal}) => {
  const [nav, setNav] = useState(true);

  return (
    <nav className='max-w-[1240px] h-12 mx-auto relative flex justify-between items-center p-5 md:py-16'>
      <div>
        <img src={Logo} alt="Logo" className='w-[150px] lg:w-[200px]' />
      </div>

      <div onClick={() => setNav(!nav)} className=' text-[20px] cursor-pointer md:hidden'>
        {!nav ? <CgClose /> : <HiMenuAlt3 />}
      </div>

      {/* ======MOBILE NAV======= */}  
      <div className={!nav ? 'absolute top-0 left-0 w-[70%] h-[100vh] bg-white p-5 pt-3 border-solid border-r-[1px] ease-in-out duration-500 md:hidden': 'absolute left-[-100%]'}>
        <div>
          <img src={Logo} alt="Logo" className='w-[150px] mb-12' />
        </div>
        <div className='flex flex-col gap-8 mb-5'>
          <NavLink to='/' className=' text-text hover:text-rose-500 border-solid border-b-[1px]'>Home</NavLink>
          <NavLink to='/place' className=' text-text hover:text-rose-500 border-solid border-b-[1px]'>Place to stay</NavLink>
          <NavLink to='/nft' className=' text-text hover:text-rose-500 border-solid border-b-[1px]'>NFTs</NavLink>
          <NavLink to='/footer' className=' text-text hover:text-rose-500 border-solid border-b-[1px]'>Community</NavLink>
        </div>

        <div className='flex justify-center mt-10'>
          <button 
            onClick={()=> setModal(true)}
            className='py-3 px-5 bg-main hover:bg-rose-500 text-white rounded-[10px]'
          >
            Connect Wallet
          </button>
        </div>
      </div>
      
      {/* ======DESKTOP AND TABLET NAV======= */}       
      <div className='hidden md:flex justify-center items-center lg:text-[20px] gap-5 lg:gap-8'>
        <NavLink to='/' className=' text-text hover:text-rose-500'>Home</NavLink>
        <NavLink to='/place' className=' text-text hover:text-rose-500'>Place to stay</NavLink>
        <NavLink to='/nft' className=' text-text hover:text-rose-500'>NFTs</NavLink>
        <NavLink to='/footer' className=' text-text hover:text-rose-500'>Community</NavLink>
      </div>

      <button 
        onClick={()=> setModal(true)}
        className='hidden md:block py-3 px-5 bg-main hover:bg-rose-500 text-white rounded-[10px]'
      >
        Connect Wallet
      </button>
    </nav>
  )
}

export default Navbar