import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import heroIllustration from "@/assets/hero-illustration.png";
import { Gamepad2, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="PRASASTI Hero Background"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Content - Split Layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* LEFT - Text Content (45%) */}
          <div className="w-full lg:w-[45%] text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-primary text-xs md:text-sm tracking-[0.25em] uppercase mb-5 font-body font-medium"
            >
              Platform Ragam Artefak, Seni, Adat & Sejarah Tradisi Indonesia
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-5xl md:text-7xl lg:text-8xl font-display font-black text-gradient-gold mb-5 tracking-tight leading-[0.95]"
            >
              PRASASTI
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-foreground/85 text-base md:text-lg max-w-md mx-auto lg:mx-0 mb-3 font-body leading-relaxed"
            >
              Jelajahi museum Indonesia, temukan makna tersembunyi, dan hidupkan kembali budaya dalam dunia digital.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-muted-foreground text-sm max-w-sm mx-auto lg:mx-0 mb-10 font-body"
            >
              Game gamifikasi eksplorasi museum berbasis mobile yang menghadirkan pengalaman belajar budaya secara interaktif, santai, dan tanpa batas ruang.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button className="bg-gradient-gold text-primary-foreground font-body font-bold px-8 py-4 rounded-lg text-base flex items-center justify-center gap-3 hover:scale-105 transition-transform duration-300 glow-gold">
                <Gamepad2 className="w-5 h-5" />
                Mulai Jelajah
              </button>
              <button className="border border-primary/30 text-primary font-body font-semibold px-8 py-4 rounded-lg text-base flex items-center justify-center gap-3 hover:bg-primary/10 transition-all duration-300">
                <Play className="w-5 h-5" />
                Lihat Demo
              </button>
            </motion.div>
          </div>

          {/* RIGHT - Visual (55%) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="w-full lg:w-[55%] flex items-center justify-center relative"
          >
            {/* Glow effect behind illustration */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[70%] h-[70%] rounded-full bg-primary/10 blur-[80px]" />
            </div>

            <img
              src={heroIllustration}
              alt="Karakter eksplorasi budaya PRASASTI"
              width={896}
              height={1024}
              className="relative z-10 w-full max-w-md lg:max-w-lg xl:max-w-xl h-auto drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 rounded-full bg-primary animate-fade-up" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
