import { PiUser } from "react-icons/pi";
import Link from "next/link";
import { getLoggedInUser } from "@/services/auth.service";


const ProfileButton = async () => {
    const user=await getLoggedInUser()
    return (
        <div className="w-full flex justify-end mr-7 mb-7 relative h-[30px]">
        <Link href={ `/userProfile/${user?.id}`} className="bg-notWhite rounded-full w-[51px] h-[51px] absolute right-5 bottom-0 ">
        <PiUser className="w-[48px] h-[48px] "/>
        </Link>
        </div>
    )
}

export default ProfileButton;