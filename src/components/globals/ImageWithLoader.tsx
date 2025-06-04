import React, { useState } from "react";
import Image, { ImageProps } from "next/image";

interface ImageWithLoaderProps extends ImageProps {
  skipLoader?: boolean;
}

const SMALL_AREA = 150 * 150; // threshold for small images

const ImageWithLoader: React.FC<ImageWithLoaderProps> = ({
  skipLoader,
  className = "",
  ...props
}) => {
  const [loaded, setLoaded] = useState(false);
  const area =
    typeof props.width === "number" && typeof props.height === "number"
      ? props.width * props.height
      : Number(props.width) * Number(props.height);
  const shouldSkip =
    skipLoader || (area && area <= SMALL_AREA);

  return (
    <div
      className="relative inline-block"
      style={{ width: props.width, height: props.height }}
    >
      {!shouldSkip && !loaded && (
        <div className="absolute inset-0 bg-neutral-300 animate-pulse rounded" />
      )}
      <Image
        {...props}
        className={
          className + (shouldSkip || loaded ? "" : " opacity-0")
        }
        onLoadingComplete={() => setLoaded(true)}
      />
    </div>
  );
};

export default ImageWithLoader;
