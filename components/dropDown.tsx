'use client';

import { FiEdit3 } from "react-icons/fi";
import { AiOutlineLogout } from "react-icons/ai";
import { type UUID } from "crypto";
import Link from "next/link";

const DropDown = ({ userId }: { userId: UUID }) => {

  return (
    <div className="absolute right-5 top-[80px] z-10">
      <div className="bg-white border-darkGreen border-2 rounded-md w-[150px] h-[75px] flex flex-col justify-center gap-2 p-4">
        <Link href={`/userProfile/${userId}/edit`} className=" w-[122] h-[70px] flex flex-row gap-2">
          <FiEdit3 className="w-[22px] h-[22px] text-darkGreen" />
          <p className="text-darkGreen">Edit profile</p>
        </Link>
        <div className=" w-[122] h-[70px] flex flex-row gap-2">
          <AiOutlineLogout className="w-[22px] h-[22px] text-darkGreen " />
          <p className="text-darkGreen">Log out</p>
        </div>
      </div>
    </div>
  );

};

export default DropDown;
