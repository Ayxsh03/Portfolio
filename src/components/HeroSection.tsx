import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const roles = ["Machine Learning Engineer", "AI Enthusiast", "Problem Solver"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedName, setDisplayedName] = useState("");
  const fullName = "Ayush Sai";
  const [typewriterComplete, setTypewriterComplete] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const roleInterval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 5000);

    let currentIndex = 0;
    const typewriterInterval = setInterval(() => {
      if (currentIndex < fullName.length) {
        setDisplayedName(fullName.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typewriterInterval);
        setTypewriterComplete(true);
      }
    }, 150);

    return () => {
      clearInterval(roleInterval);
      clearInterval(typewriterInterval);
    };
  }, []);

  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-portfolio-pastel-blue/20 dark:bg-transparent -z-10" />
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/20 dark:to-blue-800/10 rounded-full blur-3xl opacity-70 animate-slow-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-blue-100 to-blue-50 dark:from-blue-900/20 dark:to-blue-800/5 rounded-full blur-3xl opacity-70 animate-slow-pulse-delayed" />
      </div>

      <div className="section-container flex flex-col md:flex-row items-center justify-between w-full px-4 sm:px-8 max-w-7xl gap-12">
        <div className="flex-1 space-y-8 text-center md:text-left">
          <div className={`space-y-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium inline-block animate-fade-in-delayed">
              B.Tech CSE Student
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
              Hi, I'm{" "}
              <span className="gradient-text relative">
                <span>{displayedName}</span>
                {typewriterComplete && (
                  <motion.span
                    className="absolute -right-1 top-0 w-0.5 h-full bg-primary"
                    animate={{ opacity: [1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                  />
                )}
              </span>
            </h1>

            <div className="h-12">
              <p className="text-xl text-muted-foreground overflow-hidden">
                <span key={currentRoleIndex} className="block animate-text-reveal">
                  {roles[currentRoleIndex]}
                </span>
              </p>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto md:mx-0 animate-fade-in-delayed-2">
              I am a Learner. I build modern AI applications with Python.
              Passionate about creating elegant solutions to real world problems.
            </p>
          </div>

          <div className={`flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-start transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Button asChild size="lg" className="rounded-full hover:scale-105 hover:shadow-md transition-all duration-300">
              <a href="#projects">
                View Projects <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </Button>

            <Button asChild variant="outline" size="lg" className="rounded-full hover:bg-primary/5 transition-all duration-300">
              <a href="#contact">Let's Connect</a>
            </Button>
          </div>
        </div>

        <div className="flex-1 w-full h-[450px] sm:h-[500px] overflow-hidden relative spline-wrapper scale-[1.6]">
          <Spline className="spline-scene" scene="https://prod.spline.design/H7FfNKL1DHpfXSem/scene.splinecode" />
          <div className="absolute bottom-0 right-0 w-40 h-20 bg-white dark:bg-background z-10" />
        </div>
      </div>

      <div className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-subtle transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <a href="#about" aria-label="Scroll down" className="hover:text-primary transition-colors duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
            strokeLinejoin="round" className="lucide lucide-mouse">
            <rect x="6" y="3" width="12" height="18" rx="6"></rect>
            <path d="M12 7v4"></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
