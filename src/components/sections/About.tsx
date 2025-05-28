"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { User } from "@prisma/client";

interface IProps {
  user: User;
}

export default function About({ user }: IProps) {
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Image */}
            <motion.div variants={itemVariants} className="relative">
              <div className="relative overflow-hidden rounded-lg h-[500px]">
                <Image
                  src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg"
                  alt="Working on laptop"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary rounded-full hidden md:block"></div>
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-primary/10 rounded-full hidden md:block"></div>
            </motion.div>

            {/* Right Column: Content */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-4">
                A passionate{" "}
                <span className="text-primary">
                  {user.jobTitle?.toLowerCase()}
                </span>{" "}
                based in {user.address}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {user.description}
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                When I&apos;m not coding, you&apos;ll find me exploring new
                technologies, contributing to open source projects, or enjoying
                the outdoors. I believe in continuous learning and sharing
                knowledge with the development community.
              </p>

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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
          >
            <motion.div variants={itemVariants}>
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-4xl font-bold text-primary mb-2">2+</h3>
                  <p className="text-muted-foreground">Years Experience</p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-4xl font-bold text-primary mb-2">12+</h3>
                  <p className="text-muted-foreground">Projects Completed</p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-4xl font-bold text-primary mb-2">10+</h3>
                  <p className="text-muted-foreground">Happy Clients</p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-4xl font-bold text-primary mb-2">12+</h3>
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
