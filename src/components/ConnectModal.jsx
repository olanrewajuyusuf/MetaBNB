import { CgClose } from "react-icons/cg";
import Meta from '../assets/metamask.png'
import Arrow from '../assets/arrow.png'
import Wallet from '../assets/wallet.png'

const ConnectModal = ({modal, setModal}) => {
  return (
    <>
    {modal && <div className="w-full h-[1021px] bg-shade flex justify-center items-center absolute z-50">
      <div className="max-w-[600px] w-[90%] bg-white rounded-[16px]">
        <div className="flex justify-between items-center p-5 border-solid border-b-[1px] border-['#CFD8DC']">
         <h3 className="text-[24px] font-bold text-['#333333']">Connect wallet</h3>
         <CgClose onClick={() => setModal(false)} className="cursor-pointer" />
        </div>
        <div className="p-5">
          <p className="text-['#333333']">Choose your preferred wallet:</p>
          <button className="w-full bg-slate-100 border-solid border-[1px] border-['#CFD8DC'] rounded-md p-3 mt-5 mb-3 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <img src={Meta} alt="metamask" />
              <span className="text-sora font-semibold text-[18px]">MetaMask</span>
            </div>
            <img src={Arrow} alt="arrow" />
          </button>
          <button className="w-full border-solid border-[1px] border-['#CFD8DC'] rounded-md p-3 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <img src={Wallet} alt="wallet" />
              <span className="text-sora font-semibold text-[18px]">WalletConnect</span>
            </div>
            <img src={Arrow} alt="arrow" />
          </button>
        </div>
      </div>
    </div>}
    </>
  )
}

export default ConnectModal