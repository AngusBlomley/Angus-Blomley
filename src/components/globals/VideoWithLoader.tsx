import React, { useState, VideoHTMLAttributes } from "react";

interface VideoWithLoaderProps extends VideoHTMLAttributes<HTMLVideoElement> {
  skipLoader?: boolean;
  width: number | string;
  height: number | string;
}

const SMALL_AREA = 150 * 150;

const VideoWithLoader: React.FC<VideoWithLoaderProps> = ({
  skipLoader,
  width,
  height,
  className = "",
  onLoadedData,
  ...props
}) => {
  const [loaded, setLoaded] = useState(false);
  const area = Number(width) * Number(height);
  const shouldSkip = skipLoader || (area && area <= SMALL_AREA);

  const handleLoadedData = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    setLoaded(true);
    onLoadedData && onLoadedData(e);
  };

  return (
    <div className="relative inline-block" style={{ width, height }}>
      {!shouldSkip && !loaded && (
        <div className="absolute inset-0 bg-neutral-300 animate-pulse rounded" />
      )}
      <video
        width={width}
        height={height}
        onLoadedData={handleLoadedData}
        className={className + (shouldSkip || loaded ? "" : " opacity-0")}
        {...props}
      />
    </div>
  );
};

export default VideoWithLoader;
