import { ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";

export const ScrollToBottom = () => {
  const [isVisible, setIsVisible] = useState(true);

//   Hide the button
  useEffect(() => {
    const toggleVisibility = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;

      if (scrollTop + clientHeight >= scrollHeight - 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToBottom}
      className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-60 p-4 rounded-full bg-primary/35 text-primary-foreground shadow-lg hover:scale-110 transition-transform active:scale-95 animate-bounce-slow"
      aria-label="Scroll to bottom"
    >
      <ArrowDown className="w-6 h-6" />
    </button>
  );
};