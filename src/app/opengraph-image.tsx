import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { SHARE_IMAGE } from "@/lib/seo/share-image";

/**
 * The share image for every page. Facebook, LinkedIn and X render a 1200 x 630 raster card; they
 * do not render the SVG logo the pages used to name. Pages point at it through SHARE_IMAGE.
 *
 * The card carries the logo itself (owner, 2026-10-22): the white wordmark the footer uses, drawn
 * on the navy ground. Under it are the two lines the Google Business Profile shows (owner,
 * 2026-10-22), the profile's headline and its one-sentence pitch, verbatim, then the domain.
 */
export const alt = SHARE_IMAGE.alt;
export const size = { width: SHARE_IMAGE.width, height: SHARE_IMAGE.height };
export const contentType = SHARE_IMAGE.type;

/** The footer's white wordmark, 124.14 x 51.35 in its own units; 600 px wide keeps that ratio. */
const LOGO_WIDTH = 600;
const LOGO_HEIGHT = 248;

export default async function OpengraphImage() {
  const logoSvg = await readFile(join(process.cwd(), "public", "images", "GeekAtYourSpotWhite.svg"));
  const logoSrc = `data:image/svg+xml;base64,${logoSvg.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 96px",
          background: "#0B162A",
          color: "#FFFFFF",
        }}
      >
        <img src={logoSrc} width={LOGO_WIDTH} height={LOGO_HEIGHT} alt="" />
        <div style={{ display: "flex", fontSize: 40, lineHeight: 1.25, marginTop: 40, color: "#FFFFFF" }}>
          Geek @ Your Spot LLC - Future-Proof Your Business
        </div>
        <div style={{ display: "flex", fontSize: 30, lineHeight: 1.3, marginTop: 20, color: "#FFFFFF" }}>
          Increase efficiency and reduce costs. Let&apos;s automate your processes.
        </div>
        <div style={{ display: "flex", fontSize: 30, marginTop: 36, color: "#C83803" }}>
          geekatyourspot.com
        </div>
      </div>
    ),
    size,
  );
}
