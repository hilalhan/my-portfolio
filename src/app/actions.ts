"use server";

import { prisma } from "@/lib/prisma";
import { ICommonResponse } from "../types";
import { Experience, SocialMedia, User } from "@prisma/client";

export async function getUser(): Promise<ICommonResponse<User>> {
  const response: ICommonResponse<User> = {
    status: 200,
    message: "success",
  };

  try {
    const user = await prisma.user.findFirst();
    if (!user) {
      response.status = 404;
      response.message = "User not found";
      return response;
    }
    response.data = user;
    return response;
  } catch (error) {
    console.error("Error fetching user:", error);
    response.status = 500;
    response.message = "Internal Server Error";
    return response;
  }
}

export async function getSocialMedias(): Promise<
  ICommonResponse<SocialMedia[]>
> {
  const response: ICommonResponse<SocialMedia[]> = {
    status: 200,
    message: "success",
  };

  try {
    const socialMedias = await prisma.socialMedia.findMany();
    if (!socialMedias) {
      response.status = 404;
      response.message = "Social Media not found";
      return response;
    }
    response.data = socialMedias;
    return response;
  } catch (error) {
    console.error("Error fetching social media:", error);
    response.status = 500;
    response.message = "Internal Server Error";
    return response;
  }
}

export async function getExperiences(): Promise<ICommonResponse<Experience[]>> {
  const response: ICommonResponse<Experience[]> = {
    status: 200,
    message: "success",
  };
  try {
    const experiences = await prisma.experience.findMany({
      orderBy: {
        startDate: "asc",
      },
    });
    if (!experiences) {
      response.status = 404;
      response.message = "Experiences not found";
      return response;
    }
    response.data = experiences;
    return response;
  } catch (error) {
    console.error("Error fetching experiences:", error);
    response.status = 500;
    response.message = "Internal Server Error";
    return response;
  }
}
