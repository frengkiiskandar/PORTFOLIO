import { useEffect, useState } from 'react'
import { InstagramLogo, FacebookLogo, LinkedinLogo, WhatsappLogo, GithubLogo, Image } from '@phosphor-icons/react'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/src/ScrollTrigger'

const Footer = ({ scrollToAbout, scrollToHome, scrollToPortfolio, scrollToContact }) => {

    const [email, setEmail] = useState()
    const handleSubmitEmail = (e) => {
        e.preventDefault()
        alert(`Thanks ${email}`)
    }


    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        gsap.fromTo('.footerEffect', {
            opacity: 0,
            y: 40,
        }, {
            opacity: 1,
            y: 0,
            duration: 1.5,
            scrollTrigger: {
                trigger: '.footerEffect',
                start: 'top 90%',
                once: true
            },
            ease:"sine.out",
            stagger:0.1
        })
    })

    return (
        <>
            <div className='px-12  lg:px-36 py-20 bg-zinc-800 text-gray-400 '>
                <div className='flex flex-wrap justify-between xl:justify-between items-start gap-5 footerEffect'>

                    {/* 1 */}
                    <div className='w-[28rem] flex flex-col justify-start items-start gap-5   text-sm'>
                        <h1 className='font-bold text-primary'>Frengki <span className='text-oren footerEffect'>Iskandar</span></h1>
                        <p className='text-sm xl:text-base'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>
                        <div className='flex justify-end items-end gap-5 w-full'>
                            <a href="https://www.facebook.com/frankie.frankie.73997" target='blank' className='hover:text-oren footerEffect'><FacebookLogo size={32} weight="thin" /></a>
                            <a href="https://www.instagram.com/popiceduriaan?igsh=a3ZjaXR6OWc0bGoy" target='blank' className='hover:text-oren footerEffect'><InstagramLogo size={32} weight="thin" /></a>
                            <a href="https://www.linkedin.com/in/frengki-iskandar-00586b235/" target='blank' className='hover:text-oren footerEffect'><LinkedinLogo size={32} weight="thin" /></a>
                            <a href="https://wa.me/6281275691395" target='blank' className='hover:text-oren footerEffect'><WhatsappLogo size={32} weight="thin" /></a>
                            <a href="https://github.com/FrankieRockabilly" target='blank' className='hover:text-oren footerEffect'><GithubLogo size={32} weight="thin" /></a>
                            <a href="https://drive.google.com/drive/folders/1sJbu_3rhHJ59BC1CdKOXr7bfNirMeqn-" target='blank' className='hover:text-oren footerEffect'><Image size={32} weight="thin" /></a>
                        </div>
                    </div>

                    {/* 2 */}
                    <div className='w-64 flex flex-col justify-start items-start gap-5 text-sm lg:text-base  '>
                        <h1 className='text-white'>Quick Links</h1>
                        <div className='flex flex-col justify-start items-start gap-5'>
                            <button className='hover:text-oren' onClick={() => scrollToHome()}>Home</button>
                            <button className='hover:text-oren' onClick={() => scrollToAbout()}>About</button>
                            <button className='hover:text-oren' onClick={() => scrollToPortfolio()}>Portfolio</button>
                            <button className='hover:text-oren' onClick={() => scrollToContact()}>Contact</button>
                        </div>
                    </div>

                    {/* 3 */}
                    <div className=' w-full lg:w-80 flex flex-col justify-start items-start gap-5  '>
                        <h1 className='text-white'>Contact Me</h1>
                        <div className='flex flex-col justify-start items-start gap-2'>
                            <p className='font-semibold text-white'>Adress : <span className='text-gray-400 font-light'>Pasir Pengaraian, Rokan Hulu, Indonesia</span></p>
                            <p className='font-semibold text-white'>Phone : <span className='text-gray-400 font-light'>+62 812 6814 1593</span></p>
                            <p className='font-semibold text-white'>Email : <span className='text-gray-400 font-light'>frankierockabilly@gmail.com</span></p>
                        </div>
                    </div>

                    {/* 4 */}
                    <div className=' w-full lg:w-80 flex flex-col justify-start items-start gap-5  '>
                        <h1 className='text-white'>Subscribe</h1>
                        <div className='flex flex-col justify-start items-start gap-2'>
                            <p className='font-light text-sm'>There are many variations of passages</p>
                            <form onSubmit={handleSubmitEmail} className='flex flex-col justify-center items-center gap-2 w-full'>
                                <input type="email" className='px-3 py-3 bg-zinc-500 outline-none rounded-lg w-full' placeholder='Email Address '
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)} disabled/>
                                <button className='text-center py-3 bg-primary hover:bg-primarySec rounded-lg w-full text-white font-light' type='submit'>Subscribe</button>
                            </form>
                        </div>
                    </div>

                </div>
            </div >
        </>
    )
}

export default Footer