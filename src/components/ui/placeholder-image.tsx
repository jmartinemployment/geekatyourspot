interface PlaceholderImageProps {
  label?: string;
  className?: string;
}

export function PlaceholderImage({ label = "Image placeholder", className = "" }: PlaceholderImageProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`flex items-center justify-center bg-[#CBCBCB] text-[#4a4a4a] font-bold text-sm uppercase tracking-wide ${className}`}
    >
      {label}
    </div>
  );
}
