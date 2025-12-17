import { useEffect, useState, useRef } from "react";

interface WindBannerAnimationProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  text?: string;
  showPole?: boolean;
}

export function WindBannerAnimation({
  size = "lg",
  className = "",
  text = "TeckPrints",
  showPole = true,
}: WindBannerAnimationProps) {
  const [windForce, setWindForce] = useState({ x: 0, y: 0 });
  const [naturalWind, setNaturalWind] = useState({ intensity: 0, angle: 0 });
  const animationRef = useRef<number>();
  const timeRef = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setWindForce({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const animateNaturalWind = () => {
      timeRef.current += 0.016;
      const t = timeRef.current;
      
      const baseWind = Math.sin(t * 0.5) * 0.3;
      const gustWind = Math.sin(t * 1.7) * Math.sin(t * 0.3) * 0.4;
      const microWind = Math.sin(t * 4.3) * 0.1;
      const turbulence = Math.sin(t * 7.1) * Math.cos(t * 5.3) * 0.05;
      
      const intensity = baseWind + gustWind + microWind + turbulence;
      const angle = Math.sin(t * 0.7) * 5 + Math.sin(t * 2.1) * 2;
      
      setNaturalWind({ intensity, angle });
      animationRef.current = requestAnimationFrame(animateNaturalWind);
    };

    animationRef.current = requestAnimationFrame(animateNaturalWind);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
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

  const combinedWindX = windForce.x * 0.3 + naturalWind.intensity;
  const combinedAngle = naturalWind.angle + windForce.x * 3;

  const fabricStyle = {
    transform: `
      skewX(${combinedWindX * 8}deg) 
      rotateY(${combinedWindX * 12}deg)
      rotateZ(${combinedAngle * 0.5}deg)
    `,
    transition: "transform 0.15s cubic-bezier(0.4, 0, 0.2, 1)",
  };

  const shadowStyle = {
    transform: `
      skewX(${combinedWindX * 10}deg) 
      rotateY(${combinedWindX * 15}deg)
      rotateZ(${combinedAngle * 0.6}deg)
      translateX(${combinedWindX * 3}px)
    `,
    transition: "transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
  };

  const waveOffset1 = Math.sin(timeRef.current * 3) * 2;
  const waveOffset2 = Math.sin(timeRef.current * 4 + 1) * 1.5;
  const waveOffset3 = Math.sin(timeRef.current * 5 + 2) * 1;

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
          perspectiveOrigin: "center top",
        }}
      >
        <div
          className="absolute inset-0 bg-gradient-to-b from-primary via-primary to-primary/90 rounded-b-lg shadow-xl"
          style={{
            ...fabricStyle,
            transformOrigin: "top center",
            clipPath: `polygon(
              0 0, 
              100% 0, 
              ${100 + waveOffset1}% 20%,
              ${98 + waveOffset2}% 40%,
              ${100 + waveOffset3}% 60%,
              ${97 + waveOffset1}% 80%,
              100% 95%, 
              85% 100%, 
              70% ${97 + waveOffset2}%, 
              55% 100%, 
              40% ${96 + waveOffset3}%, 
              25% 100%, 
              10% ${98 + waveOffset1}%, 
              0 100%,
              ${-waveOffset2}% 80%,
              ${waveOffset1}% 60%,
              ${-waveOffset3}% 40%,
              ${waveOffset2}% 20%
            )`,
          }}
        >
          <div 
            className="absolute inset-0 bg-gradient-to-r from-white/15 via-transparent to-white/10"
            style={{ 
              transformOrigin: "top center",
              opacity: 0.6 + Math.abs(combinedWindX) * 0.4,
            }}
          />
          <div 
            className="absolute inset-0"
            style={{
              background: `linear-gradient(
                ${90 + combinedAngle}deg, 
                transparent 0%, 
                rgba(255,255,255,0.1) ${30 + combinedWindX * 20}%, 
                transparent ${50 + combinedWindX * 10}%,
                rgba(0,0,0,0.05) ${70 + combinedWindX * 15}%,
                transparent 100%
              )`,
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className="text-primary-foreground font-bold text-xs tracking-wide drop-shadow-sm"
              style={{
                writingMode: "vertical-rl",
                textOrientation: "mixed",
                transform: "rotate(180deg)",
              }}
            >
              {text}
            </span>
          </div>
          <div 
            className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-primary/90 to-transparent"
            style={{
              boxShadow: "inset 0 2px 4px rgba(0,0,0,0.1)",
            }}
          />
          <div 
            className="absolute bottom-0 left-0 right-0 h-6"
            style={{
              background: "linear-gradient(to top, hsl(var(--primary) / 0.7), transparent)",
              opacity: 0.5 + Math.abs(combinedWindX) * 0.3,
            }}
          />
        </div>
        <div
          className="absolute inset-0 rounded-b-lg opacity-25 blur-sm"
          style={{
            ...shadowStyle,
            transformOrigin: "top center",
            background: "linear-gradient(to bottom, hsl(var(--primary) / 0.6), hsl(var(--primary) / 0.4))",
            clipPath: `polygon(
              0 0, 
              100% 0, 
              100% 95%, 
              85% 100%, 
              70% 95%, 
              55% 100%, 
              40% 95%, 
              25% 100%, 
              10% 95%, 
              0 100%
            )`,
          }}
        />
        <div
          className="absolute inset-0 rounded-b-lg opacity-10 blur-md"
          style={{
            transform: `
              skewX(${combinedWindX * 12}deg) 
              translateX(${combinedWindX * 8}px)
              translateY(4px)
            `,
            transformOrigin: "top center",
            background: "hsl(var(--primary) / 0.5)",
            clipPath: "polygon(0 0, 100% 0, 100% 95%, 85% 100%, 70% 95%, 55% 100%, 40% 95%, 25% 100%, 10% 95%, 0 100%)",
            transition: "transform 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
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
