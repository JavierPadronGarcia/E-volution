import Article from "@/components/article";
import { getAllPosts } from "@/services/posts.service";
import { Post } from "../types/types";
import AddPostNavigationButton from "@/components/AddPostNavigationButton";
import ProfileButton from "@/components/profileButton";

export default async function NewsPage() {

  const allPosts: Post[] = await getAllPosts();

  return (
    <div className="flex flex-col gap-10 relative w-full">
      <h1 className="text-center mt-10 font-bold text-xl">News/Articles</h1>
      <div className="flex flex-col gap-7 items-center w-full pb-5 pl-5 pr-5">
        {allPosts.map((post: Post, index) => (
          <Article
            image={!post.filename || post.filename === 'No file' ? null : post.filename}
            title={post.title}
            content={post.description}
            side={index % 2 === 0 ? 'left' : 'right'}
            post_id={post.id}
          />
        ))}
      </div>
      <div className="flex">
        <AddPostNavigationButton styles="size-[51px] bottom-3 absolute bottom-6 left-5" />
      <ProfileButton/>
      </div>
    </div>
  )
}