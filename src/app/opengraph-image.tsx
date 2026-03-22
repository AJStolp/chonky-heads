import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Chonky Heads — Software Studio in Wisconsin";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#0b0f19",
          fontFamily: "Inter, system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "72px",
              height: "72px",
              borderRadius: "16px",
              backgroundColor: "#1f2937",
              marginRight: "20px",
              fontSize: "36px",
              fontWeight: 800,
              color: "#F97316",
            }}
          >
            CH
          </div>
          <span
            style={{
              fontSize: "32px",
              fontWeight: 700,
              color: "#ffffff",
            }}
          >
            Chonky Heads
          </span>
        </div>

        <div
          style={{
            fontSize: "56px",
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.2,
            marginBottom: "24px",
            letterSpacing: "-1px",
          }}
        >
          Helping people read,
          <br />
          learn, and understand land.
        </div>

        <div
          style={{
            fontSize: "24px",
            color: "rgba(255, 255, 255, 0.5)",
            lineHeight: 1.6,
            maxWidth: "800px",
          }}
        >
          Turning text into speech. Turning aerial footage into property
          intelligence. Building tools that make complex things simple.
        </div>

        <div
          style={{
            display: "flex",
            marginTop: "40px",
            width: "96px",
            height: "4px",
            borderRadius: "4px",
            background: "linear-gradient(to right, #F97316, #F59E0B)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
