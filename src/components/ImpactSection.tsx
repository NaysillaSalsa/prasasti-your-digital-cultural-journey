import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import { Landmark, TrendingUp, ShoppingBag, FileBarChart } from "lucide-react";

const impacts = [
  { icon: Landmark, title: "Melestarikan Budaya Indonesia", desc: "Menjaga warisan budaya tetap hidup di era digital." },
  { icon: TrendingUp, title: "Meningkatkan Minat Museum", desc: "Mengubah persepsi museum menjadi tempat yang menyenangkan." },
  { icon: ShoppingBag, title: "Membantu UMKM Budaya", desc: "Membuka pasar baru untuk produk budaya lokal." },
  { icon: FileBarChart, title: "Menyediakan Data untuk Kebijakan", desc: "Insight berbasis data untuk pengembangan budaya nasional." },
];

const ImpactSection = () => (
  <SectionWrapper id="dampak">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gradient-gold mb-4">
        Dampak
      </h2>
    </div>

    <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
      {impacts.map((item, i) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          className="flex gap-4 items-start bg-card border border-gold/10 rounded-xl p-6 hover:border-gold/30 transition-colors"
        >
          <div className="w-12 h-12 shrink-0 rounded-lg bg-gold/10 flex items-center justify-center">
            <item.icon className="w-6 h-6 text-gold" />
          </div>
          <div>
            <h3 className="text-lg font-display font-bold text-foreground mb-1">{item.title}</h3>
            <p className="text-muted-foreground font-body text-sm">{item.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default ImpactSection;
