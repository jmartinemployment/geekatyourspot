import { ImageResponse } from "next/og";
import { SHARE_IMAGE } from "@/lib/seo/share-image";

/**
 * The share image for every page. Facebook, LinkedIn and X render a 1200 x 630 raster card; they
 * do not render the SVG logo the pages used to name. Pages point at it through SHARE_IMAGE.
 */
export const alt = SHARE_IMAGE.alt;
export const size = { width: SHARE_IMAGE.width, height: SHARE_IMAGE.height };
export const contentType = SHARE_IMAGE.type;

export default function OpengraphImage() {
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
        <div style={{ display: "flex", width: 120, height: 12, background: "#C83803", marginBottom: 48 }} />
        <div style={{ display: "flex", fontSize: 88, fontWeight: 800, lineHeight: 1.05 }}>
          Geek @ Your Spot LLC
        </div>
        <div style={{ display: "flex", fontSize: 44, lineHeight: 1.25, marginTop: 32, color: "#FFFFFF" }}>
          AI integration and automation for South Florida small businesses.
        </div>
        <div style={{ display: "flex", fontSize: 30, marginTop: 48, color: "#C83803" }}>
          geekatyourspot.com
        </div>
      </div>
    ),
    size,
  );
}
