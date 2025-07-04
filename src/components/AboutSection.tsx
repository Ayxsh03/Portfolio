
import { CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useEffect, useState } from 'react';

const AboutSection = () => {
  const highlights = [
    "AI Enthusiast",
    "Problem Solver",
    "Machine Learning Engineer",
    "Learning By Doing"
  ];

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('about');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-secondary/50 dark:bg-secondary/10 overflow-hidden">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Profile Image Column */}
          <div className={`w-full lg:w-5/12 flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-blue-400 blur-xl opacity-20 animate-slow-pulse"></div>
              <div className="absolute w-full h-full rounded-full border-2 border-primary/20"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden hover:scale-105 transition-transform duration-500">
                <img
                  src="https://ik.imagekit.io/ayxshsai/ayush/ayush.jpg?updatedAt=1750506175948"
                  alt="Developer profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* About Info Column */}
          <div className={`w-full lg:w-7/12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <h2 className="text-3xl font-bold mb-2">About Me</h2>
            <div className="h-1 w-20 bg-primary mb-6 rounded animate-width-expand"></div>
            
            <p className="text-lg mb-6 text-muted-foreground">
              I’m currently pursuing my B.Tech in Computer Science, and over time, what started as a fascination with how things work has evolved into a passion for building things that actually do. From experimenting with AI models to solving DSA, I enjoy working at the intersection of creativity and logic.

            </p>
            
            <p className="text-lg mb-8 text-muted-foreground">
              Outside of tech, I’m someone who enjoys quiet focus and steady growth. I spend time reading, hitting the gym, and learning constantly.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {highlights.map((item, index) => (
                <div key={index} className={`flex items-center gap-2 transition-all duration-500 delay-${100 * index} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            
            <Card className="bg-white dark:bg-background shadow-sm border border-primary/10 hover:shadow-md transition-all duration-300 hover:border-primary/20">
              <CardContent className="p-4 sm:p-6">
                <blockquote className="italic text-muted-foreground">
                  "Progress isn’t loud — it’s built line by line, thought by thought."
                </blockquote>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
