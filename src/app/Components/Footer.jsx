import Image from 'next/image'
import logo from '@/assets/Brand.svg'
import gp from '@/assets/googleplay.svg'
import as from '@/assets/applestore.svg'
import fb from '@/assets/face.svg'
import ig from '@/assets/instagram.svg'
import pin from '@/assets/pinterest.svg'

export default function Home() {
    return (
        <>

            <footer className='bg-black text-white py-5 lg:px-28 px-0'>
                <div className='flex lg:flex-row flex-col justify-center items-center gap-5'>
                    <div className='w-5/12 pr-5 flex flex-col justify-center font-thin'>
                        <Image src={logo} alt="logo" width="75" height="75" className='pb-5' />
                        <p>
                            insum Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta sequi quo magnam voluptate nostrum ad explicabo velit.
                            Obcaecati error, libero maiores est veritatis rem repellendus nostrum illum! Labore, fugiat quas.
                        </p>
                    </div>
                    <div className='w-3/12 pr-5 flex flex-col justify-center items-center font-thin'>
                        <ul className=''>
                            <li className='pb-3'>Tentang Kami</li>
                            <li className='pb-3'>Blog</li>
                            <li className='pb-3'>Layanan</li>
                            <li className='pb-3'>Karir</li>
                            <li className='pb-3'>Pusat Media</li>
                        </ul>
                    </div>
                    <div className='w-3/12 font-semibold flex flex-col justify-center'>
                        <div className=''>
                            <h5>Download</h5>
                            <ul className='flex lg:flex-row flex-col items-center'>
                                <li><Image src={gp} /></li>
                                <li><Image src={as} /></li>
                            </ul>
                        </div>
                        <div className=''>
                            <h5>Social Media</h5>
                            <ul className='flex lg:flex-row flex-col items-center'>
                                <li><Image src={fb} height="75" weight="75" className='pr-5' /></li>
                                <li><Image src={ig} height="75" weight="75" className='pr-5' /></li>
                                <li><Image src={pin} height="75" weight="75" className='pr-5' /></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="w-full my-6 border-white-200" />
                <div className='flex items-center justify-center font-semibold'>
                    <h2 >Copyright &copy; . All Right Reserved</h2>
                </div>
            </footer>
        </>
    )
}