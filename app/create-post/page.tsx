"use client";
import { createPost } from "@/app/lib/actions/createPost";
import React, { useState } from "react";
import Link from "next/link";

export default function Page() {
  const [task, setTask] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await createPost(task);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col gap-3 p-16 justify-between items-center w-[500px] mx-8">
      <div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="task"
              className="block text-lg font-medium text-gray-700"
            >
              Content
            </label>
            <textarea
              id="task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              rows={2}
              className="m-1 p-2 block w-full rounded-md border-gray-300 shadow-sm border-2 focus:ring-blue-500 focus:border-black"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-md font-medium rounded-md text-white ${
              isSubmitting
                ? "bg-blue-300 hover:bg-blue-300"
                : "bg-slate-600 hover:bg-slate-700"
            } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out`}
          >
            {isSubmitting ? "Submitting..." : "Create Post"}
          </button>
        </form>
      </div>
      <Link
        href="/all"
        className="border border-blue-500 text-blue-500 rounded-md px-4 py-2 hover:bg-blue-500 hover:text-white hover:border-transparent transition-colors duration-300"
      >
        Go To All Posts
      </Link>
    </div>
  );
}
