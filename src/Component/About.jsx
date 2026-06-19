import { useEffect, useState } from 'react'
import Line from './Line'

// icons
import { SiMysql, SiHtml5, SiTailwindcss ,SiExpress } from "react-icons/si";
import { FaFacebookF, FaInstagram, FaGithub, FaLinkedinIn, FaCss3, FaReact, FaNodeJs,FaGitAlt , FaFigma  } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { GoDownload } from "react-icons/go";

import pattern from "../Assets/Image/watercolor.png"
import gsap from 'gsap'
import ScrollTrigger from 'gsap/src/ScrollTrigger';

const About = () => {
   gsap.registerPlugin(ScrollTrigger);
   const [size, setSize] = useState(0)

   const getSize = ()=>{
      if(window.innerWidth <= 768 ){
         setSize(12)
      }
      else if(window.innerWidth <= 1024){
         setSize(14)
      }else{
         setSize(18)
      }
   }
   useEffect(()=>{
      getSize()
   }, [])

   useEffect(() => {
      gsap.fromTo(
         ".head",
         {
            opacity: 0,
            y: -60,
         },
         {
            scrollTrigger: {
               trigger: ".aboutbox",
               start: "top 90%",
               once: true,
            },
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "sine.out",
            once : false
         }
      );
      gsap.fromTo(
         ".aboutbox",
         {
            opacity: 0,
            x: -40,
         },
         {
            scrollTrigger: {
               trigger: ".aboutbox",
               start: "top 90%",
               once: true,
            },
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "sine.out",
            stagger:0.2
         }
      );
      gsap.fromTo(
         ".aboutbox2",
         {
            opacity: 0,
            x: 40,
         },
         {
            scrollTrigger: {
               trigger: ".aboutbox",
               start: "top 80%",
               once: true,
            },
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "sine.out",
         }
      );
   }, []);
   return (
      <>
         <div className="px-7 lg:px-36">
            <div className="flex flex-col justify-center items-center gap-2 lg:gap-6 relative ">
                  <h1 className="font-semibold text-center text-xl lg:text-2xl xl:text-4xl text-oren -tracking-tight w-full head">
                     Meet the <span className='text-primary'>Developer</span>
                  </h1>
               <Line />
               <img src={pattern} alt="" className='w-[60rem] absolute top-1/2 right-1/2 transform translate-x-1/2 opacity-15 blur-sm' />
            </div>
            <div className="lg:px-[15%] flex flex-wrap justify-between items-start gap-20 py-5 relative overflow-hidden">
               {/* letakkan gambar disini ya guys */}
               {/* <div className="w-[15rem] h-[25rem] lg:w-[25rem] lg:h-auto aboutbox hidden xl:block absolute right-0 opacity-45">
                  <img
                     src='freprogram.webp'
                     className="rounded-xl w-full h-auto object-cover" alt="frengky"
                  />
               </div> */}
               <div className="flex flex-col justify-start items-start gap-8  xl:w-[30rem] 2xl:w-[55rem] text-black">
                  <div>
                        <h1 className="font-semibold text-start text-xl xl:text-3xl py-3 text-gray-500 -tracking-tight w-full head">
                        Something about me
                        </h1>
                        <p className="text-[12px] lg:text-lg indent-16 text-gray-700 text-justify aboutbox2">
                           I am a freelancer and an active worker with a bachelor's
                           degree in Informatics Engineering at Pasir Pengaraian University. I graduated in 2022 and took part in a bootcamp program majoring in fullstack developer{" "}
                           <span className="text-oren">
                              <a href="https://www.harisenin.com/" target="blank">
                                 Harisenin.com{" "}
                              </a>
                           </span>
                           Bootcamp. I have created many frontend and fullstack
                           projects with the currently popular tech stack and I work
                           in a hospital as an IT staff
                        </p>
                  </div>
                  <div className="flex justify-start items-center gap-7 w-full lg:gap-10 paragraph text-gray-500 ">
                     <a
                        href="https://www.facebook.com/frankie.frankie.73997"
                        target="blank"
                        className='hover:text-black'
                     >
                        <FaFacebookF size={25} />
                     </a>
                     <a
                        href="https://www.instagram.com/popiceduriaan?igsh=a3ZjaXR6OWc0bGoy"
                        target="blank"
                        className='hover:text-black'
                     >
                        <FaInstagram size={25} />
                     </a>
                     <a
                        href="https://github.com/FrankieRockabilly"
                        target="blank"
                        className='hover:text-black'
                     >
                        <FaGithub size={25} />
                     </a>
                     <a
                        href="https://www.linkedin.com/in/frengki-iskandar-00586b235/"
                        target="blank"
                        className='hover:text-black'
                     >
                        <FaLinkedinIn size={25} />
                     </a>
                  </div>
                     {/* tech stack */}
                     <div className='flex flex-wrap justify-center lg:justify-start items-center gap-1 lg:gap-2 max-w-[35rem]'>
                        <div className='w-12 h-12 lg:h-16 lg:w-16 bg-orange-600 shadow-xl shadow-orange-400 hover:bg-orange-700 rounded-md flex justify-center items-center gap-2 text-white aboutbox group tooltip' data-tip="HTML">
                           <SiHtml5 size={size} className=' transition-all duration-300 ease-out'/>
                        </div>
                        <div className='w-12 h-12 lg:h-16 lg:w-16 bg-blue-600 shadow-xl shadow-blue-400 hover:bg-blue-700 rounded-md flex justify-center items-center gap-2 text-white aboutbox group tooltip' data-tip="CSS">
                           <FaCss3 size={size} className=' transition-all duration-300 ease-out'/>
                        </div>
                        <div className='w-12 h-12 lg:h-16 lg:w-16 bg-yellow-600 shadow-xl shadow-yellow-400 hover:bg-yellow-700 rounded-md flex justify-center items-center gap-2 text-white aboutbox group tooltip' data-tip="Javscript">
                           <RiJavascriptFill size={size} className=' transition-all duration-300 ease-out'/>
                        </div>
                        <div className='w-12 h-12 lg:h-16 lg:w-16 bg-cyan-600 shadow-xl shadow-cyan-400 hover:bg-cyan-700 rounded-md flex justify-center items-center gap-2 text-white aboutbox group tooltip' data-tip="React">
                           <FaReact size={size} className=' transition-all duration-300 ease-out'/>
                        </div>
                        <div className='w-12 h-12 lg:h-16 lg:w-16 bg-green-600 shadow-xl shadow-green-400 hover:bg-green-700 rounded-md flex justify-center items-center gap-2 text-white aboutbox group tooltip' data-tip="NodeJS">
                           <FaNodeJs size={size} className=' transition-all duration-300 ease-out'/>
                        </div>
                        <div className='w-12 h-12 lg:h-16 lg:w-16 bg-blue-400 shadow-xl shadow-purple-400 hover:bg-blue-500 rounded-md flex justify-center items-center gap-2 text-white aboutbox group tooltip' data-tip="Tailwind">
                           <SiTailwindcss size={size} className=' transition-all duration-300 ease-out'/>
                        </div>
                        <div className='w-12 h-12 lg:h-16 lg:w-16 bg-purple-400 shadow-xl shadow-purple-400 hover:bg-purpe-500 rounded-md flex justify-center items-center gap-2 text-white aboutbox group tooltip' data-tip="MySQL">
                           <SiMysql size={size} className=' transition-all duration-300 ease-out'/>
                        </div>
                        <div className='w-12 h-12 lg:h-16 lg:w-16 bg-gray-600 shadow-xl shadow-gray-400 hover:bg-gray-700 rounded-md flex justify-center items-center gap-2 text-white aboutbox group tooltip' data-tip="ExpressJS">
                           <SiExpress size={size} className=' transition-all duration-300 ease-out'/>
                        </div>
                        <div className='w-12 h-12 lg:h-16 lg:w-16 bg-gray-900 shadow-xl shadow-gray-700 hover:bg-gray-700 rounded-md flex justify-center items-center gap-2 text-white aboutbox group tooltip' data-tip="GitHub">
                           <FaGithub size={size} className=' transition-all duration-300 ease-out'/>
                        </div>
                        <div className='w-12 h-12 lg:h-16 lg:w-16 bg-orange-500 shadow-xl shadow-orange-400 hover:bg-gray-700 rounded-md flex justify-center items-center gap-2 text-white aboutbox group tooltip' data-tip="Git">
                           <FaGitAlt size={size} className=' transition-all duration-300 ease-out'/>
                        </div>
                        <div className='w-12 h-12 lg:h-16 lg:w-16 bg-blue-500 shadow-xl shadow-blue-400 hover:bg-gray-700 rounded-md flex justify-center items-center gap-2 text-white aboutbox group tooltip' data-tip="Figma">
                           <FaFigma  size={size} className=' transition-all duration-300 ease-out'/>
                        </div>
                     </div>
                     <div className="z-10 text-sm lg:text-sm flex justify-start items-center gap-3 bg-primary text-white px-3 py-2 lg:px-4 lg:py-3 rounded-lg">
                        <GoDownload />
                        <a href="/RESUME.pdf" download="RESUME.pdf">
                           <button className="  ">
                              Download My Resume
                           </button>
                        </a>
                     </div>

               </div>
            </div>
         </div>
      </>
   );
};

export default About