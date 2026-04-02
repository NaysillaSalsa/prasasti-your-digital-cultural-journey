import { Mail, Instagram, Twitter, Youtube } from "lucide-react";

const FooterSection = () => (
  <footer className="border-t border-gold/10 py-12 px-4">
    <div className="container mx-auto max-w-6xl">
      <div className="grid md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-display font-bold text-gradient-gold mb-3">PRASASTI</h3>
          <p className="text-muted-foreground font-body text-sm leading-relaxed">
            Platform Ragam Artefak, Seni, Adat dan Sejarah Tradisi Indonesia.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-body font-bold text-foreground uppercase tracking-wider mb-4">Kontak</h4>
          <div className="space-y-2 text-muted-foreground font-body text-sm">
            <a href="mailto:hello@prasasti.rozag.my.id" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Mail className="w-4 h-4" /> hello@prasasti.rozag.my.id
            </a>
          </div>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-sm font-body font-bold text-foreground uppercase tracking-wider mb-4">Sosial Media</h4>
          <div className="flex gap-4">
            {[Instagram, Twitter, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-lg bg-card border border-gold/10 flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold/30 transition-all duration-300"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-gold/10 text-center">
        <p className="text-muted-foreground font-body text-xs">
          © 2026 PRASASTI. Dibuat dengan ❤️ untuk budaya Indonesia.
        </p>
      </div>
    </div>
  </footer>
);

export default FooterSection;
