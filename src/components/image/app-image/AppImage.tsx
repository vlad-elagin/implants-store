import "./AppImage.css";

type AppImageProps = {
  src: string;
  alt: string;
  className?: string;
  loading?: "eager" | "lazy";
};

export function AppImage({ src, alt, className = "", loading = "lazy" }: AppImageProps) {
  return (
    <img
      className={`app-image ${className}`.trim()}
      src={src}
      alt={alt}
      loading={loading}
      decoding="async"
    />
  );
}
