/* eslint-disable @next/next/no-img-element -- next/og requires a plain img element. */
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Portrait of Zayne Dockery";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";
export const runtime = "nodejs";

const portrait = await readFile(join(process.cwd(), "public", "staugustine.jpg"));
const portraitSource = Uint8Array.from(portrait).buffer;

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <img
        // Satori accepts binary image data even though the DOM type only permits a string URL.
        // @ts-expect-error See https://github.com/vercel/satori/issues/606
        src={portraitSource}
        alt="Portrait of Zayne Dockery"
        style={{
          height: "100%",
          objectFit: "cover",
          objectPosition: "50% 63%",
          width: "100%",
        }}
      />
    ),
    size,
  );
}
