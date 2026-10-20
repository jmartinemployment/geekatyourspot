"use client";

import { useCallback, useEffect, useId, useRef, useState, useSyncExternalStore } from "react";

const BASE_W = 800;
const BASE_H = 600;
const BALL_R = 7.5;
const PADDLE_W = 140;
const PADDLE_H = 20;
const PADDLE_Y = 550;
const BASE_SPEED = 5;
const HIGH_SCORE_KEY = "geek-pong-high-score";
const HIGH_SCORE_EVENT = "geek-pong-high-score";
const RETRO_FONT = { fontFamily: "'Courier New', monospace" };
const RETRO_GLOW = { ...RETRO_FONT, textShadow: "0 0 10px rgba(92,185,242,0.5)" };

type Phase = "start" | "playing" | "over";

/** The saved high score, or 0 when storage is unavailable or holds no usable score. */
function readHighScore(): number {
  try {
    const saved = window.localStorage.getItem(HIGH_SCORE_KEY);
    const n = saved === null ? 0 : Number.parseInt(saved, 10);
    return Number.isFinite(n) && n > 0 ? n : 0;
  } catch {
    return 0;
  }
}

/** Saves the high score and tells every mounted game; a refused write leaves the old score in place. */
function writeHighScore(score: number): void {
  try {
    window.localStorage.setItem(HIGH_SCORE_KEY, score.toString());
  } catch {
    return;
  }
  window.dispatchEvent(new Event(HIGH_SCORE_EVENT));
}

function subscribeHighScore(onChange: () => void): () => void {
  window.addEventListener("storage", onChange);
  window.addEventListener(HIGH_SCORE_EVENT, onChange);
  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener(HIGH_SCORE_EVENT, onChange);
  };
}

function serverHighScore(): number {
  return 0;
}

export default function GeekPong() {
  // The page mounts one game per breakpoint block, so the grid pattern id must be unique per game.
  const gridId = useId();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number | undefined>(undefined);

  // Physics state lives in refs so the animation frame reads current values.
  const bxRef = useRef(BASE_W / 2);
  const byRef = useRef(BASE_H / 2);
  const sxRef = useRef(BASE_SPEED);
  const syRef = useRef(BASE_SPEED);
  const pxRef = useRef((BASE_W - PADDLE_W) / 2);
  const scoreRef = useRef(0);
  const activeRef = useRef(false);

  const [containerW, setContainerW] = useState(BASE_W);
  const [ballX, setBallX] = useState(BASE_W / 2);
  const [ballY, setBallY] = useState(BASE_H / 2);
  const [paddleX, setPaddleX] = useState((BASE_W - PADDLE_W) / 2);
  const [score, setScore] = useState(0);
  const [phase, setPhase] = useState<Phase>("start");
  const [newHigh, setNewHigh] = useState(false);
  const highScore = useSyncExternalStore(subscribeHighScore, readHighScore, serverHighScore);

  const displayH = (containerW * BASE_H) / BASE_W;

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const obs = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setContainerW(Math.max(Math.min(entry.contentRect.width - 20, BASE_W), 280));
      }
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    return () => {
      activeRef.current = false;
      if (animRef.current !== undefined) cancelAnimationFrame(animRef.current);
    };
  }, []);

  const endGame = useCallback(() => {
    activeRef.current = false;
    if (animRef.current !== undefined) cancelAnimationFrame(animRef.current);
    const final = scoreRef.current;
    const isNewHigh = final > readHighScore();
    if (isNewHigh) writeHighScore(final);
    setNewHigh(isNewHigh);
    setPhase("over");
  }, []);

  const startGame = useCallback(() => {
    scoreRef.current = 0;
    bxRef.current = BASE_W / 2;
    byRef.current = BASE_H / 2;
    sxRef.current = BASE_SPEED * (Math.random() > 0.5 ? 1 : -1);
    syRef.current = BASE_SPEED;
    pxRef.current = (BASE_W - PADDLE_W) / 2;

    setScore(0);
    setBallX(BASE_W / 2);
    setBallY(BASE_H / 2);
    setPaddleX((BASE_W - PADDLE_W) / 2);
    setNewHigh(false);
    setPhase("playing");
    activeRef.current = true;

    const step = (): void => {
      if (!activeRef.current) return;

      bxRef.current += sxRef.current;
      byRef.current += syRef.current;

      // Left and right walls
      if (bxRef.current <= BALL_R) {
        bxRef.current = BALL_R;
        sxRef.current = Math.abs(sxRef.current);
      }
      if (bxRef.current >= BASE_W - BALL_R) {
        bxRef.current = BASE_W - BALL_R;
        sxRef.current = -Math.abs(sxRef.current);
      }

      // Top wall
      if (byRef.current <= BALL_R) {
        byRef.current = BALL_R;
        syRef.current = Math.abs(syRef.current);
      }

      // Paddle: the hit position sets the angle, and every fifth hit speeds the ball up.
      const ballBottom = byRef.current + BALL_R;
      if (
        ballBottom >= PADDLE_Y &&
        ballBottom <= PADDLE_Y + PADDLE_H &&
        bxRef.current >= pxRef.current &&
        bxRef.current <= pxRef.current + PADDLE_W &&
        syRef.current > 0
      ) {
        syRef.current = -Math.abs(syRef.current);
        scoreRef.current += 1;
        setScore(scoreRef.current);

        const hitPos = (bxRef.current - pxRef.current) / PADDLE_W;
        sxRef.current = (hitPos - 0.5) * 10;

        if (scoreRef.current % 5 === 0) {
          sxRef.current *= 1.1;
          syRef.current *= 1.1;
        }
      }

      // Miss
      if (byRef.current >= BASE_H + BALL_R) {
        endGame();
        return;
      }

      setBallX(bxRef.current);
      setBallY(byRef.current);
      animRef.current = requestAnimationFrame(step);
    };

    animRef.current = requestAnimationFrame(step);
  }, [endGame]);

  const placePaddle = useCallback((svg: SVGSVGElement, clientX: number) => {
    const rect = svg.getBoundingClientRect();
    const x = (clientX - rect.left) * (BASE_W / rect.width);
    const newX = Math.max(0, Math.min(x - PADDLE_W / 2, BASE_W - PADDLE_W));
    pxRef.current = newX;
    setPaddleX(newX);
  }, []);

  const onMouseMove = useCallback(
    (e: React.MouseEvent<SVGSVGElement>) => {
      if (phase !== "playing") return;
      placePaddle(e.currentTarget, e.clientX);
    },
    [phase, placePaddle]
  );

  // The wrapper's touch-none stops the page from scrolling while a finger steers the paddle.
  const onTouchMove = useCallback(
    (e: React.TouchEvent<SVGSVGElement>) => {
      if (phase !== "playing" || e.touches.length === 0) return;
      placePaddle(e.currentTarget, e.touches[0].clientX);
    },
    [phase, placePaddle]
  );

  return (
    <div
      className="my-4 rounded-xl p-4 md:p-6 shadow-[0_10px_40px_rgba(92,185,242,0.3)]"
      style={{ background: "linear-gradient(135deg, #03020D 0%, #091740 100%)" }}
    >
      <div className="text-center mb-4">
        <h3 className="text-[#5CB9F2] font-bold text-2xl md:text-4xl tracking-wide mb-1" style={RETRO_GLOW}>
          GEEK PONG
        </h3>
        <p className="text-[#DD8343] text-sm md:text-base mb-3">1982: Where it all began</p>
        <div className="flex justify-center gap-8 md:gap-12">
          <div className="flex flex-col items-center">
            <span className="text-white/70 text-xs uppercase tracking-widest">Score</span>
            <span className="text-[#5CB9F2] font-bold text-2xl md:text-4xl" style={RETRO_FONT}>
              {score}
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-white/70 text-xs uppercase tracking-widest">High Score</span>
            <span className="text-[#5CB9F2] font-bold text-2xl md:text-4xl" style={RETRO_FONT}>
              {highScore}
            </span>
          </div>
        </div>
      </div>

      <div ref={wrapperRef} className="relative flex justify-center items-center my-4 touch-none">
        <svg
          viewBox={`0 0 ${BASE_W} ${BASE_H}`}
          style={{ width: containerW, height: displayH, cursor: "none" }}
          className="block rounded bg-[#03020D] border-2 border-[#5CB9F2] shadow-[0_0_15px_rgba(92,185,242,0.4),inset_0_0_15px_rgba(92,185,242,0.1)] max-w-full h-auto"
          onMouseMove={onMouseMove}
          onTouchMove={onTouchMove}
          preserveAspectRatio="xMidYMid meet"
          aria-label="Geek Pong game board"
          role="img"
        >
          <defs>
            <pattern id={gridId} width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0,212,255,0.1)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#${gridId})`} />
          <line
            x1={BASE_W / 2}
            y1={0}
            x2={BASE_W / 2}
            y2={BASE_H}
            stroke="rgba(0,212,255,0.3)"
            strokeWidth="2"
            strokeDasharray="20,20"
          />
          <circle cx={ballX} cy={ballY} r={BALL_R} fill="#5CB9F2" style={{ filter: "drop-shadow(0 0 8px #5CB9F2)" }} />
          <rect
            x={paddleX}
            y={PADDLE_Y}
            width={PADDLE_W}
            height={PADDLE_H}
            rx={4}
            fill="#FF9F43"
            stroke="#FFF"
            strokeWidth="2"
            style={{ filter: "drop-shadow(0 0 12px #FF9F43) drop-shadow(0 0 20px rgba(255,159,67,0.8))" }}
          />
        </svg>

        {phase === "over" && (
          <div className="absolute inset-0 bg-black/92 flex items-center justify-center rounded">
            <div className="text-center px-4">
              <p className="text-[#5CB9F2] text-3xl md:text-4xl font-bold mb-3" style={RETRO_GLOW}>
                GAME OVER
              </p>
              <p className="text-[#DD8343] text-xl mb-2">Score: {score}</p>
              {newHigh && score > 0 && (
                <p className="text-yellow-400 text-base mb-3 animate-pulse">NEW HIGH SCORE!</p>
              )}
              <button
                type="button"
                onClick={startGame}
                className="px-8 py-3 bg-[#5CB9F2] text-[#03020D] font-bold uppercase tracking-wide rounded hover:bg-[#DD8343] transition-colors"
                style={RETRO_FONT}
              >
                PLAY AGAIN
              </button>
            </div>
          </div>
        )}

        {phase === "start" && (
          <div className="absolute inset-0 bg-black/92 flex items-center justify-center rounded">
            <div className="text-center px-4">
              <p className="text-[#5CB9F2] text-3xl md:text-4xl font-bold mb-4" style={RETRO_GLOW}>
                READY?
              </p>
              <p className="text-white/80 text-sm mb-1 hidden md:block">Move your mouse to control the paddle</p>
              <p className="text-white/80 text-sm mb-4 md:hidden">Swipe to control the paddle</p>
              <button
                type="button"
                onClick={startGame}
                className="px-10 py-4 bg-[#5CB9F2] text-[#03020D] font-bold uppercase tracking-wide rounded transition-colors hover:bg-[#DD8343] animate-pulse"
                style={RETRO_FONT}
              >
                START
              </button>
            </div>
          </div>
        )}
      </div>

      <p className="text-center text-[#5CB9F2]/80 text-xs mt-3" style={RETRO_FONT}>
        Est. 1982: the dream that started it all
      </p>
    </div>
  );
}
