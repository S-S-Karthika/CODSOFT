import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'


export default function Header() {

    const[toggleMenu , setToggleMenu]=useState(false)


    return<header className="flex justify-between px-5 py-3 bg-primary">
        <a href="#" className="font-bold text-black">Karthika Senthil</a>
        <nav className="hidden md:block">
        <ul className="flex font-hero-font font-bold  pr-6 text-black">
            <li><a href="/">Home</a></li>
            <li><a href="/#about">About</a></li>
            <li><a href="/#projects">Projects</a></li>
            <li><a href="/#contact">Contacts</a></li>
        </ul>
        </nav>
        {toggleMenu && <nav className="block md:hidden ">
        <ul className="flex flex-col text-black mobile-nav">
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contacts</a></li>
        </ul>
        </nav>}
        <button onClick={()=>setToggleMenu(!toggleMenu)} className='block md:hidden'><Bars3Icon className='text-white h-6'/></button>
       </header>
    
};
