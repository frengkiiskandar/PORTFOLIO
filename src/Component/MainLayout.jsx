import  { useState, useEffect } from 'react'
import HomePage from '../Pages/HomePage'
import Loading from '../Assets/SweetAlert/Loading' // pastikan komponen Loading ada

const MainLayout = () => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // Menunggu 2 detik sebelum mengubah loading menjadi false
        const timer = setTimeout(() => {
            setLoading(false)
        }, 3000)

        // Cleanup timer jika komponen di-unmount
        return () => clearTimeout(timer)
    }, [])

    return (
        <div>
            {loading ? (
                <div className='h-screen flex justify-center items-center bg-zinc-100 '>
                    <Loading />
                </div> // Tampilkan loading
            ) : (
                    <div>
                        <HomePage />
                    </div>
            )}
        </div>
    )
}

export default MainLayout
