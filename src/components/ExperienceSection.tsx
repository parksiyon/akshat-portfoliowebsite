import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, Award } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      type: "work",
      icon: Briefcase,
      title: "Data Science Intern",
      company: "Tech Solutions Inc.",
      duration: "Jun 2023 - Aug 2023",
      description: "Developed analytical dashboards and insights for business decision-making. Worked with AI/ML models for text processing and natural language understanding.",
      achievements: [
        "Built interactive dashboards using Tableau and Power BI",
        "Implemented RAG-based document analysis system",
        "Collaborated with cross-functional teams on data-driven solutions"
      ],
      skills: ["Python", "Tableau", "SQL", "Machine Learning"]
    },
    {
      type: "education",
      icon: GraduationCap,
      title: "Bachelor of Technology",
      company: "Computer Science Engineering",
      duration: "2021 - 2025",
      description: "Focused on data structures, algorithms, machine learning, and software development with emphasis on business applications.",
      achievements: [
        "Relevant coursework in AI/ML and Data Analytics",
        "Led multiple team projects on business problem solving",
        "Maintained strong academic performance with focus on practical applications"
      ],
      skills: ["Data Structures", "Algorithms", "Machine Learning", "Software Engineering"]
    },
    {
      type: "project",
      icon: Award,
      title: "Business Analytics Project",
      company: "Academic Research",
      duration: "Jan 2023 - May 2023",
      description: "Led a comprehensive business analytics project analyzing market trends and customer behavior patterns for local businesses.",
      achievements: [
        "Conducted market research and data collection",
        "Performed statistical analysis and predictive modeling",
        "Presented actionable insights to business stakeholders"
      ],
      skills: ["Market Research", "Statistical Analysis", "Business Intelligence", "Presentation"]
    }
  ];

  const getIconBg = (type: string) => {
    switch (type) {
      case "work": return "bg-primary/10 text-primary";
      case "education": return "bg-accent/10 text-accent";
      case "project": return "bg-secondary text-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="experience" className="section-container section-padding bg-secondary/30">
      <div className="space-y-12">
        {/* Header */}
        <div className="text-center space-y-4 fade-in">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold">
            My <span className="text-accent">Journey</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full mx-auto"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building expertise through hands-on experience and continuous learning
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary opacity-30"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex gap-8 group fade-in-delay">
                {/* Timeline Icon */}
                <div className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${getIconBg(exp.type)}`}>
                  <exp.icon className="h-6 w-6" />
                </div>

                {/* Content Card */}
                <Card className="card-3d flex-1 group-hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6 space-y-4">
                    {/* Header */}
                    <div className="space-y-2">
                      <div className="flex items-start justify-between flex-wrap gap-2">
                        <h3 className="text-xl font-orbitron font-semibold group-hover:text-accent transition-colors">
                          {exp.title}
                        </h3>
                        <Badge variant="outline" className="text-xs">
                          {exp.duration}
                        </Badge>
                      </div>
                      <p className="text-accent font-medium">{exp.company}</p>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Key Achievements</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-sm text-muted-foreground flex items-start">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2 mt-2 flex-shrink-0"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Skills */}
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Technologies Used</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;