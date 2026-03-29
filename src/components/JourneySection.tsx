import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import { LogIn, Map, MousePointerClick, BookOpen, Award, Gift } from "lucide-react";

const steps = [
  { icon: LogIn, label: "Masuk ke Game" },
  { icon: Map, label: "Jelajahi Museum" },
  { icon: MousePointerClick, label: "Klik Artefak" },
  { icon: BookOpen, label: "Pelajari Makna" },
  { icon: Award, label: "Dapatkan Reward" },
  { icon: Gift, label: "Tukarkan di Dunia Nyata" },
];

const JourneySection = () => (
  <SectionWrapper id="alur">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gradient-gold mb-4">
        Alur Petualangan
      </h2>
      <p className="text-muted-foreground font-body">Dari layar ke dunia nyata, inilah perjalananmu.</p>
    </div>

    <div className="relative">
      {/* Connecting line */}
      <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent -translate-y-1/2" />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {steps.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.4 }}
            className="flex flex-col items-center text-center relative"
          >
            <div className="w-16 h-16 rounded-2xl bg-card border border-gold/20 flex items-center justify-center mb-4 relative z-10 group hover:border-gold/50 hover:glow-gold transition-all duration-300">
              <s.icon className="w-7 h-7 text-gold" />
            </div>
            <span className="text-xs font-body font-semibold text-gold/60 mb-1">0{i + 1}</span>
            <span className="text-sm font-body font-medium text-foreground">{s.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default JourneySection;
