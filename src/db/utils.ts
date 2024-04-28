import db from "@/db";

export async function getComment(id: string) {
  const comment = await db.comment.findUnique({ where: { id: id } });
  return comment;
}

export async function deleteComment(id: string) {
  await db.comment.delete({ where: { id: id } });
}

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
