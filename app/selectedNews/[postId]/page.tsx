import BackArrow from "@/components/backArrow";
import Link from "next/link";
import StarButton from "@/components/starButton/starButton";
import { getLoggedInUser } from "@/services/auth.service";
import { type UUID } from "crypto";
import { getPostById } from "@/services/posts.service";
import { Post } from "@/app/types/types";
import { ImageBucketURL } from "@/app/constants/supabaseConstants";
import { FaImage } from "react-icons/fa";

const SelectedNews = async ({ params }: { params: { postId: UUID } }) => {
  const user = await getLoggedInUser();
  const post: Post = await getPostById(params.postId);

  return (
    <>
      {user && <StarButton className="w-[49px] absolute top-8 right-8"
        initialState={false}
      ></StarButton>}
      <div>
        <BackArrow />
        <div className="flex flex-col font-bold text-[20px] justify-center text-center place-content-center mt-[80px] mb-5">
          <h1>{post.title}</h1>
        </div>
        <div className="border-2 border-darkGreen h-[206px] w-[325px]">
          {(!post.filename || post.filename === 'No file')
            ? <FaImage className="size-full" />
            : <img src={`${ImageBucketURL}/${post.filename}`} className="size-full" />
          }
        </div>
      </div>
      <div className="text-center justify-center p-8 ">
        <p>{post.description}</p>
      </div>
      {!user && <div className="flex gap-7 justify-center w-full m-5">
        <Link href='/login' className="underline justify-center flex">Login</Link>
        <Link href='/register' className="underline justify-center flex">Register</Link>
      </div>}
    </>

  )
}

export default SelectedNews