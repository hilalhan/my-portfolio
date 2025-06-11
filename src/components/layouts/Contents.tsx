"use client";

import { About, Hero, ExperienceTimeline } from "../sections";
import { ThemeProvider } from "next-themes";
import { Experience, SocialMedia, User } from "@prisma/client";

interface IProps {
  user: User;
  socialMedias: SocialMedia[] | undefined;
  experiences: Experience[] | undefined;
}

export default function Contents({ user, socialMedias, experiences }: IProps) {
  return (
    <ThemeProvider>
      <main className="min-h-screen bg-background">
        <div className="max-w-screen-xl mx-auto">
          <Hero user={user} socialMedias={socialMedias} />
          <About user={user} />
          <ExperienceTimeline timelineData={experiences} />
        </div>
      </main>
    </ThemeProvider>
  );
}
