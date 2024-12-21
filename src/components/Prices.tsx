import firstPrize from '@/assets/firstPrize.svg';
import secondPrize from '@/assets/secondPrize.svg';
import thirdPrize from '@/assets/thirdPrize.svg';
import Image from 'next/image';

const Prices = () => {
  return (
    <div className="w-full h-[500px] flex flex-col bg-buttonColor">


        <div className="w-full flex pt-4 items-center justify-center">
            <h1 className="text-[40px] font-medium ">PRIZES</h1>
        </div>

        <div className="w-full flex gap-10 justify-center px-10">

            <div className="w-[380px] h-[150px] bg-white rounded-3xl px-4 gap-4 flex shadow-md shadow-blue-900">

                <Image
                    src={firstPrize}
                    alt="first_prize"
                    width={100}
                    height={50}
                />

                <div className='w-full h-full text-[28px] font-bold tracking-tight text-[#040e24] pt-4'>
                    <p >
                        5000 Cash Prize
                    </p>

                    <p className='flex items-center justify-center'>+</p>

                    <p className='mb-5 pl-2'>
                        Certification
                    </p>
                </div>

            </div>
            


            <div className="w-[380px] h-[150px] bg-white rounded-3xl px-4 gap-4 flex shadow-md shadow-red-900">

                <Image
                    src={secondPrize}
                    alt="first_prize"
                    width={100}
                    height={50}
                />

                <div className='w-full h-full text-[28px] font-bold tracking-tight text-[#ad3133] pt-4'>
                    <p >
                        3000 Cash Prize
                    </p>

                    <p className='flex items-center justify-center'>+</p>

                    <p className='mb-5 pl-2'>
                        Certification
                    </p>
                </div>

            </div>
            <div className="w-[380px] h-[150px] bg-white rounded-3xl px-4 gap-4 flex shadow-md shadow-gray-900">

                <Image
                    src={thirdPrize}
                    alt="first_prize"
                    width={100}
                    height={50}
                />

                <div className='w-full h-full text-[28px] text-center font-bold tracking-tight text-black pt-4'>
                    <p >
                        1000 Cash Prize
                    </p>

                    <p className='flex items-center justify-center'>+</p>

                    <p className='mb-5 pl-2'>
                        Certification
                    </p>
                </div>

            </div>

        </div>

        <div className='w-full flex items-center justify-center py-10'>

        <div className="w-[480px] h-[150px] bg-white rounded-3xl px-4 gap-4 flex justify-center  shadow-md shadow-blue-900">

               
                <div className='w-full h-full text-[28px] text-center font-bold tracking-tight text-[#040e24] pt-4'>
                    <p >
                    Participants Will Get  Swags
                    </p>

                    <p className='flex items-center justify-center'>+</p>

                    <p className='mb-5 pl-2'>
                        Certification
                    </p>
                </div>

        </div>
        </div>

        
      
    </div>
  )
}

export default Prices
