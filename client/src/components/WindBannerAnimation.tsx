import { useEffect, useState } from "react";

interface WindBannerAnimationProps {
  color?: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  text?: string;
  showPole?: boolean;
}

export function WindBannerAnimation({
  color = "primary",
  size = "lg",
  className = "",
  text = "TeckPrints",
  showPole = true,
}: WindBannerAnimationProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const sizeClasses = {
    sm: "h-32 w-12",
    md: "h-48 w-16",
    lg: "h-64 w-20",
    xl: "h-80 w-24",
  };

  const poleHeight = {
    sm: "h-40",
    md: "h-56",
    lg: "h-72",
    xl: "h-96",
  };

  const interactiveStyle = {
    transform: `skewX(${mousePosition.x * 3}deg) rotateY(${mousePosition.x * 5}deg)`,
  };

  return (
    <div className={`relative flex flex-col items-center ${className}`}>
      {showPole && (
        <div
          className={`absolute bottom-0 w-2 bg-gradient-to-b from-zinc-400 to-zinc-600 dark:from-zinc-500 dark:to-zinc-700 rounded-full shadow-lg ${poleHeight[size]}`}
          style={{ zIndex: 1 }}
        />
      )}
      <div
        className={`relative ${sizeClasses[size]} origin-top`}
        style={{ 
          zIndex: 2,
          perspective: "1000px",
        }}
      >
        <div
          className="absolute inset-0 bg-gradient-to-b from-primary via-primary to-primary/90 rounded-b-lg shadow-xl animate-wind-wave"
          style={{
            ...interactiveStyle,
            transformOrigin: "top center",
            clipPath: "polygon(0 0, 100% 0, 100% 95%, 85% 100%, 70% 95%, 55% 100%, 40% 95%, 25% 100%, 10% 95%, 0 100%)",
          }}
        >
          <div 
            className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/5 animate-fabric-flutter"
            style={{ transformOrigin: "top center" }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className="text-primary-foreground font-bold text-xs tracking-wide"
              style={{
                writingMode: "vertical-rl",
                textOrientation: "mixed",
                transform: "rotate(180deg)",
              }}
            >
              {text}
            </span>
          </div>
          <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-b from-primary/80 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-primary/60 to-transparent opacity-50" />
        </div>
        <div
          className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-primary/60 rounded-b-lg animate-wind-wave-slow opacity-30 blur-sm"
          style={{
            ...interactiveStyle,
            transformOrigin: "top center",
            animationDelay: "0.5s",
            clipPath: "polygon(0 0, 100% 0, 100% 95%, 85% 100%, 70% 95%, 55% 100%, 40% 95%, 25% 100%, 10% 95%, 0 100%)",
          }}
        />
      </div>
    </div>
  );
}

export function WindBannerGroup() {
  return (
    <div className="flex items-end justify-center gap-8 md:gap-12">
      <WindBannerAnimation size="md" className="animate-float" text="PROMO" />
      <WindBannerAnimation size="xl" text="TeckPrints" />
      <WindBannerAnimation size="lg" className="animate-float [animation-delay:1s]" text="EVENTOS" />
    </div>
  );
}
