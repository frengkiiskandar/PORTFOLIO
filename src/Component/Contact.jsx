import  { useEffect, useState } from 'react'
import { Envelope, MapPin, Phone } from '@phosphor-icons/react'
import Maps from './Maps'
import SuksesKirimPesan from '../Assets/SweetAlert/SuksesKirimPesan'
import GagalKirimPesan from '../Assets/SweetAlert/GagalKirimPesan'
import Line from './Line'
import genders from '../Assets/Json/Gender.json'

import { IoIosCheckmarkCircle  } from "react-icons/io";

import gsap from 'gsap'
import ScrollTrigger from 'gsap/src/ScrollTrigger'

const Contact = () => {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [gender, setGender] = useState('')
    // const [phone, setPhone] = useState()
    const [message, setMessage] = useState()
    const [loading, setLoading] = useState(false)
    const [isSuccesSendFeedback, setIsSuccessSendFeedback] = useState(false)
    const [isFailSendFeedback, setIsFailSendFeedback] = useState(false)

    const handleClickSendFeedback = (e) => {
        e.preventDefault()

        if (gender !== "Male" && gender !== "Female") {
            setLoading(false)
            setIsFailSendFeedback(true)
            return // stop proses, jangan lanjut
        }

        setLoading(true)
        setTimeout(() => {
            setName('')
            setEmail('')
            setMessage('')
            setGender('')
            setLoading(false)
            setIsSuccessSendFeedback(true)
        }, 2000);
    }

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.fromTo('.contact', {
            opacity: 0,
            x: -40,
        }, {
            opacity: 1,
            x: 0,
            duration: 1.5,
            scrollTrigger: {
                trigger: '.contact',
                start: 'top 80%',
                once: true,
            }
        })
        gsap.fromTo('.send', {
            opacity: 0,
            y: 20,
        }, {
            opacity: 1,
            y: 0,
            delay: 1,
            duration: 0.5,
            scrollTrigger: {
                trigger: '.send',
                start: 'top 80%',
                once: true,
            }
        })
        gsap.fromTo('.maps', {
            opacity: 0,
            x: 40,
        }, {
            opacity: 1,
            x: 0,
            duration: 1.5,
            scrollTrigger: {
                trigger: '.maps',
                start: 'top 80%',
                once: true,
            }
        })
    }, [])



    return (
        <>
            <div className='px-5 lg:px-36 py-10'>
                <div className='flex flex-col justify-center items-center gap-3'>
                    <h1 className="font-semibold text-center text-xl lg:text-2xl xl:text-4xl text-oren -tracking-tight w-full head">
                        Get in <span className='text-primary'>Touch</span>
                    </h1>
                    <Line />
                </div>
                {isSuccesSendFeedback && (
                    <SuksesKirimPesan />
                )}
                {isFailSendFeedback && (
                    <GagalKirimPesan />
                )}
                <div className='flex flex-wrap  rounded-2xl shadow-xl bg-gray-50 py-2 mt-5'>
                    {/* 1 */}
                    <div className='px-7 lg:px-16 py-5 '>
                        <form className=' flex flex-col justify-start items-start gap-5 text-sm lg:text-base contact' onSubmit={handleClickSendFeedback}>
                            <div className='flex flex-wrap justify-between gap-5 w-full'>
                                {/* <label htmlFor="">Full Name*</label> */}
                                    <input type="text" className='w-full lg:w-auto outline-none border-b-[1px] py-3 border-gray-500 bg-gray-50' placeholder='Full Name*'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required />
                                    <input type="email" className='w-full lg:w-auto outline-none border-b-[1px] py-3 border-gray-500 bg-gray-50' placeholder='Email*'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required />
                                    <select
                                        value={gender}
                                        onChange={(e) => setGender(e.target.value)}
                                        className="w-full lg:w-auto outline-none border-b-[1px] py-3 text-gray-500 border-gray-500 bg-gray-50"
                                        required
                                        >
                                        <option value="" disabled>Choose Gender*</option>
                                        {genders.genders.map((item, index) => (
                                            <option key={index} value={item.name} placeholder="Choose Gender*">{item.name}</option>
                                        ))}
                                    </select>
                                    {/* <input type="text" className='w-full lg:w-auto outline-none border-b-[1px] py-3 border-gray-500 bg-gray-50' placeholder='Phone Number*'
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)} /> */}
                            </div>
                            <div className='w-full'>
                                    <input type="text" className='outline-none border-b-[1px] py-3 border-gray-500 bg-gray-50 w-full' placeholder='Message'
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    aria-required />
                            </div>
                                <button type='submit' className={`send px-2 py-3 w-40 text-sm rounded-full bg-gradient-to-b from-primarySec to-primary shadow-2xl hover:from-primary hover:to-[#11856e] shadow-primarySec text-white  ${loading ? 'cursor-not-allowed' : ''}`}>
                                    {loading ? (<span className="loading loading-spinner loading-xs"></span>) : (
                                        <p>Send Message</p>
                                    )}
                                </button>
                        </form>
                        <div className='pt-10 text-gray-500 text-sm lg:text-base'>
                            <p className='mb-7'>You can also contact me through the link below</p>
                            {/* fastwork */}
                            <div>
                                <a href="https://fastwork.id/user/frengki23?source=web_marketplace_profile-menu_profile" className='flex justify-start items-center gap-3 ' target='blank'>
                                <IoIosCheckmarkCircle  color='#18DE50' size={20}/>
                                    <img src="https://pbs.twimg.com/profile_images/1040434908185808898/_uldxS5Y_400x400.jpg" alt="" className='w-7' />
                                    <p className='hover:text-gray-700'>Fastwork</p>
                                </a>
                            </div>
                            {/* freelancer */}
                            <div>
                                <a href="https://www.freelancer.co.id/u/Frengki023" className='flex justify-start items-center gap-3 mt-3' target='blank'>
                                    <IoIosCheckmarkCircle color='#18DE50' size={20} />
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTClYe1kHtbUV-E2d7NuF2pdPxljtu4nlXutg&s" alt="" className='w-7' />
                                    <p className='hover:text-gray-700'>Freelancer</p>
                                </a>
                            </div>
                            {/* jobstreet */}
                            <div>
                                <a href="https://id.jobstreet.com/id/profile/frengki-iskandar-Y3xtQhC8qL" className='flex justify-start items-center gap-3 mt-3' target='blank'>
                                    <IoIosCheckmarkCircle  color='#18DE50' size={20}/>
                                    <img src="https://kerjairport.com/wp-content/uploads/2020/06/JOBSTREET-BAGI-TIPS-CARA-NAK-DAPATKAN-KERJA.jpg" alt="" className='w-7' />
                                    <p className='hover:text-gray-700'>Jobstreet</p>
                                </a>
                            </div>
                            {/* pintarnya */}
                            <div>
                                <a href="https://pintarnya.com/cv/frengki-iskandar-ud19izoaeu" className='flex justify-start items-center gap-3 mt-3' target='blank'>
                                    <IoIosCheckmarkCircle color='#18DE50' size={20} />
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRND7AiEsIirUKxQQXKfpfhI_ke1CLPMkeqQ&s" alt="" className='w-7' />
                                    <p className='hover:text-gray-700'>Pintarnya</p>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* 2 */}
                    <div className='grow text-sm lg:text-base w-auto px-5 py-5 flex flex-col justify-start items-start gap-3 text-gray-700 maps'>
                        <div className='flex justify-start items-center gap-3'>
                            <div className='p-1 lg:p-2 rounded-full border'>
                                <Envelope size={25} weight="thin" />
                            </div>
                            <p className='break-words text-wrap'>frankierockabilly@gmail.com</p>
                        </div>
                        <div className='flex justify-start items-center gap-3'>
                            <div className='p-1 lg:p-2 rounded-full border'>
                                <Phone size={25} weight="thin" />
                            </div>
                            <p className='break-words text-wrap'>+62 812 7569 1395</p>
                        </div>
                        <div className='flex justify-start items-center gap-3'>
                            <div className='p-1 lg:p-2 rounded-full border'>
                                <MapPin size={25} weight="thin" />
                            </div>
                            <p className='break-words text-wrap'>Rokan Hulu,Riau, indonesia</p>
                        </div>

                        <div className='w-full'>
                            <Maps />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact