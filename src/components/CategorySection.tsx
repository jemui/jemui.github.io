"use client";

import { useEffect, useRef, useState } from "react";

interface CategorySectionProps {
  title: string;
  children: React.ReactNode;
}

export default function CategorySection({ title, children }: CategorySectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsFocused(entry.isIntersecting),
      { rootMargin: "-30% 0px -30% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="mb-12 text-center">
      <h2 className="relative inline-block text-lg font-bold uppercase tracking-widest pb-2 mb-6">
        {title}
        <span
          className={`absolute bottom-0 left-1/2 h-0.5 -translate-x-1/2 bg-zinc-400 transition-all duration-500 ${
            isFocused ? "w-[140%]" : "w-full"
          }`}
        />
      </h2>
      {children}
    </section>
  );
}