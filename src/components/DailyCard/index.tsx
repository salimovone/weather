import React from 'react'
import { Hour } from '../../interfaces';

type Props = {
  data: Hour;
};


const DailyCard = ({data}: Props) => {
  return (
    <div className='text-center glass p-4 inline-block ml-2 mt-2 lg:px-5'>
        <p>{data.time.split(' ')[1]}</p>
        <img src={data.condition.icon} alt="" className='max-[353px]:w-12' />
        <p className='text-xl md:text-2xl'>{data.temp_c}°C</p>
    </div>
  )
}

export default DailyCard