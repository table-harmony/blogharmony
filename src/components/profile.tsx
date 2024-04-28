import { SignInButton, UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";

import { Button } from "@/components/ui/button";

export async function Profile() {
  const user = await currentUser();

  return (
    <>
      {user && <UserButton />}
      {!user && (
        <SignInButton>
          <Button size="sm">Sign in</Button>
        </SignInButton>
      )}
    </>
  );
}
