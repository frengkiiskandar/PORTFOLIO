import  { useEffect, useState } from "react"
import { FaWhatsapp } from "react-icons/fa";
import gsap from "gsap";

const Whatsapp = () => {
    const [size, setSize] = useState(20)
    const [whatsappActive, setWhatsappActive] = useState(false)
    const[message, setMessage] = useState("")
    const handleCLickWhatsapp=()=>{
    setWhatsappActive((prevState)=> !prevState)
    console.log(whatsappActive)
    }

    useEffect(() => {
        const updateSize = () => {
            const width = window.innerWidth
            if (width < 640) {
                // sm: mobile
                setSize(25);
            } else if (width >= 640 && width < 1024) {
                // md & lg: tablet
                setSize(30);
            } else if (width >= 1024 && width < 1536) {
                // xl: desktop
                setSize(33);
            } else {
                // 2xl: large desktop
                setSize(35);
            }
        }

        // Panggil sekali saat component mount
        updateSize();

        // Tambah event listener untuk resize
        window.addEventListener('resize', updateSize);

        // Cleanup saat component unmount
        return () => window.removeEventListener('resize', updateSize);
    }, []); // Jangan lupa dependency array kosong

    useEffect(()=>{
            gsap.fromTo(".whatsappEffect1",{
                opacity: 0,
                y:30
            },{
                opacity:1,
                y:0,
                ease:"power2.inOut",
                duration:0.5,

            })
            gsap.fromTo(".whatsappEffect2",{
                opacity: 0,
                x:30
            },{
                opacity:1,
                x:0,
                ease:"sine.in",
                duration:0.5,
                stagger:0.3,
                delay:0.5

            })
        },[whatsappActive])
    return (
        <>
            <div className="p-2 rounded-lg bg-green-500 text-white relative"> 
                <div className="cursor-pointer"  onClick={handleCLickWhatsapp}>
                    <FaWhatsapp size={size}/>
                </div>

                {whatsappActive && (
                    <div className="whatsappEffect1 absolute bottom-[120%] right-0 z-10 w-[20rem] h-auto  text-black bg-white border rounded-lg overflow-hidden shadow-xl" onClick={(e) => e.stopPropagation()}>
                        <div className="flex flex-col justify-center items-center gap-0 bg-primary  text-white p-2 lg:p-4 text-[13px] lg:text-sm">
                            <h1 >How can we help ?</h1>
                            <p>We usually respon in a few hours</p>
                        </div>
                        <div className="p-6 ">
                            <div className="whatsappEffect2 bg-white text-black text-sm flex flex-col justify-start items-start gap-2 mb-52 ">
                                <div className="flex justify-start items-center gap-2">
                                    <p className="text-sm">Frengki</p>
                                    <p className="text-[10px] bg-gray-200 rounded-3xl px-3 text-gray-500">bot</p>
                                </div>
                                <p className="px-2 py-2 bg-slate-100 text-[11px] rounded-lg w-full"> Hi There, Do you have any problem ?</p>
                            </div>
                            <div className="whatsappEffect2 flex flex-col justify-start items-start gap-2 text-[11px]">
                                <input
                                    type="text"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="We're here to help. Type your message here.."
                                    className="w-full border-b-[1px] border-b-primary px-2 py-3 font-light outline-none bg-white"
                                />
                            {/* <div className= " bg-primary w-full h-[1px] rounded-full"></div> */}
                                <button
                                    className="px-5 py-2 rounded-lg bg-primary text-white my-2"
                                    onClick={() => {
                                        const encodedMessage = encodeURIComponent(message);
                                        const phoneNumber = "6281268141593"; // tanpa tanda "+"
                                        const waLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
                                        window.open(waLink, "_blank");
                                    }}
                                    >
                                    Send
                                </button>

                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default Whatsapp