import { allTodo } from "@/app/lib/actions/all";
import PostCard from "@/components/PostCard";

async function Content(){
  const posts =await allTodo();
  return (

    <div className="flex">
      {Array.isArray(posts) &&
        posts.map((post) => <PostCard key={post.id} post={post} />)}
    </div>
  );
}

export default function Page() {
  return (
    <div className="container mx-auto">
      <Content />
    </div>
  );
}
