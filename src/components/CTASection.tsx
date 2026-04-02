import { motion } from "framer-motion";
import { Compass, Handshake } from "lucide-react";

const CTASection = () => (
  <motion.section
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7 }}
    className="py-24 px-4"
  >
    <div className="container mx-auto max-w-3xl text-center">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gradient-gold mb-6">
        Siap menjelajahi budaya Indonesia dengan cara baru?
      </h2>
      <p className="text-muted-foreground font-body text-lg mb-10 max-w-xl mx-auto">
        Bergabunglah sekarang dan jadilah bagian dari gerakan pelestarian budaya digital Indonesia.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="bg-gradient-gold text-primary-foreground font-body font-bold px-8 py-4 rounded-lg text-lg flex items-center justify-center gap-3 hover:scale-105 transition-transform duration-300 glow-gold">
          <Gamepad2 className="w-5 h-5" />
          Mulai Sekarang
        </button>
        <button className="border border-gold/30 text-gold font-body font-semibold px-8 py-4 rounded-lg text-lg flex items-center justify-center gap-3 hover:bg-gold/10 transition-all duration-300">
          <Handshake className="w-5 h-5" />
          Jadi Partner
        </button>
      </div>
    </div>
  </motion.section>
);

export default CTASection;
