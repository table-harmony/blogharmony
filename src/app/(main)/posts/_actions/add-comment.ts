"use server";

import { createComment } from "@/db/utils";
import { currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export async function AddCommentAction({
  body,
  post,
}: {
  body: string;
  post: string;
}) {
  const user = await currentUser();

  if (!user) return { error: "Unauthorized!" };

  const author = user.emailAddresses[0].emailAddress;

  try {
    await createComment({
      author: author,
      body: body,
      post: post,
    });

    revalidatePath("/comments");

    return { success: "Message successfully created!" };
  } catch (err) {
    const error = err as Error;
    return { error: error.message };
  }
}
