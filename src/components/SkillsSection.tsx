import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart, Brain, Users, Code } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: BarChart,
      title: "Business Analysis",
      description: "Data-driven insights and business intelligence",
      skills: ["SQL", "Excel", "Tableau", "Power BI", "Data Modeling", "KPI Analysis"],
      color: "primary"
    },
    {
      icon: Code,
      title: "Data Analysis", 
      description: "Statistical analysis and data visualization",
      skills: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter"],
      color: "accent"
    },
    {
      icon: Brain,
      title: "AI/ML Tools",
      description: "Machine learning and artificial intelligence",
      skills: ["LangChain", "FAISS", "HuggingFace", "LLMs", "Scikit-learn", "TensorFlow"],
      color: "secondary"
    },
    {
      icon: Users,
      title: "Soft Skills",
      description: "Essential professional competencies",
      skills: ["Problem Solving", "Communication", "Critical Thinking", "Team Collaboration", "Project Management", "Stakeholder Management"],
      color: "muted"
    }
  ];

  const getCardStyles = (color: string) => {
    const styles = {
      primary: "border-primary/20 hover:border-primary/40",
      accent: "border-accent/20 hover:border-accent/40", 
      secondary: "border-secondary hover:border-muted-foreground/40",
      muted: "border-muted-foreground/20 hover:border-muted-foreground/40"
    };
    return styles[color as keyof typeof styles] || styles.muted;
  };

  const getIconStyles = (color: string) => {
    const styles = {
      primary: "bg-primary/10 text-primary",
      accent: "bg-accent/10 text-accent",
      secondary: "bg-secondary text-foreground",
      muted: "bg-muted text-muted-foreground"
    };
    return styles[color as keyof typeof styles] || styles.muted;
  };

  return (
    <section id="skills" className="section-container section-padding">
      <div className="space-y-12">
        {/* Header */}
        <div className="text-center space-y-4 fade-in">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold">
            Skills & <span className="text-accent">Expertise</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full mx-auto"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for turning data into actionable business insights
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className={`card-3d group ${getCardStyles(category.color)} transition-all duration-300 fade-in-delay`}
            >
              <CardHeader className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${getIconStyles(category.color)}`}>
                    <category.icon className="h-6 w-6" />
                  </div>
                  <div className="space-y-1">
                    <CardTitle className="text-xl font-orbitron group-hover:text-accent transition-colors">
                      {category.title}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {category.description}
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary" 
                      className="hover-lift text-sm px-3 py-1.5 transition-all duration-200 hover:bg-accent/10 hover:text-accent hover:border-accent/30"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center space-y-4 fade-in-delay">
          <Card className="card-3d max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-orbitron font-semibold mb-4">
                Continuous Learning Journey
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm constantly expanding my skillset through hands-on projects, online courses, and industry certifications. 
                Currently exploring advanced AI/ML techniques, cloud platforms, and modern business intelligence tools 
                to stay at the forefront of data-driven decision making.
              </p>
              <div className="flex flex-wrap gap-2 mt-4 justify-center">
                <Badge variant="outline" className="text-sm">
                  Currently Learning: AWS
                </Badge>
                <Badge variant="outline" className="text-sm">
                  Next: Google Cloud Platform
                </Badge>
                <Badge variant="outline" className="text-sm">
                  Goal: Advanced MLOps
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;