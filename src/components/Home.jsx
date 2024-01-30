import Line from '../assets/line.png'
import Frame from '../assets/frame.png'

const Home = () => {
  return (
    <div className='w-full pt-5'>
      <div className='max-w-[1240px] mx-auto p-5 md:flex justify-between items-center'>
        <div className='text-center md:text-left md:w-[60%]'>
          <h1 className='text-text text-3xl sm:text-5xl md:leading-[78.4px] lg:text-[56px]'>Rent a <span className='text-main font-bold'>Place</span> away from <span className='text-main font-bold'>Home</span> in the <span className='text-main font-bold'>Metaverse</span></h1>
          <p className='text-text my-5 mx-5 md:ml-0 md:mr-10 lg:text-[24px]'>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>

          <div className='w-[80%] mx-auto md:ml-0 md:mt-10'>
            <button className='w-[60%] text-[14px] border-solid border-[1px] text-[#A3A3A3] py-[5px] md:py-[13px] rounded-l-md text-left pl-3'>Search for location</button>
            <button className='w-[40%] bg-main text-white py-1 md:py-3 rounded-r-md'>Search</button>
          </div>
        </div>

        <div className='my-10 mx-5'>
          <img src={Frame} alt="Frame" className='w-full' />
        </div>
      </div>

      <div>
        <img src={Line} alt="line" className='w-full' />
      </div>
    </div>
  )
}

export default Home