"use client";

import { About, Hero } from "../sections";
import { ThemeProvider } from "next-themes";
import { SocialMedia, User } from "@prisma/client";

interface IProps {
  user: User;
  socialMedias: SocialMedia[] | undefined;
}

export default function Contents({ user, socialMedias }: IProps) {
  return (
    <ThemeProvider>
      <main className="min-h-screen bg-background">
        <div className="max-w-screen-xl mx-auto">
          <Hero user={user} socialMedias={socialMedias} />
          <About user={user} />
        </div>
      </main>
    </ThemeProvider>
  );
}
