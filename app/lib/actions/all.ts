"use server";
import { GET_POSTS } from "../graphql-operations";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import { serverClient } from "../apollo-server";

export async function allTodo() {
  const session = await getServerSession(authOptions);
  if (!session?.user || !session.user?.id) {
    return {
      message: "Unauthenticated request",
    };
  }

  const res = await serverClient.query({
    query: GET_POSTS,
  });

  console.log(res.data.todo);

  return res.data.todo;
}