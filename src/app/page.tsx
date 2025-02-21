// import { AuthScreen } from "@/features/auth/components/auth-screen";

"use client"

import { Button } from "@/components/ui/button";
import { useAuthActions } from "@convex-dev/auth/react"

export default function Home() {

  const { signOut } = useAuthActions();

  return (
    <>
      <div>
        Jai SitaRam <br />
        <Button onClick={() => {signOut()}}>
          Logout
        </Button>
      </div>
    </>
  )
}