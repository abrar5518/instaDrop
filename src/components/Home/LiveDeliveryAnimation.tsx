"use client";

import { useState, useEffect, useRef } from "react";
import { Play, Pause, RotateCcw, MapPin, Truck, CheckCircle2, Sparkles, Navigation } from "lucide-react";

export default function LiveDeliveryAnimation() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0); // 0 to 1
  const [carPos, setCarPos] = useState({ x: 60, y: 220, angle: 0 });
  const [activeStage, setActiveStage] = useState<0 | 1 | 2>(0);

  const pathRef = useRef<SVGPathElement>(null);
  const animFrameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  const DURATION_MS = 9000; // 9 seconds for smooth full journey

  // Animation Loop using requestAnimationFrame
  useEffect(() => {
    if (!isPlaying) {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      return;
    }

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp - progress * DURATION_MS;

      const elapsed = timestamp - startTimeRef.current;
      const currentProgress = (elapsed % DURATION_MS) / DURATION_MS;

      // Update position along SVG path
      if (pathRef.current) {
        const totalLen = pathRef.current.getTotalLength();
        const pt = pathRef.current.getPointAtLength(currentProgress * totalLen);

        // Calculate tangent angle for car rotation
        const nextPt = pathRef.current.getPointAtLength(Math.min((currentProgress + 0.005) * totalLen, totalLen));
        const dx = nextPt.x - pt.x;
        const dy = nextPt.y - pt.y;
        const angle = Math.atan2(dy, dx) * (180 / Math.PI);

        setCarPos({ x: pt.x, y: pt.y, angle });
      }

      setProgress(currentProgress);

      // Dynamic Stage highlights
      if (currentProgress < 0.35) {
        setActiveStage(0);
      } else if (currentProgress < 0.75) {
        setActiveStage(1);
      } else {
        setActiveStage(2);
      }

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isPlaying, progress]);

  // Jump to specific stage on button click
  const handleStageClick = (stageIdx: 0 | 1 | 2) => {
    const stageProgressMap = [0.05, 0.45, 0.85];
    const targetProgress = stageProgressMap[stageIdx];
    setProgress(targetProgress);
    setActiveStage(stageIdx);
    startTimeRef.current = null;

    if (pathRef.current) {
      const totalLen = pathRef.current.getTotalLength();
      const pt = pathRef.current.getPointAtLength(targetProgress * totalLen);
      const nextPt = pathRef.current.getPointAtLength(Math.min((targetProgress + 0.005) * totalLen, totalLen));
      const dx = nextPt.x - pt.x;
      const dy = nextPt.y - pt.y;
      const angle = Math.atan2(dy, dx) * (180 / Math.PI);
      setCarPos({ x: pt.x, y: pt.y, angle });
    }
  };

  const stageData = [
    {
      id: 0,
      title: "01. 60-Min Collection",
      subtitle: "Pickup Hub A (Manchester)",
      desc: "Courier van arrives at door & securely seals consignment.",
      badge: "60-MIN PICKUP SLA",
    },
    {
      id: 1,
      title: "02. Winding Highway Route",
      subtitle: "Direct Transit (M6 Highway)",
      desc: "Smoothly navigating highway curves with live GPS satellite feed.",
      badge: "DIRECT DRIVE ACTIVE",
    },
    {
      id: 2,
      title: "03. Digital POD Handover",
      subtitle: "Destination Hub B (London)",
      desc: "Delivered to recipient with instant electronic signature POD.",
      badge: "DELIVERED & VERIFIED",
    },
  ];

  return (
    <section className="py-24 bg-[#0a192f] text-white overflow-hidden border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#c6ff00] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 fill-[#c6ff00]" />
            <span>SMOOTH REAL-TIME DRIVING SIMULATOR</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display">
            Direct Drive Journey in Action
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Watch our dedicated courier smoothly navigate direct road curves from Manchester to London with 60-minute pickup and zero hub stops.
          </p>
        </div>

        {/* Animation Main Container */}
        <div className="max-w-5xl mx-auto bg-gradient-to-b from-[#0e2240] via-[#0a192f] to-[#051329] rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl space-y-8 relative">

          {/* TOP STEP SELECTOR BUTTONS */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-800">
            <div className="flex flex-wrap items-center gap-2.5 flex-1">
              {stageData.map((stg) => (
                <button
                  key={stg.id}
                  onClick={() => handleStageClick(stg.id as 0 | 1 | 2)}
                  className={`flex-1 min-w-[150px] py-3 px-4 rounded-2xl text-xs font-bold transition-all text-left flex items-center justify-between gap-2 border ${
                    activeStage === stg.id
                      ? "bg-[#c6ff00] text-[#0a192f] border-[#c6ff00] shadow-lg font-extrabold scale-102"
                      : "bg-slate-900/80 text-slate-300 border-slate-800 hover:bg-slate-800 hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className={`w-2.5 h-2.5 rounded-full ${activeStage === stg.id ? "bg-[#0a192f] animate-pulse" : "bg-slate-600"}`} />
                    <span>{stg.title}</span>
                  </div>
                  {activeStage === stg.id && <span className="text-[10px] uppercase font-black bg-[#0a192f]/20 px-2 py-0.5 rounded-md">ACTIVE</span>}
                </button>
              ))}
            </div>

            {/* Play/Pause & Reset */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-3 rounded-2xl bg-slate-900 border border-slate-800 hover:bg-slate-800 text-white text-xs font-bold transition-colors flex items-center gap-1.5"
                aria-label={isPlaying ? "Pause animation" : "Play animation"}
              >
                {isPlaying ? <Pause className="w-4 h-4 text-[#c6ff00]" /> : <Play className="w-4 h-4 text-[#c6ff00]" />}
                <span className="hidden sm:inline text-xs">{isPlaying ? "Pause" : "Play"}</span>
              </button>

              <button
                onClick={() => {
                  setProgress(0);
                  setActiveStage(0);
                  startTimeRef.current = null;
                  setIsPlaying(true);
                }}
                className="p-3 rounded-2xl bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
                aria-label="Replay animation"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* SVG ROAD CANVAS WITH 60FPS PATH MOTION */}
          <div className="relative h-64 sm:h-80 w-full bg-slate-950/70 rounded-2xl border border-slate-800/80 overflow-hidden flex items-center justify-center">

            {/* Grid Map Backdrop */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

            {/* SVG CANVAS & PATH */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 300" preserveAspectRatio="none">
              {/* Outer Road Glow */}
              <path
                d="M 60 220 C 180 50, 320 280, 500 80 C 620 -10, 680 240, 740 210"
                fill="none"
                stroke="#0066ff"
                strokeWidth="20"
                strokeOpacity="0.12"
                strokeLinecap="round"
              />

              {/* Main Asphalt Road Track */}
              <path
                d="M 60 220 C 180 50, 320 280, 500 80 C 620 -10, 680 240, 740 210"
                fill="none"
                stroke="#1e293b"
                strokeWidth="12"
                strokeLinecap="round"
              />

              {/* Reference Path used by getPointAtLength() */}
              <path
                ref={pathRef}
                d="M 60 220 C 180 50, 320 280, 500 80 C 620 -10, 680 240, 740 210"
                fill="none"
                stroke="#c6ff00"
                strokeWidth="3"
                strokeDasharray="6 6"
                strokeOpacity="0.9"
              />
            </svg>

            {/* HUB A: Manchester Pickup (Left) */}
            <div className="absolute left-[7.5%] top-[73%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10">
              <div className="relative flex items-center justify-center">
                <span className="w-10 h-10 rounded-full bg-emerald-500/20 animate-ping absolute" />
                <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold shadow-lg shadow-emerald-500/30">
                  <MapPin className="w-4 h-4" />
                </div>
              </div>
              <div className="mt-2 bg-slate-900/90 border border-slate-700 px-3 py-1 rounded-lg text-center shadow-md backdrop-blur-xs">
                <p className="text-xs font-bold text-white">Hub A: Manchester</p>
                <p className="text-[10px] text-emerald-400 font-semibold">Pickup Door</p>
              </div>
            </div>

            {/* MIDPOINT HIGHWAY WAYPOINT */}
            <div className="absolute left-[62%] top-[26%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10">
              <div className="w-6 h-6 rounded-full bg-blue-600/30 border border-blue-400 text-blue-400 flex items-center justify-center">
                <Navigation className="w-3 h-3 rotate-45 animate-pulse" />
              </div>
              <span className="text-[9px] font-bold text-blue-300 bg-slate-900/80 px-2 py-0.5 rounded-md mt-1 border border-slate-800">
                Direct M6 Highway
              </span>
            </div>

            {/* HUB B: London Dropoff (Right) */}
            <div className="absolute left-[92.5%] top-[70%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10">
              <div className="relative flex items-center justify-center">
                {activeStage === 2 && <span className="w-10 h-10 rounded-full bg-[#c6ff00]/30 animate-ping absolute" />}
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-lg transition-colors ${
                  activeStage === 2 ? "bg-[#c6ff00] text-[#0a192f] shadow-[#c6ff00]/40" : "bg-slate-800 text-slate-400 border border-slate-700"
                }`}>
                  <MapPin className="w-4 h-4" />
                </div>
              </div>
              <div className="mt-2 bg-slate-900/90 border border-slate-700 px-3 py-1 rounded-lg text-center shadow-md backdrop-blur-xs">
                <p className="text-xs font-bold text-white">Hub B: London</p>
                <p className={`text-[10px] font-semibold ${activeStage === 2 ? "text-[#c6ff00]" : "text-slate-400"}`}>
                  {activeStage === 2 ? "Handover Complete" : "Destination"}
                </p>
              </div>
            </div>

            {/* DYNAMIC CONTINUOUS SMOOTH DRIVING CAR WITH TANGENT ROTATION */}
            <div
              className="absolute z-20 pointer-events-none transition-transform duration-75"
              style={{
                left: `${(carPos.x / 800) * 100}%`,
                top: `${(carPos.y / 300) * 100}%`,
                transform: `translate(-50%, -50%) rotate(${carPos.angle}deg)`,
              }}
            >
              <div className="relative flex items-center justify-center">
                {/* Dedicated Van Badge */}
                <div className="w-12 h-12 rounded-2xl bg-[#0a192f] border-2 border-[#c6ff00] text-[#c6ff00] flex items-center justify-center shadow-2xl shadow-[#c6ff00]/40">
                  <Truck className="w-6 h-6" />
                </div>
                {/* Glowing Beam */}
                <div className="absolute -right-3 w-4 h-2 bg-[#c6ff00] rounded-full blur-xs animate-pulse" />
              </div>
            </div>

          </div>

          {/* DYNAMIC STAGE STATUS & POD POPUP */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center pt-2">
            <div className="md:col-span-8 bg-slate-900/90 border border-slate-800 rounded-2xl p-5 space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#c6ff00] bg-[#c6ff00]/10 px-2.5 py-1 rounded-md border border-[#c6ff00]/30">
                  {stageData[activeStage].badge}
                </span>
                <span className="text-xs font-bold text-white">
                  {stageData[activeStage].subtitle}
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {stageData[activeStage].desc}
              </p>
            </div>

            {/* Instant POD Signature Badge */}
            <div className="md:col-span-4 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-5 text-emerald-300 space-y-1 flex flex-col justify-between">
              <div className="flex items-center gap-2 font-bold text-xs text-emerald-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Electronic Signature POD</span>
              </div>
              <p className="text-[11px] text-slate-300">
                Recipient: <strong className="text-white font-semibold">Sarah Mitchell (London)</strong>
              </p>
              <p className="text-[10px] text-emerald-400 font-bold">
                ✓ Auto-Emailed Digital Certificate
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
