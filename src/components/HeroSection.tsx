import { Button } from "@/components/ui/button";
import { Download, Mail, Github, Linkedin } from "lucide-react";
import heroVisualization from "@/assets/hero-3d-visualization.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center section-container section-padding">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left Content */}
        <div className="space-y-8 fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-orbitron font-bold leading-tight">
              <span className="text-foreground">Akshat</span>
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Raj
              </span>
            </h1>
            
            <div className="text-xl md:text-2xl text-muted-foreground font-inter font-light">
              <span className="block mb-2">Turning Data Into Decisions</span>
              <div className="flex flex-wrap gap-2 text-lg">
                <span className="px-3 py-1 bg-secondary rounded-full">Business Analyst</span>
                <span className="px-3 py-1 bg-secondary rounded-full">Data Analyst</span>
                <span className="px-3 py-1 bg-secondary rounded-full">AI/ML Engineer</span>
              </div>
            </div>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Passionate about transforming raw data into actionable insights and intelligent solutions. 
            I bridge business needs with cutting-edge technology to solve real-world problems.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="btn-hero group">
              <Download className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
              Download Resume
            </Button>
            <Button variant="outline" className="btn-outline-hero group">
              <Mail className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
              Contact Me
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 pt-4">
            <Button variant="ghost" size="icon" className="btn-ghost hover:text-accent">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="btn-ghost hover:text-accent">
              <Linkedin className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Right Content - 3D Visualization */}
        <div className="relative fade-in-delay">
          <div className="relative group">
            <img 
              src={heroVisualization}
              alt="3D Data Visualization"
              className="w-full h-auto rounded-2xl shadow-lg animate-float"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          
          {/* Floating elements */}
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full animate-glow opacity-60"></div>
          <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-primary rounded-full animate-glow opacity-40" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/3 -left-8 w-4 h-4 bg-neon-blue rounded-full animate-glow opacity-50" style={{animationDelay: '2s'}}></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;