import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import { Gamepad2, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="PRASASTI Hero Background"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-gold-light text-sm md:text-base tracking-[0.3em] uppercase mb-4 font-body font-medium">
            Platform Ragam Artefak, Seni, Adat & Sejarah Tradisi Indonesia
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl lg:text-9xl font-display font-black text-gradient-gold mb-6 tracking-tight"
        >
          PRASASTI
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-4 font-body leading-relaxed"
        >
          Jelajahi museum Indonesia, temukan makna tersembunyi, dan hidupkan kembali budaya dalam dunia digital.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto mb-10 font-body"
        >
          Game gamifikasi eksplorasi museum berbasis mobile yang menghadirkan pengalaman belajar budaya secara interaktif, santai, dan tanpa batas ruang.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="bg-gradient-gold text-primary-foreground font-body font-bold px-8 py-4 rounded-lg text-lg flex items-center justify-center gap-3 hover:scale-105 transition-transform duration-300 glow-gold">
            <Gamepad2 className="w-5 h-5" />
            Mulai Jelajah
          </button>
          <button className="border border-gold/30 text-gold font-body font-semibold px-8 py-4 rounded-lg text-lg flex items-center justify-center gap-3 hover:bg-gold/10 transition-all duration-300">
            <Play className="w-5 h-5" />
            Lihat Demo
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-gold/30 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 rounded-full bg-gold animate-fade-up" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
