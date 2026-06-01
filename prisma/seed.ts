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
      address: "Yogyakarta, Indonesia",
      imageUrl:
        "https://res.cloudinary.com/dx02t0klu/image/upload/v1780289154/haniefam_me.jpg",
      imageUrlDark: null,
      aboutImageUrl:
        "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg",
      aboutImageUrlDark: null,
      resumeUrl:
        "https://docs.google.com/document/d/1_6dvxeFZYFrgJYghZl7uqzzRQ0wSyJpjhNuXBFU7I9Q/export?format=pdf",
      description:
        "Versatile Software Engineer specializing in Golang microservices, Android development with Kotlin & Jetpack Compose, and payment system integrations. Proven track record delivering scalable solutions in healthcare e-commerce and fintech — from SNAP BI and QRIS implementations to multi-platform e-wallet and virtual account integrations across major Indonesian banks.",
      aboutMe:
        "I'm a Software Engineer who thrives at the intersection of backend systems, mobile development, and financial technology. My journey spans crafting reliable Golang microservices, building modern Android experiences with Kotlin and Jetpack Compose, and navigating the complex world of payment integrations — from ShopeePay and QRIS to OVO, DANA, GoPay, and virtual accounts across BCA, BNI, and Mandiri. I genuinely enjoy tackling hard technical problems, whether that's modernizing legacy systems without disrupting live transactions or designing architectures that scale under real financial workloads. I care about clean, maintainable code and believe the best software is built through collaboration, curiosity, and a willingness to go deep on the details that matter.",
      stacks: [
        "Golang",
        "Kotlin",
        "Dart",
        "TypeScript",
        "JavaScript",
        "PHP",
        "REST API",
        "gRPC",
        "GraphQL",
        "Microservices",
        "Android",
        "Jetpack Compose",
        "Flutter",
        "Vue.js",
        "Nuxt.js",
        "React.js",
        "Next.js",
        "MySQL",
        "PostgreSQL",
        "SQL Server",
        "Git",
        "Supabase",
        "Odoo",
        ".NET Core",
        "Laravel",
        "Payment Gateway Integration",
        "SNAP BI",
        "E-Wallet Integration",
        "Virtual Account Integration",
      ],
      socialMedias: {
        create: [
          {
            platform: "GITHUB",
            url: "https://github.com/hilalhan",
          },
          {
            platform: "LINKEDIN",
            url: "https://www.linkedin.com/in/hilal-haniefam",
          },
        ],
      },
      educations: {
        create: [
          {
            institution: "Universitas Diponegoro",
            degree: "Bachelor of Computer Engineering, B.Tech",
            startDate: new Date("2018-08-01"),
            endDate: new Date("2022-11-30"),
          },
        ],
      },
      experience: {
        create: [
          {
            title: "Software Engineer",
            company: "K24Klik",
            startDate: new Date("2025-05-01"),
            endDate: null,
            description:
              "Serve as the primary engineer responsible for payment services across K24Klik platforms. Develop and maintain the next-generation K24Klik Android application using Kotlin and Jetpack Compose as part of the mobile app modernization initiative. Design, develop, and maintain Golang microservices supporting secure and reliable healthcare e-commerce transactions. Implement SNAP BI integrations, including ShopeePay and QRIS BCA payment channels. Manage payment integrations across OVO, DANA, GoPay, Credit Card, and Virtual Account services (BCA, BNI, and Mandiri). Collaborate with banking and payment partners, including BRImo integration initiatives. Investigate and resolve production issues, perform root-cause analysis, and ensure transaction reliability and system stability. Maintain and enhance legacy systems built with Yii 1 and MySQL while ensuring compatibility with modern microservices.",
            stacks: [
              "Golang",
              "Kotlin",
              "Jetpack Compose",
              "Android",
              "MySQL",
              "Microservices",
              "SNAP BI",
              "Yii 1",
            ],
            location: "Yogyakarta, Indonesia",
          },
          {
            title: "Software Engineer",
            company: "Refactory",
            startDate: new Date("2023-05-01"),
            endDate: new Date("2025-05-31"),
            description:
              "Collaborated with cross-functional teams to develop web, mobile, and backend applications for clients across multiple industries. Developed and maintained applications using Golang, Flutter, Vue.js, Next.js, Laravel, and .NET technologies. Contributed to system architecture discussions, feature development, bug fixing, and application maintenance. Implemented unit testing and promoted code maintainability through reusable and scalable development practices. Delivered projects for e-commerce, HRIS, procurement, financial services, and enterprise platforms.",
            stacks: [
              "Golang",
              "Flutter",
              "Vue.js",
              "Next.js",
              "Laravel",
              ".NET Core",
              "TypeScript",
            ],
            location: "Sleman, Yogyakarta",
          },
          {
            title: "Back End Developer Intern",
            company: "PT. Pelita Transfer Nusantara",
            startDate: new Date("2020-09-01"),
            endDate: new Date("2020-11-30"),
            description:
              "Maintenance and problem solving on the back end development. Created several APIs for new features. Worked with senior members of the team developing rough ideation on future features or ideas.",
            stacks: [],
            location: "Online",
          },
        ],
      },
      projects: {
        create: [
          {
            title: "Xapiens – Mutual Fund Rating Web App (PEFINDO)",
            description:
              "Designed and implemented scalable backend architecture to support automated mutual fund rating. Developed gRPC and GraphQL APIs for seamless data integration and retrieval. Designed and optimized PostgreSQL schema to manage large-scale financial data. Built user authentication and role-based access control for secure system use. Implemented approval workflows and automated fund rating calculations. Integrated secure file uploads using MinIO and automated email notifications via SMTP.",
            stacks: ["Golang", "gRPC", "GraphQL", "PostgreSQL", "MinIO"],
          },
          {
            title: "SEV-2 – Project Management App",
            description:
              "Developed and optimized RPCs for search and detail functionalities. Contributed backend logic for mobile application integration.",
            stacks: ["PostgreSQL", "Supabase"],
          },
          {
            title: "Cellcast – Messaging API Platform",
            description:
              "Built a scalable SMS API service enabling instant message delivery via Quick SMS. Implemented secure API token generation and user access control. Integrated AWS Lambda for high performance and global availability. Developed a detailed reporting system for delivery tracking and usage analytics. Collaborated internationally, contributing across both frontend and backend layers.",
            stacks: ["Next.js", "Express.js", "MongoDB", "AWS Lambda"],
          },
          {
            title: "What The Fun – Place and Food Review App",
            description:
              "Developed AI-powered place/food recommendation features with 'Ask Mocha'. Integrated social platform APIs from TikTok, Instagram, and Facebook.",
            stacks: ["Flutter", "Supabase"],
          },
          {
            title: "MulaiKelola Web CMS – Data Management Platform",
            description:
              "Built and integrated content management modules. Contributed suggestions for improved UX and scalability.",
            stacks: ["Supabase", "Next.js"],
          },
          {
            title: "HRIS MYTOK Mobile App – HR App",
            description:
              "Developed car booking, approval workflows, and biometric login features. Supported maintenance and collaborated on feature enhancements.",
            stacks: ["Flutter", "Flutter Bloc"],
          },
          {
            title: "MYTOK Web CMS – HR CMS",
            description:
              "Refactored API and web components for maintainability. Delivered ongoing maintenance and bug fixes.",
            stacks: ["Laravel"],
          },
          {
            title: "JIEP – HRIS App",
            description:
              "Created APIs for leave and attendance features. Collaborated with the team to resolve bugs and ensure consistent API quality.",
            stacks: ["Odoo"],
          },
          {
            title: "Gaya Motor E-Procurement – Procurement Web App",
            description:
              "Built reusable components and translated Figma designs into responsive interfaces. Developed core features for procurement registration and vendor invitations.",
            stacks: [".NET Blazor"],
          },
          {
            title: "Portal Vendor – Procurement Web App",
            description:
              "Implemented new features for vendor registration, document approval, and invoicing. Resolved bugs and ensured application stability. Worked across frontend and backend layers.",
            stacks: ["Vue.js", ".NET Core"],
          },
          {
            title: "Diklik – E-commerce Web App",
            description:
              "Integrated APIs into the frontend using Supabase. Supported and maintained live applications. Participated in solution-oriented technical discussions.",
            stacks: ["Supabase"],
          },
          {
            title: "AladinMall – E-commerce Platform",
            description:
              "Integrated APIs into the interface using Supabase Client. Supported and maintained frontend applications across web and mobile. Engaged in team discussions to identify optimal solutions.",
            stacks: ["Supabase"],
          },
        ],
      },
    },
  });

  console.log(`Seeded user: ${user.name} (${user.id})`);
  console.log(`  - 2 social medias`);
  console.log(`  - 1 education`);
  console.log(`  - 3 experiences`);
  console.log(`  - 12 projects`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
