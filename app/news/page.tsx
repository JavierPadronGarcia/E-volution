import Article from "@/components/article";
import { getAllPosts } from "@/services/posts.service";
import { Post } from "../types/types";
import AddPostNavigationButton from "@/components/AddPostNavigationButton";

export default async function NewsPage() {

  const allPosts: Post[] = await getAllPosts();

  return (
    <div className="flex flex-col gap-10 relative w-full">
      <h1 className="text-center mt-10 font-bold text-xl">News/Articles</h1>
      <div className="flex flex-col gap-7 items-center w-full pb-5">
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
      <AddPostNavigationButton styles="size-[51px] fixed bottom-3 left-3" />
    </div>
  )
}