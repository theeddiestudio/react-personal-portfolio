import { Mail, MessageCircle, Github, Linkedin } from "lucide-react";

const socialLinks = [
  { icon: Mail, href: "mailto:dkashwin576@gmail.com"},
  { icon: Linkedin, href: "https://www.linkedin.com/in/ashwindhakal007"},
  { icon: Github, href: "https://github.com/theeddiestudio"},
  { icon: MessageCircle, href: "https://wa.me/9844888978"},
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="/" className="text-xl font-bold tracking-tight">
              TES<span className="text-primary">.</span>
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} Ashwin Dhakal. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};