import { getCommentsByPost } from "@/db/utils";

import { Comment } from "./comment";
import { AddCommentForm } from "./add-comment";
import { SignedIn } from "@clerk/nextjs";

export async function CommentList({ post }: { post: string }) {
  const comments = (await getCommentsByPost(post)).reverse();

  return (
    <div>
      <p className="text-lg font-bold">{comments.length} comments: </p>
      <SignedIn>
        <AddCommentForm post={post} />
      </SignedIn>
      {comments.length !== 0 && (
        <div className="flex flex-col">
          {comments.map((comment) => {
            const { id, createdAt, body, author } = comment;
            return (
              <span key={comment.id}>
                <Comment
                  id={id}
                  createdAt={createdAt}
                  body={body}
                  author={author}
                />
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
}
