import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import { Gamepad2, MousePointerClick, Trophy, ShoppingBag, BarChart3, Users, MessageCircle, CalendarDays } from "lucide-react";

const features = [
  { icon: Gamepad2, title: "Eksplorasi Museum Bebas", desc: "Jelajahi museum & ruang budaya seperti dunia terbuka." },
  { icon: MousePointerClick, title: "Interaksi Artefak", desc: "Klik objek untuk melihat sejarah, filosofi, dan audio penjelasan." },
  { icon: Trophy, title: "Sistem Reward Budaya", desc: "Main konsisten → dapat reward → tukarkan tiket museum nyata & merchandise." },
  { icon: ShoppingBag, title: "Dukungan UMKM Budaya", desc: "Pelajari & beli produk budaya dengan pemahaman mendalam." },
  { icon: BarChart3, title: "Insight Budaya", desc: "Data minat masyarakat untuk pemerintah & pengelola museum (khusus partner)." },
  { icon: Users, title: "Komunitas Budaya", desc: "Terhubung dengan sesama pecinta budaya dari seluruh Indonesia." },
  { icon: MessageCircle, title: "CS Chatbot", desc: "Bantuan cepat untuk navigasi & info dalam aplikasi." },
  { icon: CalendarDays, title: "Kalender Budaya", desc: "Info hari besar & event budaya Indonesia terlengkap." },
];

const FeaturesSection = () => (
  <SectionWrapper id="fitur">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gradient-gold mb-4">
        Fitur Utama
      </h2>
      <p className="text-muted-foreground font-body max-w-xl mx-auto">
        Semua yang kamu butuhkan untuk menjelajahi budaya Indonesia secara digital.
      </p>
    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {features.map((f, i) => (
        <motion.div
          key={f.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08, duration: 0.5 }}
          whileHover={{ y: -6 }}
          className="bg-card border border-gold/10 rounded-xl p-6 group hover:border-gold/30 hover:glow-gold transition-all duration-300 cursor-default"
        >
          <div className="w-12 h-12 mb-4 rounded-lg bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
            <f.icon className="w-6 h-6 text-gold" />
          </div>
          <h3 className="text-base font-display font-bold text-foreground mb-2">{f.title}</h3>
          <p className="text-muted-foreground font-body text-sm leading-relaxed">{f.desc}</p>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default FeaturesSection;
