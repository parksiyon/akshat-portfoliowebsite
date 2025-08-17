import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="section-container">
        <div className="py-12 space-y-8">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="font-orbitron font-bold text-2xl">
                <span className="text-primary-foreground">Akshat</span>
                <span className="text-accent">.</span>
              </div>
              <p className="text-primary-foreground/80 leading-relaxed">
                Transforming data into decisions through business analysis, data science, and AI/ML engineering.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="font-orbitron font-semibold text-lg">Quick Links</h3>
              <div className="space-y-2">
                {["About", "Projects", "Experience", "Skills", "Contact"].map((link) => (
                  <Button
                    key={link}
                    variant="ghost"
                    className="btn-ghost text-primary-foreground/80 hover:text-accent p-0 h-auto justify-start"
                  >
                    {link}
                  </Button>
                ))}
              </div>
            </div>

            {/* Connect */}
            <div className="space-y-4">
              <h3 className="font-orbitron font-semibold text-lg">Let's Connect</h3>
              <div className="flex gap-3">
                <Button variant="ghost" size="icon" className="hover:text-accent hover:bg-primary-foreground/10">
                  <Github className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-accent hover:bg-primary-foreground/10">
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-accent hover:bg-primary-foreground/10">
                  <Mail className="h-5 w-5" />
                </Button>
              </div>
              <p className="text-primary-foreground/80 text-sm">
                Open to new opportunities and collaborations in data analytics and business intelligence.
              </p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-primary-foreground/20 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-primary-foreground/80 text-sm flex items-center gap-2">
                © {currentYear} Akshat Raj. Built with 
                <Heart className="h-4 w-4 text-accent" />
                and React
              </p>
              <div className="flex gap-6 text-sm text-primary-foreground/80">
                <Button variant="ghost" className="btn-ghost p-0 h-auto text-sm">
                  Privacy Policy
                </Button>
                <Button variant="ghost" className="btn-ghost p-0 h-auto text-sm">
                  Terms of Service
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;