import db from "@/db";

export async function getCommentsByPost(post: string) {
  const comments = await db.comment.findMany({ where: { post: post } });
  return comments;
}

export async function createComment(data: {
  author: string;
  body: string;
  post: string;
}) {
  await db.comment.create({ data });
}
