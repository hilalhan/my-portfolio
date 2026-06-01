"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Experience, Project, User } from "@prisma/client";
import { useTheme } from "next-themes";

interface IProps {
  user: User;
  experiences: Experience[] | undefined;
  projects: Project[] | undefined;
}

export default function About({ user, experiences, projects }: IProps) {
  const { resolvedTheme } = useTheme();

  const aboutImage =
    resolvedTheme === "dark" && user.aboutImageUrlDark
      ? user.aboutImageUrlDark
      : user.aboutImageUrl ?? null;

  const yearsExperience = experiences?.length
    ? Math.floor(
        (Date.now() - Math.min(...experiences.map((e) => new Date(e.startDate).getTime()))) /
          (1000 * 60 * 60 * 24 * 365)
      )
    : 0;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="about" className="py-20">
      <div className="container px-4 mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-screen-xl mx-auto"
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              {user.aboutMe}
            </p>
          </motion.div>

          <div className={`grid grid-cols-1 gap-12 items-center ${aboutImage ? "lg:grid-cols-2" : ""}`}>
            {/* Left Column: Image (only rendered if aboutImage is set) */}
            {aboutImage && (
              <motion.div variants={itemVariants} className="relative">
                <div className="relative overflow-hidden rounded-lg h-[500px]">
                  <Image
                    src={aboutImage}
                    alt="Working on laptop"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-primary/10 rounded-full hidden md:block"></div>
              </motion.div>
            )}

            {/* Right Column: Content */}
            <motion.div
              variants={itemVariants}
              className={!aboutImage ? "max-w-2xl mx-auto w-full" : ""}
            >
              <h3 className="text-2xl font-bold mb-4">
                A passionate{" "}
                <span className="text-primary">
                  {user.jobTitle?.toLowerCase()}
                </span>{" "}
                based in {user.address}
              </h3>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="font-medium">Name:</p>
                  <p className="text-muted-foreground">{user.name}</p>
                </div>
                <div>
                  <p className="font-medium">Email:</p>
                  <p className="text-muted-foreground">{user.email}</p>
                </div>
                <div>
                  <p className="font-medium">Location:</p>
                  <p className="text-muted-foreground">{user.address}</p>
                </div>
                <div>
                  <p className="font-medium">Availability:</p>
                  <p className="text-muted-foreground">Open to opportunities</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {user.stacks?.map((stack, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="text-sm font-medium"
                  >
                    {stack}
                  </Badge>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Stats Cards */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
          >
            <motion.div variants={itemVariants}>
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-4xl font-bold text-primary mb-2">{yearsExperience}+</h3>
                  <p className="text-muted-foreground">Years Experience</p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-4xl font-bold text-primary mb-2">{projects?.length ?? 0}+</h3>
                  <p className="text-muted-foreground">Projects Completed</p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-4xl font-bold text-primary mb-2">{user.stacks?.length ?? 0}+</h3>
                  <p className="text-muted-foreground">Technologies</p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
