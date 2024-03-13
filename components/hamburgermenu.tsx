"use client";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import DropDown from "./dropDown";
import { AiOutlineClose } from "react-icons/ai";
import { type UUID } from "crypto";

const Hamburgermenu = ({ userId }: { userId: UUID }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      {isOpen ? <AiOutlineClose onClick={handleClick} className="h-[32px] w-[32px] absolute top-10 right-10 cursor-pointer" /> :
        <RxHamburgerMenu onClick={handleClick} className="h-[32px] w-[32px] absolute top-10 right-10 cursor-pointer" />}
      {isOpen &&
        <div className="cursor-pointer">
          <DropDown userId={userId} />
        </div>}
    </div>
  )
}

export default Hamburgermenu;