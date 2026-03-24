import { useState, useEffect } from 'react';

export const useCounter = (end, duration = 2000, isVisible = false) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!isVisible) return;
    
    let start = 0; 
    const step = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += step; 
      if (start >= end) { 
        clearInterval(timer); 
        setCount(end); 
      } else {
        setCount(Math.floor(start));
      }
    }, 16); 
    
    return () => clearInterval(timer);
  }, [isVisible, end, duration]);
  
  return count;
};
