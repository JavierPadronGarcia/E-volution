import { getLoggedInUser } from "@/services/auth.service";
import Link from "next/link";
import { GoPlus } from "react-icons/go";

export default async function AddPostNavigationButton({ styles }: { styles?: string }) {

  const user = await getLoggedInUser();

  return (
    <>
      {user
        ? <Link className={`flex justify-center items-center rounded-full bg-notWhite ${styles}`} href={`/news/create?&user_id=${user.id}`}>
          <GoPlus className="size-[120%]" />
        </Link>
        : <></>
      }
    </>
  )
}