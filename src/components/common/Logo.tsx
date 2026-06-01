import { cn } from "@/lib/utils";

interface IProps {
  className?: string;
}

export default function Logo({ className }: IProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-10 h-10", className)}
      aria-label="Hilal Haniefam"
    >
      <defs>
        <linearGradient id="hh-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(var(--primary))" />
          <stop offset="100%" stopColor="hsl(var(--primary) / 0.72)" />
        </linearGradient>
      </defs>

      {/* Badge background */}
      <rect width="48" height="48" rx="12" fill="url(#hh-bg)" />

      {/* HH monogram — two H's sharing the middle vertical stroke */}
      <g
        stroke="hsl(var(--primary-foreground))"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Left vertical (H1) */}
        <line x1="10" y1="13" x2="10" y2="35" />
        {/* Shared middle vertical */}
        <line x1="24" y1="13" x2="24" y2="35" />
        {/* Right vertical (H2) */}
        <line x1="38" y1="13" x2="38" y2="35" />
        {/* Left crossbar */}
        <line x1="10" y1="24" x2="24" y2="24" />
        {/* Right crossbar */}
        <line x1="24" y1="24" x2="38" y2="24" />
      </g>

      {/* Subtle accent dot — bottom-right corner of badge */}
      <circle cx="38" cy="37" r="2.2" fill="hsl(var(--primary-foreground) / 0.5)" />
    </svg>
  );
}
