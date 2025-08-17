import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This will be connected to Supabase when the backend is set up
    console.log("Form submitted:", formData);
    // Show success message or handle submission
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "akshat.raj@email.com",
      link: "mailto:akshat.raj@email.com"
    },
    {
      icon: MapPin,
      label: "Location", 
      value: "India",
      link: null
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "/in/akshat-raj",
      link: "https://linkedin.com/in/akshat-raj"
    }
  ];

  return (
    <section id="contact" className="section-container section-padding bg-secondary/30">
      <div className="space-y-12">
        {/* Header */}
        <div className="text-center space-y-4 fade-in">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold">
            Let's <span className="text-accent">Connect</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full mx-auto"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on your next data-driven project? Let's discuss how we can turn your business challenges into opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="card-3d fade-in">
            <CardHeader>
              <CardTitle className="text-2xl font-orbitron">Send a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    required
                    className="transition-all duration-200 focus:ring-2 focus:ring-accent/20"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                    className="transition-all duration-200 focus:ring-2 focus:ring-accent/20"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or how we can collaborate..."
                    rows={5}
                    required
                    className="transition-all duration-200 focus:ring-2 focus:ring-accent/20"
                  />
                </div>

                <Button type="submit" className="btn-hero w-full">
                  <Mail className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Social */}
          <div className="space-y-8 fade-in-delay">
            {/* Contact Information */}
            <Card className="card-3d">
              <CardHeader>
                <CardTitle className="text-2xl font-orbitron">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4 group">
                    <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                      <info.icon className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="font-medium hover:text-accent transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="card-3d">
              <CardHeader>
                <CardTitle className="text-2xl font-orbitron">Follow Me</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <Button variant="outline" size="icon" className="hover-lift group">
                    <Github className="h-5 w-5 group-hover:text-accent transition-colors" />
                  </Button>
                  <Button variant="outline" size="icon" className="hover-lift group">
                    <Linkedin className="h-5 w-5 group-hover:text-accent transition-colors" />
                  </Button>
                  <Button variant="outline" size="icon" className="hover-lift group">
                    <Mail className="h-5 w-5 group-hover:text-accent transition-colors" />
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                  Connect with me on LinkedIn for professional updates, or check out my latest projects on GitHub. 
                  I'm always open to discussing new opportunities and collaborations.
                </p>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <Card className="card-3d bg-gradient-to-br from-primary/5 to-accent/5 border-accent/20">
              <CardContent className="p-6 text-center space-y-4">
                <h3 className="text-xl font-orbitron font-semibold">Ready to Start?</h3>
                <p className="text-sm text-muted-foreground">
                  Let's discuss how data analytics and AI can drive your business forward.
                </p>
                <Button className="btn-hero">
                  Schedule a Call
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;