import { housing } from '../data/data'
import Setting from '../assets/setting.png'
import Card from './Card'

const Place = () => {
  const links = [
    "Resturant",
    "Cottage",
    "Castle",
    "fantast city",
    "beach",
    "Carbin",
    "Off-grid",
    "Farm",
  ];

  return (
    <div className='max-w-[1240px] mx-auto px-5 py-20'>
      <div className='md:w-[95%] flex justify-between items-center gap-5 flex-wrap text-["#434343"] mb-10'>
        {links.map((link,ind)=> (
          <p key={ind}>{link}</p>
        ))}
        <button
          className='flex justify-between items-center border-solid border-[1px] border-["#B4B4B4"] p-2 gap-8 rounded-md'
        >
          <span>Location</span>
          <img src={Setting} alt="setting" />
        </button>
      </div>
      
      <Card data={housing} />
    </div>
  )
}

export default Place