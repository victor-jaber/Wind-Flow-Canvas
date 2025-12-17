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
  const [animState, setAnimState] = useState({
    intensity: 0,
    angle: 0,
    wave1: 0,
    wave2: 0,
    wave3: 0,
    wave4: 0,
    wave5: 0,
  });
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
      timeRef.current += 0.025;
      const t = timeRef.current;
      
      const baseWind = Math.sin(t * 0.5) * 0.3;
      const gustWind = Math.sin(t * 1.7) * Math.sin(t * 0.3) * 0.4;
      const microWind = Math.sin(t * 4.3) * 0.1;
      const turbulence = Math.sin(t * 7.1) * Math.cos(t * 5.3) * 0.05;
      
      const intensity = baseWind + gustWind + microWind + turbulence;
      const angle = Math.sin(t * 0.7) * 5 + Math.sin(t * 2.1) * 2;
      
      const wave1 = Math.sin(t * 1.8) * 1.2;
      const wave2 = Math.sin(t * 2.2 + 0.5) * 1.5;
      const wave3 = Math.sin(t * 2.6 + 1.0) * 2.0;
      const wave4 = Math.sin(t * 2.4 + 1.5) * 1.5;
      const wave5 = Math.sin(t * 2.0 + 2.0) * 1.2;
      
      setAnimState({ intensity, angle, wave1, wave2, wave3, wave4, wave5 });
      animationRef.current = requestAnimationFrame(animateNaturalWind);
    };

    animationRef.current = requestAnimationFrame(animateNaturalWind);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const sizeConfig = {
    sm: { banner: "h-32 w-12", pole: 160, base: 24, fontSize: "text-[8px]" },
    md: { banner: "h-48 w-16", pole: 200, base: 28, fontSize: "text-[10px]" },
    lg: { banner: "h-64 w-20", pole: 280, base: 32, fontSize: "text-xs" },
    xl: { banner: "h-80 w-24", pole: 360, base: 40, fontSize: "text-sm" },
  };

  const config = sizeConfig[size];
  const combinedWindX = windForce.x * 0.3 + animState.intensity;
  const combinedAngle = animState.angle + windForce.x * 3;

  const cobraPath = `polygon(
    ${2 + animState.wave1 * 0.3}% 0%, 
    ${98 + animState.wave1 * 0.3}% 0%,
    ${100 + animState.wave2 * 0.8}% 15%,
    ${98 + animState.wave3 * 1.2}% 30%,
    ${100 + animState.wave4 * 1.5}% 45%,
    ${97 + animState.wave5 * 1.2}% 60%,
    ${100 + animState.wave3 * 1.0}% 75%,
    ${98 + animState.wave2 * 0.8}% 90%,
    100% 95%,
    85% 100%,
    70% ${97 + animState.wave4 * 0.5}%,
    55% 100%,
    40% ${96 + animState.wave3 * 0.5}%,
    25% 100%,
    10% ${98 + animState.wave2 * 0.3}%,
    0% 100%,
    ${2 + animState.wave2 * 0.8}% 90%,
    ${0 + animState.wave3 * 1.0}% 75%,
    ${3 + animState.wave5 * 1.2}% 60%,
    ${0 + animState.wave4 * 1.5}% 45%,
    ${2 + animState.wave3 * 1.2}% 30%,
    ${0 + animState.wave2 * 0.8}% 15%
  )`;

  const fabricStyle = {
    transform: `
      skewX(${combinedWindX * 3}deg) 
      rotateY(${combinedWindX * 5}deg)
      rotateZ(${combinedAngle * 0.2}deg)
    `,
    clipPath: cobraPath,
  };

  return (
    <div className={`relative flex flex-col items-center ${className}`}>
      {showPole && (
        <>
          <div
            className="absolute bg-gradient-to-b from-gray-200 via-gray-300 to-gray-400 rounded-full shadow-lg"
            style={{ 
              width: 8,
              height: config.pole,
              bottom: config.base / 2,
              zIndex: 1,
            }}
          />
          <div
            className="absolute bottom-0 bg-gradient-to-t from-gray-500 via-gray-400 to-gray-300 rounded-md shadow-xl"
            style={{
              width: config.base * 1.5,
              height: config.base,
              zIndex: 0,
            }}
          />
          <div
            className="absolute bg-gray-600 rounded-sm shadow-lg"
            style={{
              width: config.base * 1.8,
              height: 6,
              bottom: 0,
              zIndex: 0,
            }}
          />
        </>
      )}
      
      <div
        className={`relative ${config.banner} origin-top`}
        style={{ 
          zIndex: 2,
          perspective: "1000px",
          perspectiveOrigin: "center top",
          marginBottom: showPole ? config.pole - parseInt(config.banner.split(' ')[0].replace('h-', '')) * 4 + config.base : 0,
        }}
      >
        <div
          className="absolute inset-0 bg-gradient-to-b from-white via-white to-white/95 rounded-b-lg shadow-2xl border border-white/50"
          style={{
            ...fabricStyle,
            transformOrigin: "top center",
          }}
        >
          <div 
            className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/5"
            style={{ 
              opacity: 0.6 + Math.abs(combinedWindX) * 0.4,
            }}
          />
          <div 
            className="absolute inset-0"
            style={{
              background: `linear-gradient(
                ${90 + combinedAngle}deg, 
                transparent 0%, 
                rgba(139,92,246,0.1) ${25 + animState.wave3 * 3}%, 
                transparent ${40 + animState.wave2 * 2}%,
                rgba(0,0,0,0.03) ${60 + animState.wave4 * 2}%,
                transparent ${75 + animState.wave5 * 2}%,
                rgba(139,92,246,0.08) ${90 + animState.wave1 * 1}%,
                transparent 100%
              )`,
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className={`text-primary font-bold ${config.fontSize} tracking-wide drop-shadow-sm`}
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
            className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-b from-primary/10 to-transparent rounded-t"
          />
        </div>
        
        <div
          className="absolute inset-0 rounded-b-lg opacity-20 blur-sm"
          style={{
            transform: `
              skewX(${combinedWindX * 8}deg) 
              translateX(${combinedWindX * 5}px)
            `,
            transformOrigin: "top center",
            background: "linear-gradient(to bottom, hsl(var(--primary) / 0.5), hsl(var(--primary) / 0.3))",
            clipPath: cobraPath,
          }}
        />
      </div>
    </div>
  );
}

export function WindBannerGroup() {
  return (
    <div className="flex items-end justify-center gap-8 md:gap-12 pb-4">
      <WindBannerAnimation size="md" className="animate-float" text="PROMO" />
      <WindBannerAnimation size="xl" text="TeckPrints" />
      <WindBannerAnimation size="lg" className="animate-float [animation-delay:1s]" text="EVENTOS" />
    </div>
  );
}
