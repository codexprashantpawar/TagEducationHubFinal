import { useEffect, useMemo, useRef, useState } from "react";

type WordWeight = "large" | "medium" | "small";

type WordEntry = { text: string; weight: WordWeight };

const WORDS: WordEntry[] = [
  { text: "Empower", weight: "large" },
  { text: "Learn", weight: "large" },
  { text: "Inspire", weight: "large" },
  { text: "Communicate", weight: "large" },
  { text: "Excellence", weight: "large" },
  { text: "Confidence", weight: "large" },
  { text: "Growth", weight: "large" },
  { text: "Leadership", weight: "large" },
  { text: "Creativity", weight: "large" },
  { text: "Transformation", weight: "large" },
  { text: "Innovation", weight: "large" },
  { text: "Holistic Development", weight: "large" },
  { text: "Spoken English", weight: "medium" },
  { text: "Trinity", weight: "medium" },
  { text: "Critical Thinking", weight: "medium" },
  { text: "Public Speaking", weight: "medium" },
  { text: "Fluency", weight: "medium" },
  { text: "Knowledge", weight: "medium" },
  { text: "Expression", weight: "medium" },
  { text: "Communication Skills", weight: "medium" },
  { text: "Presentation Skills", weight: "medium" },
  { text: "Personality Development", weight: "medium" },
  { text: "Academic Excellence", weight: "medium" },
  { text: "Future Ready", weight: "medium" },
  { text: "Collaboration", weight: "medium" },
  { text: "Learning Ecosystem", weight: "medium" },
  { text: "Teacher Training", weight: "medium" },
  { text: "Student Success", weight: "medium" },
  { text: "Global Exposure", weight: "medium" },
  { text: "Confidence Building", weight: "medium" },
  { text: "Skill Development", weight: "medium" },
  { text: "Early Learning", weight: "small" },
  { text: "Child Development", weight: "small" },
  { text: "Classroom Excellence", weight: "small" },
  { text: "Creative Teaching", weight: "small" },
  { text: "Phonics", weight: "small" },
  { text: "Activity-Based Learning", weight: "small" },
  { text: "Emotional Growth", weight: "small" },
  { text: "Teacher Empowerment", weight: "small" },
  { text: "Positive Learning", weight: "small" },
  { text: "Curiosity", weight: "small" },
  { text: "Care", weight: "small" },
  { text: "Nurturing", weight: "small" },
  { text: "Joyful Learning", weight: "small" },
];

const COLORS = [
  "#f8fafc",
  "#e8c872",
  "#5eead4",
  "#93c5fd",
  "#fcd34d",
  "#67e8f9",
  "#bfdbfe",
  "#fde68a",
];

const ROTATIONS = [0, 12, -12, 24, -24, 35, -35, 45, -30, 18, -18];

function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function fontSizeFor(weight: WordWeight, text: string, width: number): number {
  const len = text.length;
  if (weight === "large") return Math.min(52, Math.max(28, width * 0.038 - len * 0.4));
  if (weight === "medium") return Math.min(22, Math.max(13, width * 0.014 - len * 0.08));
  return Math.min(15, Math.max(10, width * 0.009 - len * 0.04));
}

function estimateBox(text: string, fontSize: number, rotationDeg: number) {
  const w = text.length * fontSize * 0.52;
  const h = fontSize * 1.35;
  const rad = (Math.abs(rotationDeg) * Math.PI) / 180;
  const cos = Math.abs(Math.cos(rad));
  const sin = Math.abs(Math.sin(rad));
  return { w: w * cos + h * sin, h: w * sin + h * cos };
}

type PlacedWord = WordEntry & {
  x: number;
  y: number;
  fontSize: number;
  rotation: number;
  color: string;
  opacity: number;
  delay: number;
};

function layoutWords(width: number, height: number, seed: number): PlacedWord[] {
  const rand = mulberry32(seed);
  const cx = width / 2;
  const cy = height * 0.42;
  const maxR = Math.min(width, height) * 0.48;
  const placed: { x: number; y: number; w: number; h: number }[] = [];
  const result: PlacedWord[] = [];

  const sorted = [...WORDS].sort((a, b) => {
    const order = { large: 0, medium: 1, small: 2 };
    return order[a.weight] - order[b.weight];
  });

  for (const word of sorted) {
    const fontSize = fontSizeFor(word.weight, word.text, width);
    const rotation = ROTATIONS[Math.floor(rand() * ROTATIONS.length)]!;
    const box = estimateBox(word.text, fontSize, rotation);

    const radiusBias =
      word.weight === "large" ? 0.12 + rand() * 0.22 : word.weight === "medium" ? 0.28 + rand() * 0.35 : 0.5 + rand() * 0.45;

    let placedOk = false;
    for (let attempt = 0; attempt < 120; attempt++) {
      const angle = rand() * Math.PI * 2;
      const r = radiusBias * maxR * (0.85 + rand() * 0.3);
      const x = cx + Math.cos(angle) * r;
      const y = cy + Math.sin(angle) * r * 0.85;

      const left = x - box.w / 2;
      const top = y - box.h / 2;
      const pad = word.weight === "large" ? 10 : 6;
      const overlaps = placed.some(
        (p) =>
          left < p.x + p.w + pad &&
          left + box.w + pad > p.x &&
          top < p.y + p.h + pad &&
          top + box.h + pad > p.y
      );

      if (
        !overlaps &&
        left > 8 &&
        top > 8 &&
        left + box.w < width - 8 &&
        top + box.h < height - 8
      ) {
        placed.push({ x: left, y: top, w: box.w, h: box.h });
        result.push({
          ...word,
          x,
          y,
          fontSize,
          rotation,
          color: COLORS[Math.floor(rand() * COLORS.length)]!,
          opacity: word.weight === "large" ? 0.3 : word.weight === "medium" ? 0.27 : 0.25,
          delay: Math.floor(rand() * 1400),
        });
        placedOk = true;
        break;
      }
    }

    if (!placedOk) {
      const x = 40 + rand() * (width - 80);
      const y = 40 + rand() * (height - 80);
      result.push({
        ...word,
        x,
        y,
        fontSize: fontSize * 0.9,
        rotation,
        color: COLORS[Math.floor(rand() * COLORS.length)]!,
        opacity: 0.22,
        delay: Math.floor(rand() * 1400),
      });
    }
  }

  return result;
}

const HIGHLIGHT_DURATION_MS = 2500;
const HIGHLIGHT_CYCLE_MS = 5000;

function pickRandomIndices(length: number): Set<number> {
  const count = Math.min(length, 2 + Math.floor(Math.random() * 2));
  const indices = new Set<number>();
  while (indices.size < count) {
    indices.add(Math.floor(Math.random() * length));
  }
  return indices;
}

export function WordCloudBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [highlighted, setHighlighted] = useState<Set<number>>(() => new Set());
  const fadeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const seed = useMemo(() => 42, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const update = () => {
      const rect = el.getBoundingClientRect();
      setSize({ width: Math.round(rect.width), height: Math.round(rect.height) });
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  const words = useMemo(() => {
    if (size.width < 100 || size.height < 100) return [];
    return layoutWords(size.width, size.height, seed);
  }, [size.width, size.height, seed]);

  useEffect(() => {
    if (words.length === 0) return;

    const runHighlightCycle = () => {
      setHighlighted(pickRandomIndices(words.length));
      if (fadeTimeoutRef.current) clearTimeout(fadeTimeoutRef.current);
      fadeTimeoutRef.current = setTimeout(() => {
        setHighlighted(new Set());
      }, HIGHLIGHT_DURATION_MS);
    };

    runHighlightCycle();
    const intervalId = setInterval(runHighlightCycle, HIGHLIGHT_CYCLE_MS);

    return () => {
      clearInterval(intervalId);
      if (fadeTimeoutRef.current) clearTimeout(fadeTimeoutRef.current);
    };
  }, [words.length]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 80% 70% at 50% 40%, #1a3a5c 0%, #0f2744 45%, #0a1a2e 100%)",
      }}
      aria-hidden
    >
      {words.map((word, index) => {
        const isHighlighted = highlighted.has(index);
        return (
          <span
            key={`${word.text}-${word.x}-${word.y}`}
            className="pointer-events-none absolute select-none"
            style={{
              left: word.x,
              top: word.y,
              transform: `translate(-50%, -50%) rotate(${word.rotation}deg)`,
            }}
          >
            <span
              className="whitespace-nowrap font-serif font-semibold transition-[opacity,text-shadow,filter] duration-[1800ms] ease-in-out"
              style={{
                fontSize: word.fontSize,
                color: word.color,
                opacity: isHighlighted ? 1 : word.opacity,
                textShadow: isHighlighted
                  ? `0 0 18px ${word.color}, 0 0 36px color-mix(in srgb, ${word.color} 65%, transparent)`
                  : "none",
                filter: isHighlighted ? "brightness(1.35) saturate(1.2)" : "none",
              }}
            >
              {word.text}
            </span>
          </span>
        );
      })}
    </div>
  );
}
