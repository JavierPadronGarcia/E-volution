import BackArrow from "@/components/backArrow";
import Link from "next/link";
import StarButton from "@/components/starButton/starButton";
import { getLoggedInUser } from "@/services/auth.service";
import { type UUID } from "crypto";
import { getPostById } from "@/services/posts.service";
import { Post } from "@/app/types/types";
import { ImageBucketURL } from "@/app/constants/supabaseConstants";
import { FaImage } from "react-icons/fa";
import Author from "@/components/author";
import ProfileButton from "@/components/profileButton";
import { getUser } from "@/services/users.service";
import { User } from "@/app/types/types";

const SelectedNews = async ({ params }: { params: { postId: UUID } }) => {
  const user = await getLoggedInUser();
  const post: Post = await getPostById(params.postId);


  let userInfo: User | null = null;
  if (post.user_id) {
    userInfo = await getUser(post.user_id as UUID);
  }

  return (
    <>
      <div className="w-full lg:relative lg:w-[1024px]">
        <BackArrow />
        {user && <StarButton className="w-[49px] absolute top-8 right-8"
          initialState={false}
          user_id={user.id as UUID}
          post_id={post.id}
        ></StarButton>}
      </div>
      <div>
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
      <div className="text-justify justify-center p-8 md:max-w-[768px] ">
        <p>{post.description}</p>
        <div className="w-full ml-7 mt-5"> Made by
          <Author
            userId={post.user_id as UUID}
            username={userInfo?.name || ''}
          />
        </div>
      </div>
      {!user
        ? <div className="flex gap-7 justify-center w-full m-5">
          <Link href='/login' className="underline justify-center flex">Login</Link>
          <Link href='/register' className="underline justify-center flex">Register</Link>
        </div>
        : <div className="w-full h-full lg:relative lg:w-[1024px]"> <ProfileButton styles='size-[51px] fixed bottom-8 right-8 lg:absolute lg:bottom-0 lg:right-[3rem]' /></div>
      }
    </>

  )
}

export default SelectedNews








