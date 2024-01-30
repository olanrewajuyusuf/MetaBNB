import Frame from '../assets/nftframe.png'

const Nfts = () => {
  return (
    <div id='nft' className='bg-main text-white mt-5 py-10 border-solid border-[1px] border-black'>
      <div className='max-w-[1240px] mx-auto md:flex justify-between items-center'>
        <div className='text-center md:text-left p-5 md:w-[70%]'>
          <h3 className='text-white text-3xl md:text-[48px] font-bold mb-5 md:mb-10'>Metabnb NFTs</h3>
          <p className='lg:text-[18px]'>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>
          <button className='bg-white text-main text-[14px] lg:text-[16px] px-5 py-2 rounded-md mt-10 hover:bg-slate-300'>Learn more</button>
        </div>
        <div className='p-5 w-full'>
          <img src={Frame} alt="frame" className='w-full'/>
        </div>
      </div>
    </div>
  )
}

export default Nfts