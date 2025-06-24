import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import { useEffect, useState } from 'react';

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('projects');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const projects = [
    {
      title: "Football Analysis",
      description: "A end to end football analytics system using AI & computer vision tools to detect, track, and analyze players, referees, goalkeepers, and the ball in match videos.",
      image: "https://ik.imagekit.io/ayxshsai/ayush/Screenshot%202025-06-24%20at%2011.28.50%E2%80%AFPM.png?updatedAt=1750787941811",
      technologies: ["Python", "OpenCV", "TorchReID", "Scikit-Learn"],
      githubUrl: "https://github.com/Ayxsh03/Football_Analysis",
      liveUrl: "#"
    },
    {
      title: "Personal AI Assistant",
      description: "A python-based AI assistant that integrates with various APIs to provide personalized responses and automate tasks.",
      image: "https://shorturl.at/EuJK0",
      technologies: ["Python", "OpenAI API", "Flask", "SQLite"],
      githubUrl: "https://github.com/Ayxsh03/Personal-AI-Assistant",
      liveUrl: "#"
    },
    {
      title: "DigiCam Classifier",
      description: "A CNN-based image classification web application that allows users to upload images and classify them into different categories using a trained model.",
      image: "https://shorturl.at/EuJK0",
      technologies: ["Python", "Flask", "TensorFlow", "Keras"],
      githubUrl: "https://github.com/Ayxsh03/DigiCam-Classifier",
      liveUrl: "#"
    },
    {
      title: "House Price Prediction",
      description: "A end to end web application that predicts house prices based on various features using machine learning algorithms.",
      image: "https://shorturl.at/EuJK0",
      technologies: ["Python", "Flask", "Scikit-learn", "Pandas"],
      githubUrl: "#",
      liveUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="section-container">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-bold mb-2">My Projects</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6 rounded animate-width-expand"></div>
          <p className="text-lg text-muted-foreground">
            Here are some of the projects I've worked on. Each one presented unique challenges
            and opportunities to learn and grow my skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`overflow-hidden card-hover border border-muted h-full flex flex-col transform transition-all duration-700 delay-${index * 150} hover:shadow-lg hover:-translate-y-2 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription className="line-clamp-2">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex} 
                      variant="secondary"
                      className="transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-4">
                <Button variant="outline" size="sm" asChild className="transition-all duration-300 hover:border-primary/50">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" /> GitHub
                  </a>
                </Button>
                <Button size="sm" asChild className="transition-all duration-300 hover:bg-primary/90">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" /> Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            asChild 
            variant="outline" 
            className="rounded-full transition-all duration-300 hover:scale-105 hover:shadow-md"
          >
            <a href="https://github.com/Ayxsh03" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-2" />
              View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
