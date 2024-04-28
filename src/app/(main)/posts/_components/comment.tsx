interface CommentProps {
  createdAt: Date;
  body: string;
  author: string;
}

export function Comment({ createdAt, body, author }: CommentProps) {
  return (
    <div className="flex flex-col gap-2 border-border border-b py-3">
      <p className="text-xs font-medium flex items-center gap-1">
        {author}, at: {createdAt.toLocaleDateString()}
      </p>
      <div className="text-xs">{body}</div>
    </div>
  );
}
