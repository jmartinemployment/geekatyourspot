import Image from "next/image";
import Link from "next/link";
import { gtmLinkIdFromHref } from "@/lib/gtm/link-id";

interface HeroSectionProps {
  title: string;
  image: string| undefined;
  summary: string
}

export default function HeroImage({image, title, summary}:HeroSectionProps,) {
  
  return (
    <>
      {image && image.trim() !== "" ? (
        <Image
          src={image!}
          priority
          width={450}
          height={562}
          quality={100}
          alt={title}
          className="h-auto w-auto"
        />
      ) : null}
    </>
  );
}