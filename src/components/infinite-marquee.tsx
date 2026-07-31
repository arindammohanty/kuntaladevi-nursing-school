"use client";

import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useTransform,
  wrap,
} from "framer-motion";
import { Pause, Play } from "lucide-react";

interface InfiniteMarqueeProps {
  items: React.ReactNode[];
  baseVelocity: number;
  itemWidth: number;
  gap?: number;
  ariaLabel?: string;
  isInteractive?: boolean;
}

export function InfiniteMarquee({
  items,
  baseVelocity = -100,
  itemWidth,
  gap = 16,
  ariaLabel = "Auto-scrolling content",
  isInteractive = false,
}: InfiniteMarqueeProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [announcement, setAnnouncement] = useState("");

  const baseX = useMotionValue(0);

  // We duplicate the items to create the seamless loop effect
  const totalItems = items.length;
  // Calculate the total width of one set of items, including gaps
  const singleSetWidth = totalItems * (itemWidth + gap);

  // We use the wrap function to snap the translation back when a full set is scrolled
  // The range is from -singleSetWidth to 0 (or 0 to singleSetWidth if moving right)
  const x = useTransform(baseX, (v) => {
    return `${wrap(-singleSetWidth, 0, v)}px`;
  });

  const directionFactor = useRef<number>(1);
  
  useAnimationFrame((t, delta) => {
    // Determine effective playing state considering hover and focus
    const effectiveIsPlaying = isPlaying && !isHovered && !isFocused;

    if (effectiveIsPlaying) {
      let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
      baseX.set(baseX.get() + moveBy);
    }
  });

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
    setAnnouncement(!isPlaying ? `${ariaLabel} playing` : `${ariaLabel} paused`);
  };

  return (
    <div 
      className="relative w-full overflow-hidden flex flex-col items-start py-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
    >
      {/* Visually hidden live region for screen reader announcements on play/pause */}
      <div aria-live="polite" className="sr-only">
        {announcement}
      </div>

      {isInteractive && (
        <div className="mb-4 ml-4 z-10 flex items-center justify-end w-full pr-8">
           <button
            onClick={togglePlayPause}
            aria-label={isPlaying ? `Pause ${ariaLabel}` : `Play ${ariaLabel}`}
            className="flex items-center gap-2 px-4 py-2 bg-pista-100 text-pista-800 rounded-full hover:bg-pista-200 transition-colors focus:outline-none focus:ring-2 focus:ring-pista-600 focus:ring-offset-2"
          >
            {isPlaying ? <Pause size={18} /> : <Play size={18} />}
            <span className="text-sm font-medium">{isPlaying ? "Pause" : "Play"}</span>
          </button>
        </div>
      )}

      {/* The moving track container with aria-live="off" to prevent auditory spam */}
      <div className="flex" aria-live="off" style={{ gap: `${gap}px` }}>
        <motion.div
          className="flex whitespace-nowrap"
          style={{ x, gap: `${gap}px` }}
        >
          {/* Render four sets for the continuous loop to cover ultra-wide screens */}
          {[...items, ...items, ...items, ...items].map((item, index) => (
            <div
              key={index}
              className="shrink-0"
              style={{ width: `${itemWidth}px` }}
              role="group"
              aria-roledescription="slide"
            >
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
