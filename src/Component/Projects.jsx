import Line from "./Line";
import project from "../Assets/Json/Project.json";
import { useEffect } from "react";
// import pita from "../Assets/Image/pita.png";
// import localpita from "../Assets/Image/lcoalpita.png";
// import employee from "../Assets/Image/employee.png";
// import task from "../Assets/Image/task.png"
import hsbc from "../Assets/Image/hsbc.jpg";
import growia from "../Assets/Image/growia.jpg";

// react icons
import { SiAxios } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { CiShare1 } from "react-icons/ci";

import ScrollTrigger from "gsap/src/ScrollTrigger";
import gsap from "gsap";

const Projects = () => {

   gsap.registerPlugin(ScrollTrigger);
   useEffect(() => {
      gsap.fromTo(
         ".project",
         {
            opacity: 0,
            y: 40,
         },
         {
            scrollTrigger: {
               trigger: ".project",
               start: "top 70%",
               once: true,
            },
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.inOut",
            stagger : 0.2
         }
      );
   }, []);
   return (
      <>
         <section className="  px-5 lg:px-24 mt-10">
            <div className="w-full flex flex-col justify-center items-center gap-2 lg:gap-6 pb-10 relative ">
               <h1 className="font-semibold text-center text-xl lg:text-2xl xl:text-4xl text-oren -tracking-tight w-full head">
                     Project and <span className='text-primary'>Certificate</span>
                  </h1>
               <Line />
               {/* <img src={task} alt="" className="absolute top-2/4 -right-40 w-[15rem] hidden lg:block z-10"/> */}
            </div>
            <div className="px-0 md:px-10 xl:px-20 flex justify-center items-center gap-4 xl:gap-10 flex-wrap w-full">
               {/* item project */}
               {project.map((value, index) => {
                  return (
                     <div
                        className=" h-auto lg:h-auto w-auto  flex flex-col justify-start items-start gap-2 p-2 shadow-lg  rounded-2xl bg-white group relative border hover:border-primary project overflow-hidden"
                        key={index}
                     >
                        <div className="w-72 h-52 overflow-hidden rounded-2xl relative group">
                           <div className="absolute w-full h-full z-10 px-3 py-1 rounded-2xl border text-gray-300 text-[12px] flex-col justify-center items-center backdrop-blur-sm
                                       hidden 
                                       hover:block 
                                       group-hover:flex
                                       ">
                                          <div className="text-black my-5 font-semibold text-base">{value.name} </div>
                              <div className="bg-white px-4 py-2 rounded-md text-center text-black">
                                 {value.link === "#" ? (
                                    <button className="cursor-not-allowed " onClick={(e)=> e.preventDefault()}>
                                       <a href={value.link} target="blank" >Not Allowed</a>
                                    </button>
                                 ) : (
                                    <a href={value.link} target="blank"  >
                                       <button className="flex justify-center items-center gap-3">
                                          <CiShare1 size={20}/>
                                          <p>View Project</p>
                                    </button>
                                    </a>
                                    
                                 )}
                              </div>
                           </div>
                           <img
                              src={value.image}
                              alt="infidea"
                              className="w-auto h-auto bg-contain group-hover:scale-105 rounded-2xl transition-all duration-200 ease-out shadow-lg brightness-95 "
                           />
                        </div>
                        <div className="w-full hidden xl:flex flex-col justify-start items-start gap-1  p-2">
                           <p className="text-gray-400 text-sm font-light">{value.date} </p>
                           <p className="font-semibold">{value.name} </p>
                           <div className="w-full flex justify-between items-center">
                              {/* stack icons */}
                              <p className="text-blue-500">{value.category} </p>
                              {value.category === "Fullstack" ? 
                              (
                                 <div className="flex justify-start items-center gap-1 text-emerald-400">
                                    <FaReact />
                                    <RiTailwindCssFill />
                                    <SiExpress />
                                    <SiAxios />
                                    <FaNodeJs />
                                    <SiMysql size={25}/>
                                 </div> 
                              ):(
                                 <div className="flex justify-start items-center gap-1 text-emerald-400">
                                    <FaReact />
                                    <RiTailwindCssFill />
                                    <SiAxios />
                                 </div>
                              )
                              }
                           </div>
                        </div>
   
                     </div>
                  );
               })}
            </div>


{/* CERTIFICATE */}
            <div className="flex flex-col justify-center items-center">
               {/* <div className="text-2xl lg:text-3xl font-bold gap-2 flex flex-col justify-start items-start lg:gap-6 pt-16 pb-5"> */}
                  <div className="flex flex-col justify-center items-center lg:text-3xl font-bold gap-2 lg:gap-6 relative pt-16 pb-5 ">
                  <h1 className="font-semibold text-center text-xl lg:text-2xl xl:text-4xl text-oren -tracking-tight w-full head">
                     Certificate
                  </h1>
                  <Line />
               </div>
               <div className="flex flex-wrap justify-center items-center gap-1 lg:gap-4 ">
                  <div className="h-28 w-36 lg:h-72 lg:w-[20rem] relative flex justify-center items-center group">
                     <img
                        src={hsbc}
                        alt=""
                        className="object-contain h-full w-full transition-all duration-200 ease-out hover:scale-105 "
                     />
                  </div>

                  <div className="h-28 w-36 lg:h-72 lg:w-[20rem] relative">
                     <img
                        src={growia}
                        alt=""
                        className="object-contain h-full w-full transition-all duration-200 ease-out hover:scale-105"
                     />
                  </div>
                  <div className="h-28 w-36 lg:h-72 lg:w-[20rem] relative">
                     <img
                        src="https://res.cloudinary.com/dplikeeby/image/upload/v1743292855/certificate_f49bqs.jpg"
                        alt=""
                        className="object-contain h-full w-full transition-all duration-200 ease-out hover:scale-105"
                     />
                  </div>
                  <div className="h-28 w-36 lg:h-72 lg:w-[20rem] relative">
                     <img
                        src="https://res.cloudinary.com/dplikeeby/image/upload/v1748308271/dcoding_bf1f5p.jpg"
                        alt=""
                        className="object-contain h-full w-full transition-all duration-200 ease-out hover:scale-105"
                     />
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default Projects;
