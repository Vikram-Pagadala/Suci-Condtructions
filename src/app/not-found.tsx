import Link from "next/link";

export default function NotFound() {
  return (
    <section
      style={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "120px 20px 80px",
        backgroundColor: "var(--color-lime-plaster)",
      }}
    >
      <h1 style={{ fontSize: "96px", color: "var(--color-aged-brass)", marginBottom: "16px", fontFamily: "var(--font-bodoni), serif" }}>
        404
      </h1>
      <h2 style={{ marginBottom: "16px" }}>Page not found</h2>
      <p style={{ color: "var(--color-tandur-stone)", marginBottom: "32px", maxWidth: "480px" }}>
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        style={{
          display: "inline-block",
          backgroundColor: "var(--color-aged-brass)",
          color: "var(--color-pure-white)",
          padding: "14px 28px",
          borderRadius: "2px",
          fontWeight: 600,
          fontSize: "16px",
          transition: "background-color 0.2s ease",
        }}
      >
        Back to home
      </Link>
    </section>
  );
}
