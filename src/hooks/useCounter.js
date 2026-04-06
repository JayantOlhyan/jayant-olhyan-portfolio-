import { useState, useEffect } from 'react';

/**
 * Animated counter hook that increments from 0 to a specified value.
 *
 * @param {number} end - The final value to reach.
 * @param {number} duration - Total animation time in milliseconds.
 * @param {boolean} isVisible - Trigger to start the animation (e.g., from an Intersection Observer).
 * @returns {number} The current animated count.
 */
export const useCounter = (end, duration = 2000, isVisible = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    let frameId;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    frameId = requestAnimationFrame(animate);

    // Cleanup animation frame on unmount or visibility change
    return () => cancelAnimationFrame(frameId);
  }, [isVisible, end, duration]);

  return count;
};
