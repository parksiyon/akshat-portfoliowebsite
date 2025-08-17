import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Plus } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "ScandDoc AI Assistant (V1)",
      description: "AI-powered document analysis assistant using Large Language Models and Retrieval-Augmented Generation for intelligent Q&A capabilities.",
      techStack: ["Python", "LangChain", "FAISS", "Streamlit", "OpenAI"],
      features: [
        "Document upload and processing",
        "RAG-based question answering", 
        "Vector similarity search",
        "Interactive chat interface"
      ],
      githubUrl: "#",
      demoUrl: "#",
      status: "Completed"
    }
  ];

  return (
    <section id="projects" className="section-container section-padding">
      <div className="space-y-12">
        {/* Header */}
        <div className="text-center space-y-4 fade-in">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold">
            Featured <span className="text-accent">Projects</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full mx-auto"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing real-world applications of data science, AI/ML, and business analysis
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="card-3d card-glow group fade-in-delay">
              <CardHeader className="space-y-4">
                <div className="flex items-start justify-between">
                  <Badge variant="secondary" className="text-xs">
                    {project.status}
                  </Badge>
                  <div className="flex gap-2">
                    <Button size="icon" variant="ghost" className="h-8 w-8 opacity-60 group-hover:opacity-100 transition-opacity">
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="ghost" className="h-8 w-8 opacity-60 group-hover:opacity-100 transition-opacity">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <CardTitle className="text-xl font-orbitron group-hover:text-accent transition-colors">
                  {project.title}
                </CardTitle>
                
                <CardDescription className="text-sm leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Features */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-muted-foreground">Key Features</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-muted-foreground">Tech Stack</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Add More Projects Card */}
          <Card className="card-3d group cursor-pointer border-dashed border-2 border-muted-foreground/30 hover:border-accent transition-colors fade-in-delay">
            <CardContent className="flex flex-col items-center justify-center h-full min-h-[400px] space-y-4">
              <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                <Plus className="h-8 w-8 text-muted-foreground group-hover:text-accent transition-colors" />
              </div>
              <div className="text-center space-y-2">
                <h3 className="font-semibold text-lg">Add More Projects</h3>
                <p className="text-sm text-muted-foreground">
                  Connect GitHub to automatically showcase your latest projects
                </p>
              </div>
              <Button variant="outline" className="btn-outline-hero">
                Connect GitHub
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;