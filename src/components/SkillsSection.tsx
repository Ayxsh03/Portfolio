import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Code, Database, Globe, Palette, Server, Settings } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const SkillsSection = () => {
  const skillCategories = [
    {
      name: "Machine Learning",
      icon: <Code className="h-6 w-6 text-primary" />,
      skills: [
        { name: "Supervised Learning", level: 95 },
        { name: "Model Evaluation", level: 90 },
        { name: "Dimensionality Reduction ", level: 90 },
        { name: "Unsupervised Learning", level: 80 },
      ]
    },
    {
      name: "Deep Learning",
      icon: <Database className="h-6 w-6 text-primary" />,
      skills: [
        { name: "Neural Networks", level: 90 },
        { name: "Comuter Vision", level: 85 },
        { name: "Transfer Learning", level: 70 },
        { name: "TF Keras", level: 80},
      ]
    },
    {
      name: "NLP & Transformers",
      icon: <Settings className="h-6 w-6 text-primary" />,
      skills: [
        { name: "Scikit-learn", level: 90 },
        { name: "Text Classification", level: 95 },
        { name: "Transformers", level: 70 },
        { name: "Hugging Face", level: 70 },
      ]
    },
    {
      name: "Languages",
      icon: <Globe className="h-6 w-6 text-primary" />,
      skills: [
        { name: "Java", level: 95 },
        { name: "Python", level: 90 },
        { name: "MySQL", level: 95 },
        { name: "C++", level: 70 },
      ]
    },
    {
      name: "Exploratory Data Analysis",
      icon: <Palette className="h-6 w-6 text-primary" />,
      skills: [
        { name: "Matplotlib", level: 90 },
        { name: "Seaborn", level: 80 },
        { name: "Numpy", level: 95 },
        { name: "Pandas", level: 85 },
      ]
    },
    {
      name: "Web Development",
      icon: <Server className="h-6 w-6 text-primary" />,
      skills: [
        { name: "HTML CSS JS", level: 85 },
        { name: "Flask", level: 70 },
        { name: "RESTful APIs", level: 80 },
        { name: "MySQL", level: 95 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/50 dark:bg-secondary/10">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-2">My Skills</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6 rounded"></div>
          <p className="text-lg text-muted-foreground">
            I've developed a diverse set of skills throughout my journey as a student.
            Here's a breakdown of my technical expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              category={category}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ category, delay }) => {
  const { ref, inView: isInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}s` }}
      className={`transition-all duration-500 ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <Card className="border border-muted shadow-sm">
        <CardContent className="pt-6">
          <div className="flex items-center gap-3 mb-6">
            {category.icon}
            <h3 className="text-xl font-semibold">{category.name}</h3>
          </div>

          <div className="space-y-5">
            {category.skills.map((skill, skillIndex) => (
              <AnimatedSkill
                key={skillIndex}
                skill={skill}
                isInView={isInView}
                delay={skillIndex * 0.1}
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const AnimatedSkill = ({ skill, isInView, delay }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let timeout, interval;

    if (isInView) {
      timeout = setTimeout(() => {
        const duration = 1000;
        const increment = skill.level / (duration / 15);
        let currentProgress = 0;

        interval = setInterval(() => {
          currentProgress += increment;
          if (currentProgress >= skill.level) {
            setProgress(skill.level);
            clearInterval(interval);
          } else {
            setProgress(currentProgress);
          }
        }, 15);
      }, delay * 1000);
    }

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [isInView, skill.level, delay]);

  return (
    <div
      className="transition-opacity duration-500"
      style={{
        opacity: isInView ? 1 : 0,
        transitionDelay: `${delay + 0.3}s`
      }}
    >
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{skill.name}</span>
        <span className="text-xs text-muted-foreground">{Math.round(progress)}%</span>
      </div>
      <Progress
        value={progress}
        className="h-2 overflow-hidden transition-all duration-300 relative"
      />
    </div>
  );
};

export default SkillsSection;
