import linkedInLogo from '@/assets/linkedIn.svg';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='w-full h-[600px] bg-[#d9d9d9]'>

        <div className='w-full text-center'>
        <h1 className='text-[35px] pt-5 underline font-semibold tracking-normal text-buttonColor'>ORGANIZERS</h1>
        </div>

        <div className='w-full flex justify-center px-20 pt-5 gap-10'>

            <div className='w-[300px] h-[60px] flex items-center justify-center bg-white rounded-2xl shadow-md'>

                <p className='text-[20px] font-medium text-black'>
                    Students
                </p>

            </div>
            <div className='w-[300px] h-[60px] flex items-center justify-center bg-white rounded-2xl shadow-md'>

                <p className='text-[20px] font-medium text-black'>
                    Mentors 
                </p>

            </div>
            <div className='w-[300px] h-[60px] flex items-center justify-center bg-white rounded-2xl shadow-md'>

                <p className='text-[20px] font-medium text-black'>
                    Sponsers
                </p>

            </div>

        </div>

        <div className='w-full h-[403px]'>

        </div>

        <div className='w-full h-[44px] flex items-center gap-4 justify-center bg-buttonColor'>


            <div className='flex items-center'>

                <Link target='_blank' href={"https://www.linkedin.com/in/avibega/"}>
                <Image
                    src={linkedInLogo}
                    alt="linkedInLogo"
                    width={40}
                    height={40}
                />
                </Link>

                <p className='text-[14px] text-white'>Designed By - Avinoor Singh</p>


            </div>
            <div className='flex items-center'>

                <Link target="_blank" href={"https://www.linkedin.com/in/dilpreet-sandhu-b23326309/"}>
                <Image
                    src={linkedInLogo}
                    alt="linkedInLogo"
                    width={40}
                    height={40}
                />
                </Link>

                <p className='text-[14px] text-white'>Developed By - Dilpreet Singh</p>


            </div>

        </div>

      
    </div>
  )
}

export default Footer
