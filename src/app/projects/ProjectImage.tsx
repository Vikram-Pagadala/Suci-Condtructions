"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";

interface ProjectImageProps {
  src: string;
  alt: string;
}

export default function ProjectImage({ src, alt }: ProjectImageProps) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className={`${styles.imageFrame} ${styles.fallbackImage}`} role="img" aria-label={alt}>
        <span>Image coming soon</span>
      </div>
    );
  }

  return (
    <div className={styles.imageFrame}>
      <Image
        src={src}
        alt={alt}
        fill
        className={styles.image}
        onError={() => setError(true)}
        sizes="(max-width: 639px) 100vw, (max-width: 1099px) 50vw, (max-width: 1320px) 33vw, 400px"
      />
    </div>
  );
}
