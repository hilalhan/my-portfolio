import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.upsert({
    where: { email: "hhaniefam10@gmail.com" },
    update: {},
    create: {
      name: "Hilal Haniefam",
      email: "hhaniefam10@gmail.com",
      jobTitle: "Software Engineer",
      socialMedias: {
        create: [
          { platform: "GITHUB", url: "https://github.com/haniefam" },
          { platform: "LINKEDIN", url: "https://linkedin.com/in/haniefam" },
        ],
      },
    },
  });

  console.log(`Seeded user: ${user.name} (${user.id})`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
