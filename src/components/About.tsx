import React from "react";

const About = () => {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col">
      <div className="w-full h-full px-10 py-10 flex">
        <div className="w-[80%]  h-full">
          <div className="w-full flex flex-col gap-4 py-5">
            <h1 className="text-buttonColor text-[30px] underline font-bold">
              ABOUT THE EVENT
            </h1>

            <p className="w-[800px] text-[20px] text-[#2e2b2b]">
              The first-ever Ideathon at Punjabi University, Patiala, sponsored
              by GFG x GDG, is a seminar on the intersection of technology and
              business. It aims to connect students with technical or business
              expertise to foster innovation and entrepreneurship on campus.
            </p>
          </div>
          <div className="w-full flex flex-col gap-4 py-5">
            <h1 className="text-buttonColor text-[30px] underline font-bold">
            AT THE IDEATHON,STUDENTS WILL HAVE THE OPPURTUNITY TO:
            </h1>
        
         <div className="flex flex-col gap-5">
            <p className="w-[800px] text-[20px] text-[#2e2b2b]">
           <span className="text-buttonColor"> Match with students with other skills.</span> Students with technical experience can match with more business minded students. Students with a tech idea can match with students who are looking for a team to work with.
            </p>
           

            <p className="w-[800px] text-[20px] text-[#2e2b2b]">
           <span className="text-buttonColor"> Meet with and form a lasting bond with a mentor.</span> Teams will meet with mentors, either UVA business or engineering faculty, or professionals in the industry, about their ideas. Mentors and students will swap information and continue to build their relationship and idea well past the Ideathon.
            </p>
           

            <p className="w-[800px] text-[20px] text-[#2e2b2b]">
           <span className="text-buttonColor">Attend workshops by experts on digital innovation and marketing.</span> Both technical and business-minded students can learn from the workshops from UVA faculty and industry professionals, on what it takes to build a tech startup.
            </p>
           
      

            <p className="w-[800px] text-[20px] text-[#2e2b2b]">
           <span className="text-buttonColor">Pitch their ideas to a Shark Tank-esque board and to their fellow students for feedback and seed money.</span> Students will be able to pitch their ideas in both an expo experiment, as well as to a panel of professionals for feedback and seed money.
            </p>
      
          </div> 


          
          </div>
        </div>

        <div className="w-[20%] h-full">
          <div className="w-full flex flex-col  py-5">
            <h1 className="text-buttonColor text-[30px] underline font-bold">
              WHERE
            </h1>

            <p className="w-[690px] text-[22px] text-[#2e2b2b]">Punjabi University</p>
            <p className="w-[690px] text-[22px] text-[#2e2b2b]">Patiala</p>
          </div>
          <div className="w-full flex flex-col mt-[70px]  py-5">
            <h1 className="text-buttonColor text-[30px] underline font-bold">
              WHEN
            </h1>

            <p className="w-[690px] text-[22px] text-[#2e2b2b]">Feburary 9,2025</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
