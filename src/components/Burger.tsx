'use client'
import { useState } from "react";
import { RiMenuLine } from "@remixicon/react";

const BurgerMenu = () =>{
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = ()=>{
        setIsOpen(!isOpen);
    }

    return (
        <>
        <button className="relative sm:hidden" onClick={toggleMenu}>
        <RiMenuLine size={24} className="sm:hidden" />
        </button>
        <div className={`flex h-50 sm:hidden absolute justify-center items-center top-24 w-52 left-1 bg-white ${isOpen? 'block' : 'hidden'}`}>
            <ul className="w-52">
                <li className="h-10 flex p-4 hover:bg-gray-200/40 transition items-center">Shop</li>
                <li className="h-10 flex p-4 hover:bg-gray-200/40 transition items-center">On sale</li>
                <li className="h-10 flex p-4 hover:bg-gray-200/40 transition items-center">New Arrivals</li>
                <li className="h-10 flex p-4 hover:bg-gray-200/40 transition items-center">Brands</li>
            </ul>
        </div>
        </>
    )
  }
export default BurgerMenu;
