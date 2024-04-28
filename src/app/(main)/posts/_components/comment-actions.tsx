"use client";

import { useUser } from "@clerk/nextjs";

import { deleteCommentAction } from "../_actions/delete-comment";

import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useToast } from "@/components/ui/use-toast";
import { TrashIcon } from "lucide-react";

interface CommentActionsProps {
  id: string;
  author: string;
}

export function CommentActions({ id, author }: CommentActionsProps) {
  const { user } = useUser();
  const { toast } = useToast();

  if (
    !user ||
    user.emailAddresses.filter((item) => item.emailAddress === author)
      .length === 0
  )
    return;

  const onDelete = () => {
    deleteCommentAction({ id, author })
      .then((data) => {
        if (data?.error) {
          toast({
            variant: "destructive",
            description: data.error,
          });
        }

        if (data?.success) toast({ description: data.success });
      })
      .catch(() =>
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
        })
      );
  };

  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="ghost" size="icon">
            <TrashIcon className="h-4 w-4" />
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              message.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={() => onDelete()}>
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
