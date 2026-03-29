import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const SolutionSection = () => (
  <SectionWrapper id="solusi" className="relative">
    <div className="text-center max-w-3xl mx-auto">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-gradient-gold flex items-center justify-center glow-gold"
      >
        <Sparkles className="w-10 h-10 text-primary-foreground" />
      </motion.div>

      <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gradient-gold mb-6">
        Solusi
      </h2>
      <p className="text-foreground/90 text-xl md:text-2xl font-body leading-relaxed">
        <span className="font-bold text-gold">PRASASTI</span> menghadirkan museum dalam bentuk{" "}
        <span className="text-gold-light font-semibold">game gamifikasi</span> — pengalaman eksplorasi budaya yang interaktif, seru, dan bisa diakses kapan saja, di mana saja.
      </p>
    </div>
  </SectionWrapper>
);

export default SolutionSection;
