import { PiUser } from "react-icons/pi";
import Link from "next/link";
import { getLoggedInUser } from "@/services/auth.service";


const ProfileButton = async ({ styles, }: { styles?: string }) => {
  const user = await getLoggedInUser()
  return (
    <Link
      href={`/userProfile/${user?.id}`}
      className={`flex justify-center items-center rounded-full bg-notWhite border-2 border-darkGreen hover:text-hoveredGreen hover:scale-105 ${styles}`}
    >
      <PiUser className="size-[80%]" />
    </Link>
  )
}

export default ProfileButton;