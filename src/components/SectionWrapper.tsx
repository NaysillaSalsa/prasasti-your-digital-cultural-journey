import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

const SectionWrapper = ({ children, className = "", id }: SectionWrapperProps) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    className={`py-16 md:py-24 px-4 relative overflow-hidden ${className}`}
  >
    {/* Subtle heritage silhouette decorations */}
    <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
      {/* Top-right silhouette */}
      <svg
        className="absolute -top-8 -right-12 w-48 h-48 md:w-64 md:h-64 text-gold/[0.04]"
        viewBox="0 0 200 200"
        fill="currentColor"
      >
        {/* Candi / temple silhouette */}
        <path d="M100 20 L120 50 L130 50 L130 80 L140 80 L140 50 L150 50 L150 80 L160 80 L160 100 L170 100 L170 180 L30 180 L30 100 L40 100 L40 80 L50 80 L50 50 L60 50 L60 80 L70 80 L70 50 L80 50 Z" />
        <path d="M85 120 L115 120 L115 180 L85 180 Z" />
      </svg>

      {/* Bottom-left silhouette */}
      <svg
        className="absolute -bottom-6 -left-10 w-40 h-40 md:w-56 md:h-56 text-gold/[0.03] rotate-12"
        viewBox="0 0 200 200"
        fill="currentColor"
      >
        {/* Keris / wayang silhouette */}
        <path d="M100 10 C95 30 85 40 90 60 C95 80 85 90 90 110 C95 130 90 140 95 160 L100 190 L105 160 C110 140 105 130 110 110 C115 90 105 80 110 60 C115 40 105 30 100 10 Z" />
      </svg>
    </div>

    <div className="container mx-auto max-w-6xl relative z-10">{children}</div>
  </motion.section>
);

export default SectionWrapper;
