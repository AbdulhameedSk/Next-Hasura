"use server";

import { CREATE_POST } from "../graphql-operations";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import { serverClient } from "../apollo-server";

export async function createTodo(task: string, img: string) {
  const session = await getServerSession(authOptions);
  if (!session?.user || !session.user?.id) {
    return {
      message: "Unauthenticated request",
    };
  }

  const authorId = session.user.id;

  await serverClient.mutate({
    mutation: CREATE_POST,
    variables: {
      task,
    },
  });

  return {
    message: "Done",
  };
}
