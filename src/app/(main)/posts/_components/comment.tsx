import { CommentActions } from "./comment-actions";

interface CommentProps {
  id: string;
  createdAt: Date;
  body: string;
  author: string;
}

export function Comment({ id, createdAt, body, author }: CommentProps) {
  return (
    <div className="flex flex-col gap-4 border-border border-b py-3">
      <div>
        <p className="text-xs font-medium">
          {author}, {createdAt.toLocaleDateString()}
        </p>
        <div className="text-xs">{body}</div>
      </div>
      <CommentActions id={id} author={author} />
    </div>
  );
}
