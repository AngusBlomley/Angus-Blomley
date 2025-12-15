import React from "react";
import { WorldMap as World } from "react-svg-worldmap";
import { useDarkMode } from "@/contexts/darkModeContext";

interface VisitedCountry {
  country: string;
  coordinates: [number, number];
  description?: string;
}

interface WorldMapProps {
  visitedCountries: VisitedCountry[];
}

const WorldMap: React.FC<WorldMapProps> = ({ visitedCountries }) => {
  const { isDarkMode } = useDarkMode();

  const backgroundColor = isDarkMode
    ? "var(--background-color-dark)"
    : "var(--background-color-light)";

  const strokeColor = isDarkMode ? "#ffffff" : "#000000";
  const markerColor = isDarkMode ? "#ffffff" : "#000000";

  const mapData = visitedCountries.map((country) => ({
    country: country.country,
    value: 1,
  }));

  return (
    <div className="relative">
      <World
        borderColor={strokeColor}
        backgroundColor={backgroundColor}
        size="xxl"
        data={mapData}
        styleFunction={(context) => {
          const isVisited = visitedCountries.some(
            (vc) => vc.country === context.countryCode
          );
          const isHovered = context.countryValue !== undefined;
          return {
            fill: isVisited
              ? isHovered
                ? "#4a90e2"
                : "#2d74c4"
              : backgroundColor,
            stroke: strokeColor,
            strokeWidth: isHovered && isVisited ? 1.5 : 1,
            cursor: isVisited ? "pointer" : "default",
          };
        }}
        tooltipTextFunction={(context) => {
          const country = visitedCountries.find(
            (vc) => vc.country === context.countryCode
          );
          return country ? country.country : "";
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
        if (!location.description) return null;

        const x =
          location.country === "GBR"
            ? ((location.coordinates[1] + 180) / 360) * 60
            : ((location.coordinates[1] + 180) / 360) * 20;
        const y =
          location.country === "GBR"
            ? ((90 - location.coordinates[0]) / 180) * 110
            : ((90 - location.coordinates[0]) / 180) * 120;

        return (
          <div
            key={location.country}
            className="absolute transform"
            style={{
              left: `${x}%`,
              top: `${y}%`,
            }}
          >
            <div
              className="absolute z-10 w-64 p-4 text-sm rounded-lg shadow-lg border border-gray-200 border-opacity-30 hidden xl:block"
              style={{ backgroundColor: backgroundColor }}
            >
              <p className="mb-2">{location.description}</p>
              {location.country === "GBR" && (
                <a
                  href={`#${location.country.toLowerCase()}`}
                  className="text-blue-500 hover:text-blue-600"
                >
                  Learn more
                </a>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WorldMap;
