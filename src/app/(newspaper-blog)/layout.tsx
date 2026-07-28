import { Playfair_Display } from "next/font/google";
import { cn } from "@/lib/utils";

const newsHeaderFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-news-header",
  weight: ["700", "900"],
});

export default function NewspaperBlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={cn(newsHeaderFont.variable, "min-h-full bg-[#f4f1ea] text-black")}>
      {children}
    </div>
  );
}
