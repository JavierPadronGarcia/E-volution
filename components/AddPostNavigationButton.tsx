import Link from "next/link";
import { GoPlus } from "react-icons/go";

export default function AddPostNavigationButton({ styles }: { styles?: string }) {
  return (
    <Link className={`flex justify-center items-center rounded-full bg-notWhite ${styles}`} href="/news/create">
      <GoPlus className="size-[120%]" />
    </Link>
  )
}