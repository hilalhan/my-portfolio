import Header from "../../components/layouts/Header";
import { configMetadata } from "@/config";
import { getExperiences, getSocialMedias, getUser } from "../actions";
import Contents from "@/components/layouts/Contents";

const { navItems } = configMetadata;

export default async function Home() {
  const userResponse = await getUser();
  const socialMediaResponse = await getSocialMedias();
  const experienceResponse = await getExperiences();
  const { message, status, data: user } = userResponse;
  const { data: socialMedias } = socialMediaResponse;
  const { data: experiences } = experienceResponse;

  if (status !== 200 || !user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold text-red-500">{message}</h1>
      </div>
    );
  }

  return (
    <div>
      <Header navItems={navItems} user={user} />
      <main>
        <Contents
          user={user}
          socialMedias={socialMedias}
          experiences={experiences}
        />
      </main>
    </div>
  );
}
