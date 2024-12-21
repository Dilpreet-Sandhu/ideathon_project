import { eventSchedule } from '@/lib/utils'
import React from 'react'

const EventSchedule = () => {
  return (
    <div className='w-full bg-darkBg pb-10 min-h-screen flex flex-col'>

        <div className='w-full py-5 flex flex-col items-center justify-center'>
        <h1 className='text-[34px] underline text-buttonColor font-bold'>EVENT SCHEDULE</h1>
            <p className='text-[20px] text-gray-800'>Here is our event schedule</p>
        </div>

        <div className='w-full pt-5 flex flex-col items-center justify-center'>

           {
            eventSchedule.map((item,idx) => (
                <div key={idx} className='border-[2px] border-gray-500 flex gap-4 rounded-lg px-1 w-[560px] h-[100px]'>

                <div className='w-[20%] text-[20px] flex flex-col gap-1 items-center  text-black  h-full'>

                    <p className='pt-4'>{item.time.from}</p>
                    <p>{item.time.to}</p>

                </div>

                <div className='w-[80%] text-black pt-4 flex flex-col  h-full'>

                    <h1 className='text-[20px] font-medium'>{item.title}</h1>

                    <p className='text-wrap text-[12px] font-normal'>{item.description}</p>

                </div>

            </div>
            ))
           }

        </div>

      
    </div>
  )
}

export default EventSchedule
