import { useState, useEffect } from "react";

import sweeper from "../imports/The_Sweeper.jpg";
import weGhetto from "../imports/Title-We_Ghetto_but_We_Ain_t_Hooligans__2026__size_168_5cm_x_150cmFabric_cutouts_on_curtain_clot.jpg";
import comingHome from "../imports/Coming_Home.Collage_cutout_on_paperA1_paper2025__iamofilwe_iamofilwe__artist__artstudio__artcoll.jpg";
import mastino from "../imports/MASTINOMYHERO_A_Collage_Portrait_Artwork_of_HOPEMA_TASize_A2_paper420_x_594_mm_2024__IAMOFILWE_i.jpg";
import seeNoEvil from "../imports/_See_No_Evil__Speak_No_Evil___2026__Fabric_on_curtain_cloth.___Iam_OfilweUsing_the_film_Queen__.jpg";

const INK = "#403a34";
const CANVAS = "#f6f1eb";
const SLATE = "#555555";
const CHARCOAL = "#333333";

const FONT = "'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif";

const artworks = [
  {
    id: 1,
    title: "The Sweeper",
    year: null,
    medium: "Fabric cutouts on curtain cloth",
    dimensions: null,
    image: sweeper,
    category: "TEXTILE",
  },
  {
    id: 2,
    title: "We Ghetto but We Ain't Hooligans",
    year: "2026",
    medium: "Fabric cutouts on curtain cloth",
    dimensions: "168.5 × 150 cm",
    image: weGhetto,
    category: "TEXTILE",
  },
  {
    id: 3,
    title: "See No Evil, Speak No Evil",
    year: "2026",
    medium: "Fabric on curtain cloth",
    dimensions: null,
    note: "After the film Queen",
    image: seeNoEvil,
    category: "TEXTILE",
  },
  {
    id: 4,
    title: "Coming Home",
    year: "2025",
    medium: "Collage cutout on paper",
    dimensions: "A1 — 594 × 841 mm",
    image: comingHome,
    category: "COLLAGE",
  },
  {
    id: 5,
    title: "Mastino My Hero",
    year: "2024",
    medium: "Collage portrait on paper",
    dimensions: "A2 — 420 × 594 mm",
    subtitle: "Portrait of Hopema Ta",
    image: mastino,
    category: "COLLAGE",
  },
];

const heroArtworks = [artworks[0], artworks[1], artworks[2], artworks[3]];

function Hairline({ padded = false }: { padded?: boolean }) {
  return (
    <div
      style={{
        height: 1,
        backgroundColor: INK,
        marginLeft: padded ? 32 : 0,
        marginRight: padded ? 32 : 0,
      }}
    />
  );
}

export default function App() {
  const [heroIdx, setHeroIdx] = useState(0);
  const [navScrolled, setNavScrolled] = useState(false);
  const hero = heroArtworks[heroIdx];

  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      style={{ backgroundColor: CANVAS, color: INK, fontFamily: FONT }}
      className="min-h-screen"
    >
      {/* ── NAV ── */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingLeft: 32,
          paddingRight: 32,
          backgroundColor: navScrolled ? CANVAS : "transparent",
          borderBottom: navScrolled ? `1px solid ${INK}` : "1px solid transparent",
          transition: "background-color 0.3s, border-color 0.3s",
        }}
      >
        <a
          href="#top"
          style={{
            fontSize: 18,
            fontWeight: 500,
            letterSpacing: "-0.04em",
            color: navScrolled ? INK : CANVAS,
            textDecoration: "none",
            transition: "color 0.3s",
          }}
        >
          iamofilwe
        </a>
        <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
          {(["WORKS", "ABOUT", "CONTACT"] as const).map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              style={{
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: "0.1em",
                color: navScrolled ? INK : CANVAS,
                textDecoration: "none",
                opacity: 0.85,
                transition: "color 0.3s, opacity 0.2s",
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.opacity = "1")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.opacity = "0.85")}
            >
              {label}
            </a>
          ))}
        </div>
      </nav>

      {/* ── HERO ── */}
      <section
        id="top"
        style={{ position: "relative", height: "100vh", overflow: "hidden" }}
      >
        {/* Full-bleed artwork */}
        {heroArtworks.map((art, i) => (
          <img
            key={art.id}
            src={art.image}
            alt={art.title}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center top",
              opacity: i === heroIdx ? 1 : 0,
              transition: "opacity 0.7s ease",
            }}
          />
        ))}

        {/* Dark gradient at bottom for text legibility */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.2) 40%, transparent 70%)",
          }}
        />

        {/* Hero content */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            padding: "0 32px 36px",
          }}
        >
          {/* Left: artist name */}
          <div>
            <p
              style={{
                fontSize: 10,
                fontWeight: 500,
                letterSpacing: "0.12em",
                color: CANVAS,
                opacity: 0.75,
                marginBottom: 8,
              }}
            >
              ARTIST · SOUTH AFRICA
            </p>
            <h1
              style={{
                fontSize: "clamp(68px, 13vw, 160px)",
                fontWeight: 400,
                letterSpacing: "-0.05em",
                lineHeight: 1.0,
                color: CANVAS,
                margin: 0,
              }}
            >
              OFILWE
            </h1>
          </div>

          {/* Right: thumbnail strip */}
          <div
            style={{
              display: "flex",
              gap: 12,
              paddingBottom: 4,
              flexShrink: 0,
            }}
          >
            {heroArtworks.map((art, i) => (
              <button
                key={art.id}
                onClick={() => setHeroIdx(i)}
                style={{
                  width: 90,
                  height: 58,
                  padding: 0,
                  border: `1px solid ${i === heroIdx ? CANVAS : "rgba(246,241,235,0.35)"}`,
                  cursor: "pointer",
                  overflow: "hidden",
                  background: "none",
                  flexShrink: 0,
                  transition: "border-color 0.2s",
                }}
              >
                <img
                  src={art.image}
                  alt={art.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center top",
                    display: "block",
                  }}
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      <Hairline />

      {/* ── WORKS ── */}
      <section id="works" style={{ padding: "96px 32px" }}>
        {/* Section header */}
        <div style={{ marginBottom: 72 }}>
          <p
            style={{
              fontSize: 10,
              fontWeight: 500,
              letterSpacing: "0.12em",
              marginBottom: 16,
              color: SLATE,
            }}
          >
            SELECTED WORKS
          </p>
          <h2
            style={{
              fontSize: "clamp(48px, 7vw, 90px)",
              fontWeight: 500,
              letterSpacing: "-0.045em",
              lineHeight: 1.08,
              margin: 0,
              textTransform: "uppercase",
            }}
          >
            Material
            <br />
            Memory
          </h2>
        </div>

        {/* Gallery grid — asymmetric */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          {/* First artwork: full width */}
          <ArtworkCard artwork={artworks[0]} fullWidth />

          {/* Next two: side by side */}
          <ArtworkCard artwork={artworks[1]} />
          <ArtworkCard artwork={artworks[2]} />

          {/* Last two */}
          <ArtworkCard artwork={artworks[3]} />
          <ArtworkCard artwork={artworks[4]} />
        </div>
      </section>

      <Hairline padded />

      {/* ── ABOUT ── */}
      <section
        id="about"
        style={{
          padding: "96px 32px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "start",
        }}
      >
        {/* Left */}
        <div>
          <p
            style={{
              fontSize: 10,
              fontWeight: 500,
              letterSpacing: "0.12em",
              color: SLATE,
              marginBottom: 32,
            }}
          >
            ABOUT THE ARTIST
          </p>
          <h2
            style={{
              fontSize: "clamp(40px, 5.5vw, 68px)",
              fontWeight: 500,
              letterSpacing: "-0.04em",
              lineHeight: 1.12,
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            Reclaiming
            <br />
            Cloth,
            <br />
            Reclaiming
            <br />
            Story.
          </h2>
        </div>

        {/* Right */}
        <div style={{ paddingTop: 48 }}>
          <p
            style={{
              fontSize: 18,
              fontWeight: 400,
              lineHeight: 1.65,
              letterSpacing: "-0.004em",
              color: CHARCOAL,
              maxWidth: "52ch",
              marginBottom: 24,
            }}
          >
            Ofilwe is a South African artist working at the intersection of
            textile and memory. Drawing from discarded fabrics, worn garments,
            and recycled cloth, each work is a mosaic of lived experience —
            pieces stitched and layered to speak what language alone cannot.
          </p>
          <p
            style={{
              fontSize: 18,
              fontWeight: 400,
              lineHeight: 1.65,
              letterSpacing: "-0.004em",
              color: CHARCOAL,
              maxWidth: "52ch",
              marginBottom: 48,
            }}
          >
            The fabrics are not decoration. They are documents. Curtain cloth,
            old shirts, patterned African print — each carries a history before
            it arrives in the studio. Ofilwe transforms them into portraits,
            scenes, and statements that hold the weight of community, identity,
            and resilience.
          </p>

          <div
            style={{
              borderTop: `1px solid ${INK}`,
              paddingTop: 24,
              display: "flex",
              gap: 64,
            }}
          >
            <div>
              <p
                style={{
                  fontSize: 10,
                  fontWeight: 500,
                  letterSpacing: "0.12em",
                  color: SLATE,
                  marginBottom: 8,
                }}
              >
                MEDIUM
              </p>
              <p style={{ fontSize: 18, fontWeight: 400 }}>
                Recycled fabric &amp; collage
              </p>
            </div>
            <div>
              <p
                style={{
                  fontSize: 10,
                  fontWeight: 500,
                  letterSpacing: "0.12em",
                  color: SLATE,
                  marginBottom: 8,
                }}
              >
                BASED IN
              </p>
              <p style={{ fontSize: 18, fontWeight: 400 }}>South Africa</p>
            </div>
          </div>
        </div>
      </section>

      <Hairline />

      {/* ── CONTACT / FOOTER ── */}
      <section
        id="contact"
        style={{
          padding: "64px 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span
          style={{
            fontSize: "clamp(32px, 6vw, 80px)",
            fontWeight: 400,
            letterSpacing: "-0.045em",
            lineHeight: 1,
          }}
        >
          OFILWE
        </span>
        <div style={{ textAlign: "right" }}>
          <p
            style={{
              fontSize: 10,
              fontWeight: 500,
              letterSpacing: "0.12em",
              color: SLATE,
              marginBottom: 10,
            }}
          >
            INQUIRIES &amp; FOLLOW
          </p>
          <a
            href="https://www.instagram.com/iamofilwe"
            target="_blank"
            rel="noreferrer"
            style={{
              fontSize: 20,
              fontWeight: 400,
              color: INK,
              textDecoration: "none",
              letterSpacing: "-0.02em",
              display: "block",
              marginBottom: 6,
            }}
          >
            @iamofilwe
          </a>
          <p
            style={{
              fontSize: 12,
              letterSpacing: "0.083em",
              color: SLATE,
              textTransform: "uppercase",
            }}
          >
            © {new Date().getFullYear()} Ofilwe
          </p>
        </div>
      </section>
    </div>
  );
}

type Artwork = (typeof artworks)[number];

function ArtworkCard({
  artwork,
  fullWidth = false,
}: {
  artwork: Artwork;
  fullWidth?: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        gridColumn: fullWidth ? "1 / -1" : undefined,
      }}
    >
      {/* Image frame */}
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          border: `1px solid ${INK}`,
          overflow: "hidden",
          cursor: "pointer",
        }}
      >
        <img
          src={artwork.image}
          alt={artwork.title}
          style={{
            display: "block",
            width: "100%",
            aspectRatio: fullWidth ? "16/7" : "4/5",
            objectFit: "cover",
            objectPosition: "center top",
            transform: hovered ? "scale(1.03)" : "scale(1)",
            transition: "transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1)",
          }}
        />
      </div>

      {/* Metadata row */}
      <div
        style={{
          paddingTop: 16,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: 16,
        }}
      >
        <div>
          <p
            style={{
              fontSize: 10,
              fontWeight: 500,
              letterSpacing: "0.12em",
              color: SLATE,
              marginBottom: 6,
            }}
          >
            {artwork.category}
          </p>
          <h3
            style={{
              fontSize: 20,
              fontWeight: 400,
              letterSpacing: "-0.02em",
              lineHeight: 1.3,
              margin: 0,
            }}
          >
            {artwork.title}
          </h3>
          {artwork.subtitle && (
            <p
              style={{
                fontSize: 12,
                letterSpacing: "0.083em",
                color: SLATE,
                textTransform: "uppercase",
                marginTop: 4,
              }}
            >
              {artwork.subtitle}
            </p>
          )}
          {artwork.medium && (
            <p
              style={{
                fontSize: 12,
                letterSpacing: "0.083em",
                color: SLATE,
                textTransform: "uppercase",
                marginTop: 4,
              }}
            >
              {artwork.medium}
            </p>
          )}
          {"note" in artwork && artwork.note && (
            <p
              style={{
                fontSize: 12,
                letterSpacing: "0.083em",
                color: SLATE,
                textTransform: "uppercase",
                marginTop: 4,
              }}
            >
              {artwork.note as string}
            </p>
          )}
        </div>

        <div style={{ textAlign: "right", flexShrink: 0 }}>
          {artwork.year && (
            <p
              style={{
                fontSize: 12,
                fontWeight: 500,
                letterSpacing: "0.083em",
                textTransform: "uppercase",
              }}
            >
              {artwork.year}
            </p>
          )}
          {artwork.dimensions && (
            <p
              style={{
                fontSize: 12,
                letterSpacing: "0.083em",
                color: SLATE,
                textTransform: "uppercase",
                marginTop: 4,
              }}
            >
              {artwork.dimensions}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
