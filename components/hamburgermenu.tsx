"use client";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import DropDown from "./dropDown";
import { AiOutlineClose } from "react-icons/ai";

const Hamburgermenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen);

    } 

    return (
        <div>
           {isOpen? <AiOutlineClose onClick={handleClick} className="h-[32px] w-[32px] absolute top-10 right-10"></AiOutlineClose>:
           <RxHamburgerMenu onClick={handleClick} className="h-[32px] w-[32px] absolute top-10 right-10"></RxHamburgerMenu>}
           {isOpen && 
           <div>
           
               <DropDown></DropDown>
           </div>}
        </div>
    ) }
     
     export default Hamburgermenu;