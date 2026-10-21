import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "BlackMist Socorro Mecânico — assistência automotiva em Embu das Artes";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 80px",
          background: "linear-gradient(120deg, #080808 55%, #1a0d05)",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 26, letterSpacing: 6, color: "#FF5A00", fontWeight: 700 }}>
          SOCORRO MECÂNICO • ASSISTÊNCIA AUTOMOTIVA
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", fontSize: 84, fontWeight: 800, lineHeight: 1.05, marginTop: 28 }}>
          SEU CARRO PAROU. A&nbsp;<span style={{ color: "#FF5A00" }}>BLACKMIST</span>&nbsp;PODE AJUDAR.
        </div>
        <div style={{ display: "flex", fontSize: 30, color: "#B8B8B8", marginTop: 36 }}>
          Embu das Artes e região • Atendimento 24 horas, todos os dias
        </div>
      </div>
    ),
    size,
  );
}
