import akshatProfile from "@/assets/akshat-profile.jpg";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const AboutSection = () => {
  const highlights = [
    "3+ years in data analysis",
    "AI/ML project experience", 
    "Business problem solving",
    "Cross-functional collaboration"
  ];

  return (
    <section id="about" className="section-container section-padding bg-secondary/30">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left - Profile Image */}
        <div className="relative fade-in">
          <div className="relative group">
            <Card className="card-3d overflow-hidden">
              <img 
                src={akshatProfile}
                alt="Akshat Raj - Professional Profile"
                className="w-full h-auto object-cover"
              />
            </Card>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 border-2 border-accent rounded-full opacity-30"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full opacity-20"></div>
          </div>
        </div>

        {/* Right - Bio Content */}
        <div className="space-y-8 fade-in-delay">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold">
              About <span className="text-accent">Me</span>
            </h2>
            
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full"></div>
          </div>

          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              I'm <strong className="text-foreground">Akshat Raj</strong>, a Business Analyst, Data Enthusiast, 
              and AI/ML Engineer passionate about transforming raw data into actionable insights and intelligent solutions.
            </p>
            
            <p>
              With hands-on experience in data science projects and internships, I combine analytical rigor 
              with problem-solving skills to bridge business needs and technology.
            </p>
            
            <p>
              <strong className="text-accent">My goal:</strong> to grow as a BA/PM while leveraging 
              AI-driven tools and data analytics to solve real-world problems.
            </p>
          </div>

          {/* Highlights */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">Key Highlights</h3>
            <div className="grid grid-cols-2 gap-3">
              {highlights.map((highlight, index) => (
                <Badge 
                  key={index}
                  variant="secondary" 
                  className="p-3 text-sm hover-lift justify-start"
                >
                  {highlight}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;