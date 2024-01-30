import { homeHouses } from '../data/data'
import Card from './Card'

const Housing = () => {
  return (
    <div className='p-5'>
      <h2 className='text-center text-3xl lg:text-[48px] font-bold my-10 lg:my-16'>Inspiration for your next adventure</h2>
      <Card data={homeHouses} />
    </div>
  )
}

export default Housing