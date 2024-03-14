import { type UUID } from "crypto";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";

const Author = ({userId, username}:{userId:UUID, username:string}) => {
  return (
    <div className="w-full flex justify-start">
      <Link href={ `/userProfile/${userId}`} className="border-2 border-darkGreen h-[45px] flex flex-row items-center rounded-xl w-auto item-center px-4 py-6 ">
        <CgProfile className="w-[33px] h-[33px] mr-2" />
        {username}
      </Link>
    </div>
  );
};

export default Author;
