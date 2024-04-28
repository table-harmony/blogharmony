import db from "@/db";

export async function getPosts() {
  const posts = await db.post.findMany({});
  return posts;
}

export async function getPost(postId: string) {
  const post = await db.post.findUnique({ where: { id: postId } });
  return post;
}

export async function getAuthors() {
  const authors = await db.author.findMany({});
  return authors;
}

export async function getAuthor(authorId: string) {
  const author = await db.author.findUnique({ where: { id: authorId } });
  return author;
}
