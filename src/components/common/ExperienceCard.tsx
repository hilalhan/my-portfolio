import React from "react";
import { MapPin } from "lucide-react";
import { Experience } from "@prisma/client";

type ExperienceCardProps = {
  item: Experience;
  colors: {
    border: string;
  };
};

export default function ExperienceCard({ item, colors }: ExperienceCardProps) {
  return (
    <div
      className={`bg-gray-800 rounded-lg p-6 border-l-4 ${colors.border} hover:bg-gray-750 transition-colors duration-300 mt-8`}
    >
      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
      <h4 className="text-lg font-semibold text-gray-300 mb-3">
        {item.company}
      </h4>
      <div className="flex items-center text-gray-400 mb-4">
        <MapPin size={16} className="mr-2" />
        <span className="text-sm">{item.location}</span>
      </div>
      {item.description && (
        <p className="text-gray-300 text-sm leading-relaxed mb-4">
          {item.description}
        </p>
      )}
      {item.stacks?.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {item.stacks.map((stack, stackIndex) => (
            <span
              key={stackIndex}
              className="px-3 py-1 bg-gray-700 text-gray-200 text-xs rounded-full"
            >
              {stack}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
