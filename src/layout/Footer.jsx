import { FaGithub, FaLinkedin, FaFacebookF } from "react-icons/fa";

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/Ah-med1911", label: "GitHub" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/ahmed-khalil-23888b309/", label: "LinkedIn" },
  { icon: FaFacebookF, href: "https://www.facebook.com/ahmed.osama.597906/", label: "Facebook" },
];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#certificates", label: "Certificates" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <a href="#" className="text-xl font-bold tracking-tight">
              Ahmed<span className="text-primary">.</span>
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} Ahmed Osama. All rights reserved.
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[15px] text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                target="_blank"
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="p-2.5 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
