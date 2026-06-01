"use client";

import { About, Hero, ExperienceTimeline, Projects } from "../sections";
import { ThemeProvider } from "next-themes";
import { Experience, Project, SocialMedia, User } from "@prisma/client";

interface IProps {
  user: User;
  socialMedias: SocialMedia[] | undefined;
  experiences: Experience[] | undefined;
  projects: Project[] | undefined;
}

export default function Contents({ user, socialMedias, experiences, projects }: IProps) {
  return (
    <ThemeProvider>
      <main className="min-h-screen bg-background">
        <div className="max-w-screen-xl mx-auto">
          <Hero user={user} socialMedias={socialMedias} />
          <About user={user} experiences={experiences} projects={projects} />
          <ExperienceTimeline timelineData={experiences} />
          <Projects projects={projects} />
        </div>
      </main>
    </ThemeProvider>
  );
}
