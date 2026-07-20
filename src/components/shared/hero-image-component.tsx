import { PlaceholderImage } from "@/components/ui/placeholder-image";
import path from 'path'
import fs from 'fs';


  interface HeroImageProps {
    segment: "use-cases" | "blog" | "tools";
    department: string;
    slug: string;
    alt: string;
    className?: string;
  }

    export function HeroImage({ segment, department, slug, alt, className }: HeroImageProps) {
    const dir = path.join(process.cwd(), "public", "images", department, segment, slug);
    const hasAvif = fs.existsSync(path.join(dir, "hero.avif"));
    const hasWebp = fs.existsSync(path.join(dir,"hero.webp"));

    if (!hasWebp) return <PlaceholderImage label={alt} className={className} />;

    const publicDir =`/images/${department}/${segment}/${slug}`;
    return (
      <picture>
        {hasAvif && <source srcSet={`${publicDir}/hero.avif`}type="image/avif" />}
        <img src={`${publicDir}/hero.webp`} alt={alt} 
  loading="lazy" className={className} />
      </picture>
    );
  }