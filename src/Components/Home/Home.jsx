import { useEffect, useRef, useState } from 'react';
import image from '../../assets/download.png'
import Typed from 'typed.js';
import DownloadCV from '../DownloadCV/DownloadCV';

function Home() {
    const el = useRef(null);
    useEffect(() => {
        const typed = new Typed(el.current, {
          strings: ["FrontEnd Developer", "React Developer"], 
          
          startDelay: 300,
          typeSpeed: 100,
          backSpeed: 100,
          backDelay: 100,
          smartBackspace: true,
          loop: true,
        });
        return () => {
            typed.destroy();
          };
        }, []);

        
        
  return (
    <>
        <div id='main' className='w-full bg-white dark:bg-slate-800  pt-12 pb-6 '>
            <div className='md:flex w-4/5 mx-auto m-6'>
                <div className='w-full md:w-8/12 my-2'>
                    <p className='text-2xl dark:text-white font-bold font-mono animate-bounce'>Hello👋</p>
                    <p className='text-2xl dark:text-white my-1 font-bold font-mono mb-5'>I'M <span className='text-4xl font-bold text-blue-700 dark:text-emerald-500 '> Osama Shehta</span></p>
                    <span className='text-2xl dark:text-white font-bold font-mono block h-20 '>I'M <span ref={el} className='text-4xl  text-blue-700 dark:text-emerald-500'></span></span>
                    <div className="cv w-full flex">
                        <DownloadCV/>
                    </div>
                </div>
                <div className='w-full md:w-4/12 my-4'>
                    <div>
                        <img src={image} alt="" className='w-full'/>
                    </div>
                </div>
            </div>
           
        </div>

        
    </>
  )
}

export default Home
