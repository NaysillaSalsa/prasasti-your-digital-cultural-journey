import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import { Frown, MapPinOff, EyeOff } from "lucide-react";

const challenges = [
  {
    icon: Frown,
    title: "Museum Dianggap Membosankan",
    desc: "Generasi muda kehilangan minat mengunjungi museum karena pengalaman yang monoton dan kurang interaktif.",
  },
  {
    icon: MapPinOff,
    title: "Akses Terbatas",
    desc: "Lokasi & waktu operasional museum membatasi siapa saja yang bisa menikmati warisan budaya.",
  },
  {
    icon: EyeOff,
    title: "Budaya Hanya Dilihat, Tidak Dipahami",
    desc: "Tanpa konteks dan narasi yang menarik, artefak budaya kehilangan maknanya bagi generasi digital.",
  },
];

const ChallengeSection = () => (
  <SectionWrapper id="tantangan">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gradient-gold mb-4">
        Tantangan
      </h2>
      <p className="text-foreground/90 text-lg md:text-xl max-w-2xl mx-auto font-body">
        "Budaya Indonesia kaya, tapi semakin jauh dari generasi muda."
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-6">
      {challenges.map((item, i) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15, duration: 0.5 }}
          whileHover={{ y: -8, scale: 1.02 }}
          className="bg-card border border-gold/10 rounded-xl p-8 text-center group hover:border-gold/30 transition-colors duration-300"
        >
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
            <item.icon className="w-8 h-8 text-gold" />
          </div>
          <h3 className="text-xl font-display font-bold text-foreground mb-3">{item.title}</h3>
          <p className="text-muted-foreground font-body text-sm leading-relaxed">{item.desc}</p>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default ChallengeSection;
