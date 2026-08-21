import type { CSSProperties } from "react";

type ResponsivePublicImageProps = {
  alt: string;
  pngSrc?: string;
  webpSrc: string;
};

const fillStyle: CSSProperties = {
  display: "block",
  height: "100%",
  inset: 0,
  position: "absolute",
  width: "100%",
};

/**
 * The lighter WebP is the default. Components can optionally reserve their
 * original PNG for large displays; this is used only for the sticker logos.
 */
export function ResponsivePublicImage({ alt, pngSrc, webpSrc }: ResponsivePublicImageProps) {
  return (
    <picture style={fillStyle}>
      {pngSrc ? <source media="(min-width: 1921px) and (min-height: 1081px)" srcSet={pngSrc} type="image/png" /> : null}
      {/* Static public WebPs are already optimized; picture selects only one source. */}
      <img alt={alt} src={webpSrc} style={fillStyle} />
    </picture>
  );
}
