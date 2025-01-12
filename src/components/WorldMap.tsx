import React, { useState } from "react";
import { WorldMap as World } from "react-svg-worldmap";
import { useDarkMode } from "@/contexts/darkModeContext";

interface Props {
  visitedCountries: {
    country: string;
    coordinates: [number, number];
    description?: string;
  }[];
}

const WorldMap: React.FC<Props> = ({ visitedCountries }) => {
  const [activeTooltip, setActiveTooltip] = useState<string>("USA");
  const { isDarkMode } = useDarkMode();

  const backgroundColor = isDarkMode
    ? "var(--background-color-dark)"
    : "var(--background-color-light)";

  const strokeColor = isDarkMode ? "#ffffff" : "#000000";
  const markerColor = isDarkMode ? "#ffffff" : "#000000";

  return (
    <div className="relative">
      <World
        borderColor={strokeColor}
        backgroundColor={backgroundColor}
        size="xxl"
        data={[]}
        styleFunction={(context) => {
          const isVisited = visitedCountries.some(
            (vc) => vc.country === context.countryCode
          );
          const isHovered = context.countryValue !== undefined;
          return {
            fill: backgroundColor,
            stroke: strokeColor,
            strokeWidth: isHovered && isVisited ? 1.5 : 1,
            cursor: isVisited ? "pointer" : "default",
          };
        }}
        onClickFunction={(context) => {
          const country = visitedCountries.find(
            (vc) => vc.country === context.countryCode
          );
          if (country) {
            setActiveTooltip(country.country);
          }
        }}
      />

      <svg className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {visitedCountries.map((location) => (
          <g key={location.country}>
            <circle
              cx={`${(location.coordinates[1] + 180) * (100 / 360)}%`}
              cy={`${(133 - location.coordinates[0]) * (100 / 180)}%`}
              r="4"
              fill={markerColor}
              className="animate-pulse"
            />
          </g>
        ))}
      </svg>

      {visitedCountries.map((location) => {
        const isActive = location.country === activeTooltip;
        const x = ((location.coordinates[1] + 180) / 360) * 20;
        const y = ((90 - location.coordinates[0]) / 180) * 130;

        return (
          location.description &&
          isActive && (
            <div
              key={location.country}
              className="absolute transform"
              style={{
                left: `${x}%`,
                top: `${y}%`,
              }}
            >
              <div
                className="absolute z-10 w-64 p-4 text-sm rounded-lg shadow-lg border border-gray-200 border-opacity-30"
                style={{ backgroundColor: backgroundColor }}
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <p className="mb-2">{location.description}</p>
                {location.country === "USA" && (
                  <a
                    href="#usa-experience"
                    className="text-blue-500 hover:text-blue-600"
                  >
                    Learn more →
                  </a>
                )}
              </div>
            </div>
          )
        );
      })}
    </div>
  );
};

export default WorldMap;
