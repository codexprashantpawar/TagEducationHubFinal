import { useEffect, useRef, useState, type ReactNode, type Ref } from "react";

export function HeadingReveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "h2",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4";
}) {
  const ref = useRef<HTMLHeadingElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as Ref<HTMLHeadingElement>}
      style={{ transitionDelay: `${delay}ms` }}
      className={`heading-reveal ${shown ? "heading-reveal-visible" : ""} ${className}`}
    >
      {children}
    </Tag>
  );
}
