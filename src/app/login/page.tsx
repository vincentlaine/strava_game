"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Button onClick={() => signIn("strava", { callbackUrl: "/dashboard" })}>
        Se connecter avec Strava
      </Button>
    </main>
  );
}
