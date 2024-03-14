import Article from "@/components/article";
import { getAllPosts } from "@/services/posts.service";
import { Post } from "../types/types";
import AddPostNavigationButton from "@/components/AddPostNavigationButton";
import ProfileButton from "@/components/profileButton";
import { getLoggedInUser } from "@/services/auth.service";
import Link from "next/link";

export const revalidate = 0;

export default async function NewsPage() {

  const allPosts: Post[] = await getAllPosts();
  const user = await getLoggedInUser();

  return (
    <div className="flex flex-col gap-10 relative w-full items-center">
      <h1 className="text-center mt-10 font-bold text-xl">News/Articles</h1>
      <div className="flex flex-col gap-7 items-center w-full pb-5 px-5 sm:w-[70%] md:w-[100%] md:flex-row md:flex-wrap md:justify-center">
        {allPosts.map((post: Post, index) => (
          <div className="md:w-[45%] lg:w-[40%] xl:w-[35%] 2xl:w-[500px]">
            <Article
              image={!post.filename || post.filename === 'No file' ? null : post.filename}
              title={post.title}
              content={post.description}
              side={index % 2 === 0 ? 'left' : 'right'}
              post_id={post.id}
              key={`${post.id} - ${post.user_id}`}
              customLineClamp="md:line-clamp-2"
            />
          </div>
        ))}
      </div>
      <div className="flex">
        {user ?
          <>
            <AddPostNavigationButton styles="size-[51px] bottom-3 absolute bottom-6 left-5" />
            <ProfileButton />
          </>
          : <>
            <div className="flex gap-7 justify-center w-full m-5">
              <Link href='/login' className="underline justify-center flex">Login</Link>
              <Link href='/register' className="underline justify-center flex">Register</Link>
            </div>
          </>
        }
      </div>
    </div>
  )
}