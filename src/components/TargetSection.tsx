import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import { GraduationCap, Building2 } from "lucide-react";

const targets = [
  {
    icon: GraduationCap,
    title: "Generasi Muda",
    desc: "Pelajar dan mahasiswa yang ingin mengenal budaya Indonesia dengan cara seru dan interaktif.",
  },
  {
    icon: Building2,
    title: "Instansi Budaya",
    desc: "Museum, dinas kebudayaan, dan lembaga yang ingin menjangkau audiens lebih luas secara digital.",
  },
];

const TargetSection = () => (
  <SectionWrapper id="target">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gradient-gold mb-4">
        Target User
      </h2>
    </div>

    <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
      {targets.map((t, i) => (
        <motion.div
          key={t.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15, duration: 0.5 }}
          whileHover={{ scale: 1.03 }}
          className="bg-card border border-gold/10 rounded-2xl p-8 text-center hover:border-gold/30 hover:glow-gold transition-all duration-300"
        >
          <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-gold flex items-center justify-center">
            <t.icon className="w-10 h-10 text-primary-foreground" />
          </div>
          <h3 className="text-2xl font-display font-bold text-foreground mb-3">{t.title}</h3>
          <p className="text-muted-foreground font-body leading-relaxed">{t.desc}</p>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default TargetSection;
