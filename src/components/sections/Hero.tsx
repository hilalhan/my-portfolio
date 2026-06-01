"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { SocialMedia, User } from "@prisma/client";
import { getPlatformIcon } from "@/lib/icon";
import { useTheme } from "next-themes";

interface IProps {
  user: User;
  socialMedias: SocialMedia[] | undefined;
}

export default function Hero({ user, socialMedias }: IProps) {
  const [isVisible, setIsVisible] = useState(false);
  const { resolvedTheme } = useTheme();

  const profileImage =
    resolvedTheme === "dark" && user.imageUrlDark
      ? user.imageUrlDark
      : (user.imageUrl ?? "/me.jpeg");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-16">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              {user.jobTitle}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              <span className="mr-2">Hi, I&apos;m</span>
              <TypeAnimation
                sequence={[user.name, 2000]}
                speed={50}
                className="text-primary"
                wrapper="span"
                cursor={false}
              />
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold flex items-center mb-6">
              <span className="mr-2">I</span>
              <TypeAnimation
                sequence={[
                  "craft immersive web experiences.",
                  1500,
                  "build impactful mobile apps.",
                  1500,
                  "engineer scalable APIs.",
                  1500,
                ]}
                wrapper="span"
                speed={30}
                deletionSpeed={10}
                repeat={Infinity}
                cursor={true}
                className="text-primary"
              />
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed">
              {user.description}
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <Button size="lg" className="rounded-full gap-2" asChild>
                <Link href="#projects">
                  View Projects <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full" asChild>
                <a href={`mailto:${user.email}`}>
                  Contact Me
                </a>
              </Button>
            </div>

            <div className="flex items-center gap-4">
              {socialMedias?.map(({ id, platform, url }) => {
                const Icon = getPlatformIcon(platform);
                if (!Icon) return null;

                return (
                  <Button
                    key={id}
                    variant="ghost"
                    size="icon"
                    className="rounded-full"
                    asChild
                  >
                    <Link
                      href={url ?? "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={platform}
                    >
                      {Icon}
                    </Link>
                  </Button>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden bg-primary/10 border-4 border-primary/20">
              <Image
                src={profileImage}
                alt="Profile Image"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.6,
            delay: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="flex justify-center mt-16"
        >
          <ChevronDown className="h-8 w-8 text-muted-foreground animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
