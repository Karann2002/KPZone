import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg,#2563EB 0%,#4F46E5 55%,#7C3AED 100%)",
          borderRadius: 18,
          boxShadow: "0 6px 18px rgba(37,99,235,.35)",
          fontSize: 34,
          fontWeight: 900,
          color: "#fff",
          fontFamily: "Arial",
          letterSpacing: "-2px",
        }}
      >
        KP
      </div>
    ),
    size
  );
}