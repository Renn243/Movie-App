import React from 'react'
import Image from 'next/image'
import logo from '@/assets/Brand.svg'
import gp from '@/assets/googleplay.svg'
import as from '@/assets/applestore.svg'
import fb from '@/assets/face.svg'
import ig from '@/assets/instagram.svg'
import pin from '@/assets/pinterest.svg'

export default function Footer() {
    return (
        <footer className='bg-black text-white py-5 px-20 '>
            <div className='flex lg:flex-row flex-col gap-10'>
                <div className='lg:w-1/2 flex flex-col justify-center'>
                    <Image src={logo} alt="logo" width="75" height="75" className='pb-5' />
                    <p className='font-thin'>
                        insum Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta sequi quo magnam voluptate nostrum ad explicabo velit.
                        Obcaecati error, libero maiores est veritatis rem repellendus nostrum illum! Labore, fugiat quas.
                    </p>
                </div>
                <div className='text-lg flex flex-col justify-center items-center'>
                    <ul>
                        <li className='pb-3'>Tentang Kami</li>
                        <li className='pb-3'>Blog</li>
                        <li className='pb-3'>Layanan</li>
                        <li className='pb-3'>Karir</li>
                        <li className='pb-3'>Pusat Media</li>
                    </ul>
                </div>
                <div className='text-lg flex flex-col justify-center'>
                    <div className='pb-5'>
                        <h5 className='pb-3'>Download</h5>
                        <ul className='flex items-center'>
                            <li><Image src={gp} height={75} /></li>
                            <li><Image src={as} height={75} /></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className='pb-3'>Social Media</h5>
                        <ul className='flex items-center gap-5'>
                            <li><Image src={fb} height="50" weight="50" className='rounded-lg' /></li>
                            <li><Image src={ig} height="50" weight="50" className='rounded-lg' /></li>
                            <li><Image src={pin} height="50" weight="50" className='rounded-lg' /></li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="w-full my-5 h-0.1 bg-white" />
            <div className='text-lg flex items-center justify-center'>
                <h2 >Copyright &copy; . All Right Reserved</h2>
            </div>
        </footer>
    )
}