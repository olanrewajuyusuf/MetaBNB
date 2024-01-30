import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Logo from '../assets/logo2.png'

const Footer = () => {
  return (
    <div id="footer" className="bg-[#1D1D1E] text-white pt-10 pb-5 px-5">
      <div className="max-w-[1240px] mx-auto md:grid grid-cols-4">
        <div className="flex flex-col justify-between items-center md:items-start">
          <img src={Logo} alt="logo" className="w-[150px]"/>
          <div className="flex items-center gap-5 mt-10 md:mt-16 mb-5">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
          </div>
          <p>&copy; 2022 Metabnb</p>
        </div>
        <div className="text-[14px] text-center md:text-start mb-5 font-thin mt-5 md:mt-0 md:ml-20">
          <strong className="text-[16px]">Community</strong>
          <p className="mt-2 md:mt-5">NFT</p>
          <p className="md:mt-2">Tokens</p>
          <p className="md:mt-2">Landlords</p>
          <p className="md:mt-2">Discord</p>
        </div>
        <div className="text-[14px] text-center md:text-start mb-5 font-thin md:ml-10">
          <strong className="text-[16px]">Places</strong>
          <p className="mt-2 md:mt-5">Castle</p>
          <p className="md:mt-2">Farms</p>
          <p className="md:mt-2">Beach</p>
          <p className="md:mt-2">Learn more</p>
        </div>
        <div className="text-[14px] text-center md:text-start font-thin">
          <strong className="text-[16px]">About us</strong>
          <p className="mt-2 md:mt-5">Road map</p>
          <p className="md:mt-2">Creators</p>
          <p className="md:mt-2">Career</p>
          <p className="md:mt-2">Contact us</p>
        </div>
      </div>
    </div>
  )
}

export default Footer