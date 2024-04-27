"use server";

import { createComment, deleteComment, getComment } from "@/db/utils";
import { currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export async function deleteCommentAction({
  id,
  author,
}: {
  id: string;
  author: string;
}) {
  const user = await currentUser();

  if (!user) return { error: "Unauthorized!" };

  try {
    const comment = await getComment(id);

    if (!comment) return { error: "Comment does not exist!" };

    if (comment.author !== author) return { error: "Unauthorized!" };

    await deleteComment(id);

    revalidatePath("/comments");

    return { success: "Message successfully deleted!" };
  } catch (err) {
    const error = err as Error;
    return { error: error.message };
  }
}
