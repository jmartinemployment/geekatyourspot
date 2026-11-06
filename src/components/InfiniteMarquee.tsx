interface InfiniteMarqueeProps {
  readonly items: string[];
  readonly direction?: "left" | "right";
  readonly speed?: number;
}

export function InfiniteMarquee({
  items,
  direction = 'left',
  speed = 30
}: InfiniteMarqueeProps) {
  return (
    <div className="relative w-full overflow-hidden">
      {/* fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10" />

      <div
        className="flex gap-6"
        style={{
          width: 'max-content',
          animation: `${direction === 'left' ? 'marquee-left' : 'marquee-right'} ${speed}s linear infinite`,
        }}
      >
        {[...items, ...items].map((item, i) => (
          <div
            key={i}
            className="bg-[#0B162A] px-10 py-5 rounded-sm border border-white/10 text-white shadow-text font-bold tracking-wide flex items-center justify-center min-w-[220px] duration-300"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
