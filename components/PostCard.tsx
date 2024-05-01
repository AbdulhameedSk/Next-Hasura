import React from "react";
import { serverClient } from "@/app/lib/apollo-server";
interface Post {
  id: number;
  task: string;
  created_at: string;
  user_id: number;
}

const PostCard = ({ post }: { post: Post }) => {
  return (
    <div className="max-w-sm w-2/3 h-96 rounded overflow-hidden shadow-lg overflow-y-scroll m-4 scrollbar scrollbar-track-white ">
      <img
        src="https://cdn.imagecomics.com/assets/i/series/1034550/DrawingBlood01secondptg_cover_147581a7be02116581a0f653533a26b1.jpg"
        alt="TEST IMG"
      />
      <div className="px-6 py-4 flex  justify-between items-center">
        <p className="text-gray-700 text-base">NEWS: {post.task}</p>
      </div>

      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Created at: {new Date(post.created_at).toLocaleString()}
        </span>
      </div>
    </div>
  );
};

export default PostCard;
