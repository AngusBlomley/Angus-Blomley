import { useState, useEffect } from "react";

export function useAsciiAnimation(text: string) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex >= text.length) return;

    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => {
        const newIndex = prev + 20;
        setDisplayedText(text.substring(0, newIndex));
        return newIndex;
      });
    }, 1);

    return () => clearInterval(intervalId);
  }, [currentIndex, text]);

  return displayedText;
}
