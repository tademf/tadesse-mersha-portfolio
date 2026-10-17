import { motion } from "motion/react";

const skills = {
  "Frontend": ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  "Backend": ["Python", "Django", "PHP", "Laravel", "REST APIs"],
  "Databases": ["MySQL", "PostgreSQL"],
  "Tools": ["Git", "GitHub", "VS Code", "Postman"]
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-bg-section">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-16">Technical Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <motion.div 
              key={category} 
              whileHover={{ y: -5 }}
              className="p-8 bg-bg-card rounded-2xl border border-border transition-all hover:border-accent-violet/30"
            >
              <h3 className="text-xl font-semibold mb-6 text-accent-violet">{category}</h3>
              <ul className="space-y-3 text-text-secondary">
                {items.map(item => <li key={item}>{item}</li>)}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
