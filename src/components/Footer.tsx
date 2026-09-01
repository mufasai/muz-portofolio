import { Github, Linkedin } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <a href="#home" className="text-2xl font-bold tracking-tighter">
              MUZ<span className="text-orange-500">ZIE.</span>
            </a>
            <p className="text-zinc-500 text-sm mt-2">© {new Date().getFullYear()} Muzzie. {t.footer.rights}</p>
          </div>

          <div className="flex items-center gap-6">
            {[
              { Icon: Github, href: "https://github.com/mufasai" },
              { Icon: Linkedin, href: "https://www.linkedin.com/in/musyafa-fadila/" },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-zinc-400 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          <div className="flex gap-8 text-sm text-zinc-500">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;