import { useEffect, useRef, useState } from "react";
import Line from "./Line";
import Header from "./Header";
import Projects from "./Projects";
import About from "./About";
import Testimonial from "./Testimonial";
import Whatsapp from "./Whatssapp";
import Footer from "./Footer";
import Contact from "./Contact";
import TypingText from "./ChildComponent/TypingText";
import tablet from '../Assets/Image/tablet.png'
import gsap from "gsap";

// icon 
import { FaFileCode , FaLaptop } from "react-icons/fa";
import { RiExchangeBoxFill,RiLayout3Fill  } from "react-icons/ri";


const Home = () => {
   const aboutRef = useRef(null);
   const homeRef = useRef(null);
   const portfolioRef = useRef(null);
   const contactRef = useRef(null);
   const [size, setSize] = useState(0)

   
   
      const getSize = ()=>{
         if(window.innerWidth <= 768 ){
            setSize(14)
         }
         else if(window.innerWidth <= 1024){
            setSize(18)
         }else{
            setSize(25)
         }
      }
      useEffect(()=>{
      getSize()
   }, [])


   // ✅ Scroll Functions (tetap)
   const scrollWithOffset = (ref, offset = 10) => {
   const top = ref.current?.offsetTop || 0;
   window.scrollTo({
      top: top + offset,
      behavior: "smooth",
   });
};
const scrollToAbout = () => scrollWithOffset(aboutRef, -110);
const scrollToHome = () => scrollWithOffset(homeRef, -110);
const scrollToPortfolio = () => scrollWithOffset(portfolioRef, -110);
const scrollToContact = () => scrollWithOffset(contactRef, -100);
   // ✅ GSAP (tetap)
   useEffect(() => {
      gsap.fromTo(
         ".hello", {opacity: 0, x: -60,},{opacity: 1,x: 0,duration: 2,ease: "power2.inOut", stagger:0.5}
      );
      gsap.fromTo(
         ".paragraph",{opacity: 0,y: 30,}, {  opacity: 1, y: 0, duration: 1,delay: 0, ease: "power2.inOut",stagger: 0.2, }
      );
      gsap.fromTo(
         ".framesection", {opacity: 0, x: 70,  },{opacity: 1,x: 0,duration: 2, ease: "power2.inOut", stagger:{each: 0.5,from : "end"}
         }
      );
      gsap.fromTo(
         ".features", {opacity: 0, y: 40,  },{opacity: 1, y: 0,duration: 0.5, ease: "sine.out", stagger:0.5 }
      );
   }, []);

   return (
      <>
         <div className="font-poppins lg:pt-0 bg-white relative" ref={homeRef}>
            {/* icon whatsapp */}
            <div className="fixed bottom-10 right-10 z-50" >
               <Whatsapp />
            </div>
            <div className="flex flex-col flex-grow text-black relative overflow-hidden ">
               <Header
                  scrollToAbout={scrollToAbout}
                  scrollToContact={scrollToContact}
                  scrollToHome={scrollToHome}
                  scrollToPortfolio={scrollToPortfolio}
               />

               {/* hero section */}
               <section className="lg:px-20 lg:py-5 bg-white relative ">
                  <div className="absolute top-32 right-32 z-0 w-[42rem] h-[42rem] hidden lg:block ">
                     <img src="https://res.cloudinary.com/dplikeeby/image/upload/v1757641795/blur1_rjjgqo.png" alt="" className="w-full h-full opacity-80"/>
                  </div>
                  
                  <div className="relative flex flex-grow px-7 pb-9 lg:px-36 bg-no-repeat overflow-visible backdrop-blur-3xl bg-opacity-55 lg: bg-contain bg-center ">
                  {/* what we do */}
                     <div className="relative flex flex-col lg:flex-row justify-start items-start gap-5 w-full" >
                        <div className="flex flex-col justify-start items-start gap-2 h-full max-w-[50rem] pt-20 pb-5 lg:pt-44 lg:pb-10">
                           <h1 className="text-sm text-gray-500 lg:text-2xl tracking-widest border border-oren px-3 lg:px-10 py-2 rounded-full hello mb-5">
                              Hallo Everyone ..
                           </h1>
                           <p className="text-2xl lg:text-7xl font-bold tracking-widest hello">
                              Here <span className="text-oren">Frengki</span> <br /> {" "}
                              Iskandar <span className="text-oren tracking-wide"><TypingText /> </span>
                           </p>
                           <div>
                              <Line />
                           </div>
                           <p className="text-sm text-gray-700 lg:text-base lg:w-[30rem] xl:text-lg xl:w-[30rem] 2xl:w-[40rem] indent-20 paragraph ">
                              I am a passionate Full-Stack Developer and
                              Freelance Web Creator, dedicated to crafting
                              modern, responsive, and high-performance websites.
                              With expertise in both front-end and back-end
                              development, I turn ideas into seamless digital
                              experiences
                           </p>
                           <button
                              className=" bg-oren hover:bg-orange-700 transition-all duration-200 ease-out px-3 py-2 mb-5 mt-2 lg:px-5 lg:py-3 rounded-full text-[12px] lg:text-base text-white paragraph"
                              onClick={() => scrollToContact()}
                           >
                              Contact Me
                           </button>
                           <div className=" flex flex-col lg:flex-row  items-start gap-2 xl:gap-5 flex-wrap  lg:w-[40rem] ">
                              <div className="flex justify-start items-center gap-3 xl:w-72 features">
                                 <div className="w-8 h-8 lg:w-16 lg:h-16 rounded-lg flex justify-center items-center bg-green-600 text-white ">
                                    <FaLaptop size={size}/>
                                 </div>
                                 <h2 className=" text-gray-500 font-medium">Website Developent</h2>
                              </div>
                              
                              <div className="flex justify-start items-center gap-3 xl:w-72 features">
                                 <div className="w-8 h-8 lg:w-16 lg:h-16 rounded-lg flex justify-center items-center bg-yellow-600 text-white ">
                                    <FaFileCode size={size}/>
                                 </div>
                                 <h2 className=" text-gray-500 font-medium">Clean Code</h2>
                              </div>

                              <div className="flex justify-start items-center gap-3 xl:w-72 features">
                                 <div className="w-8 h-8 lg:w-16 lg:h-16 rounded-lg flex justify-center items-center bg-red-600 text-white ">
                                    <RiExchangeBoxFill size={size}/>
                                 </div>
                                 <h2 className=" text-gray-500 font-medium">API Integration</h2>
                              </div>

                              <div className="flex justify-start items-center gap-3 xl:w-72 features">
                                 <div className="w-8 h-8 lg:w-16 lg:h-16 rounded-lg flex justify-center items-center bg-fuchsia-600 text-white ">
                                    <RiLayout3Fill size={size}/>
                                 </div>
                                 <h2 className=" text-gray-500 font-medium">UI/UX Implementation</h2>
                              </div>
                           </div>
                        </div>
                        <div className="hidden xl:block absolute right-0 -bottom-24  xl:top-12 xl:right-0 2xl:top-56 justify-center items-center overflow-hidden framesection ">
                           <img
                              src={tablet}
                              alt=""
                              className="w-[20rem] h-[15rem] xl:h-auto xl:w-[25rem] 2xl:w-[45rem] opacity-20 xl:opacity-100"
                           />
                        </div>
                     </div>
                  </div>
               </section>

               {/* Bagian lain tetap */}
               <div ref={aboutRef}>
                  <About />
               </div>

               <div ref={portfolioRef}>
                  <Projects />
               </div>

               {/* <div>
                  <Testimonial />
               </div> */}

               <div ref={contactRef}>
                  <Contact />
               </div>

{/* kalo footer disini malah kena efek typing njirr */}
               <div>
                  <Footer
                     scrollToAbout={scrollToAbout}
                     scrollToContact={scrollToContact}
                     scrollToHome={scrollToHome}
                     scrollToPortfolio={scrollToPortfolio}
                  />
               </div>
            </div>
         </div>
      </>
   );
};

export default Home;
