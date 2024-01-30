import Star from '../assets/star.png'

const Card = ({data}) => {
  return (
    <div className='max-w-[1240px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
        {data.map((house, ind) => (
          <div key={ind} className='p-5 border-solid border-[1px] rounded-[15px]'>
            <img src={house} alt="House" className='w-full'/>
            <div className='text-[12px] flex justify-between items-start mt-3'>
              <div>
                <p>Desert King</p>
                <p className='mt-2'>2345km away</p>
                <div className='flex gap-2 mt-2'>
                  <img src={Star} alt="star" />
                  <img src={Star} alt="star" />
                  <img src={Star} alt="star" />
                  <img src={Star} alt="star" />
                  <img src={Star} alt="star" />
                </div>
              </div>
              <div className='text-right'>
                <strong>1MBT per night</strong>
                <p className='mt-2'>available for 2weeks stay</p>
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}

export default Card