import Image from "next/image";
import { PortfolioAsset } from "@/data/projects";
export function PortfolioImage({
  asset,
  priority = false,
  className = "",
  sizes = "100vw",
}: {
  asset: PortfolioAsset;
  priority?: boolean;
  className?: string;
  sizes?: string;
}) {
  return (
    <figure className={`portfolio-image ${className}`}>
      <div className="image-frame">
        <Image
          src={asset.src}
          alt={asset.alt}
          fill
          priority={priority}
          sizes={sizes}
        />
        {asset.source === "concept-ai" && (
          <span className="concept-label">Concept image · AI-generated</span>
        )}
      </div>
      <figcaption>
        {asset.source === "concept-ai"
          ? "Layout visualization, not a completed project"
          : asset.credit || "Aaron Parnala Projects"}
      </figcaption>
    </figure>
  );
}
