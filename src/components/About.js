import { Element } from 'react-scroll'
import AbtImg from '../assets/abbt.png'

export default function About(){
    return (
    <Element name='about'>
    <section id='about' className='flex flex-col md:flex-row bg-sec px-5'> 
        <div className='md:w-1/3 py-3'>
            <img src={AbtImg} />
        </div>
        <div className='md:w-10/12 flex'>
            <div className='flex flex-col justify-center pl-5'>
                <h1 className='text-4xl font-bold text-black border-b-4 border-[#000]  w-[170px]'>About Us </h1>
                <p className='text-lg md:text-2xl text-black py-3 text-wrap text-center'>ElectroDrive specializes in converting petrol engine vehicles into electric vehicles (EVs), providing a sustainable and eco-friendly alternative. The company ensures high-quality conversions that enhance efficiency and performance. Committed to driving a greener future, ElectroDrive makes EV adoption more accessible and cost-effective.</p>
            </div>
        </div>
    </section>
    </Element>
    )
}