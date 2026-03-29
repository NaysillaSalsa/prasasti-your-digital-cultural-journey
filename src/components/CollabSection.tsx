import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import { Landmark, Building, Store, UsersRound } from "lucide-react";

const partners = [
  { icon: Landmark, label: "Museum" },
  { icon: Building, label: "Pemerintah" },
  { icon: Store, label: "UMKM Budaya" },
  { icon: UsersRound, label: "Komunitas" },
];

const CollabSection = () => (
  <SectionWrapper id="kolaborasi">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gradient-gold mb-4">
        Kolaborasi
      </h2>
      <p className="text-foreground/80 text-lg font-body">
        "Kami membuka kolaborasi dengan…"
      </p>
    </div>

    <div className="flex flex-wrap justify-center gap-6">
      {partners.map((p, i) => (
        <motion.div
          key={p.label}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.4 }}
          whileHover={{ scale: 1.08, y: -4 }}
          className="w-36 h-36 bg-card border border-gold/15 rounded-2xl flex flex-col items-center justify-center gap-3 hover:border-gold/40 hover:glow-gold transition-all duration-300 cursor-default"
        >
          <p.icon className="w-10 h-10 text-gold" />
          <span className="text-sm font-body font-semibold text-foreground">{p.label}</span>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default CollabSection;
