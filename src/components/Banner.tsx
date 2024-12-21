import Image from "next/image";
import headerText from "../assets/Logo.png";
import geeksForGeeksLogo from "../assets/geeksForGeeks.svg";
import gdgLogo from '../assets/gdg.svg';

const Banner = () => {
  return (
    <div className='max-w-full text-white h-screen bg-bannerImage  flex flex-col items-center'>

      <div className="pt-10">

      <Image
        src={headerText}
        alt="header_text"
        width={400}
        height={400}
      />

      </div>

      <div className="pt-8 flex items-center justify-center">
        <p className="text-3xl font-semibold font-outline-2">
          sponsored by:
        </p>
      </div>

      <div className="pt-8 flex items-center justify-center">

        <div className="px-4 flex flex-col gap-2 items-center justify-center py-2">

          <Image
            src={geeksForGeeksLogo}
            alt="geeksForGeeks"
            width={120}
            height={120}
          />

          <p className="text-xl font-medium font-outline-2">GEEKS FOR GEEKS</p>

        </div>
        <div className="px-4 flex flex-col gap-2 items-center justify-center py-2">

          <Image
            src={gdgLogo}
            alt="gdgLogo"
            width={120}
            height={120}
          />

          <p className="text-xl font-medium font-outline-2">GEEKS FOR GEEKS</p>

        </div>

      </div>

      <div className="pt-8 flex flex-col gap-5 items-center justify-center">
        <p className="text-3xl font-bold font-outline-2">
          AT PUNJABI UNIVERSITY,PATIALA
        </p>

        <p className="text-[28px] font-outline-2 font-light">
          SUNDAY, FEBURARY 9,2025
        </p>
        <p className="text-[28px] font-outline-2 font-light">
          10AM - 7PM
        </p>

      </div>

      <div className="py-6 flex items-center justify-center">

        <button className="px-2 py-1 bg-buttonColor hover:border-[2px] hover:border-buttonColor hover:bg-white hover:text-buttonColor transition-all delay-200  w-[150px] rounded-full text-[16px] flex items-center justify-center  h-[50px]">
          Register
        </button>

      </div>


    </div>
  )
}

export default Banner
