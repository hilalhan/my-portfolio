import {
  IconGithub,
  IconLinkedin,
  IconStackoverflow,
} from "@/components/icons";
import { PlatformType } from "@prisma/client";

export function getPlatformIcon(platform: PlatformType): React.ReactNode {
  switch (platform) {
    case PlatformType.GITHUB:
      return <IconGithub />;
    case PlatformType.LINKEDIN:
      return <IconLinkedin />;
    case PlatformType.STACKOVERFLOW:
      return <IconStackoverflow />;
    default:
      return null;
  }
}
