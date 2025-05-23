"use client";

import { useEffect } from "react";
import { Hero } from "../sections";
import { ThemeProvider } from "next-themes";
import { SocialMedia, User } from "@prisma/client";

interface IProps {
  user: User;
  socialMedias: SocialMedia[] | undefined;
}

export default function Contents({ user, socialMedias }: IProps) {
  // Smooth scroll implementation for navigation
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" &&
        target.getAttribute("href")?.startsWith("#")
      ) {
        e.preventDefault();
        const id = target.getAttribute("href")?.substring(1);
        const element = document.getElementById(id || "");
        if (element) {
          window.scrollTo({
            behavior: "smooth",
            top: element.offsetTop - 80,
          });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  return (
    <ThemeProvider>
      <main className="min-h-screen bg-background">
        <div className="max-w-screen-xl mx-auto">
          <Hero user={user} socialMedias={socialMedias} />
        </div>
      </main>
    </ThemeProvider>
  );
}
