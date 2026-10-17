import { motion } from "motion/react";
import campusImg from '../assets/images/smart_campus_dashboard_1792223350050.jpg';
import ecommerceImg from '../assets/images/ecommerce_marketplace_1792223350170.jpg';
import musicImg from '../assets/images/music_player_ui_1792223349772.jpg';
import portfolioImg from '../assets/images/dev_portfolio_preview_1792223350282.jpg';

const projects = [
  { title: "Unified Smart Campus", desc: "A campus management platform for academic and administrative workflows.", tech: ["Django", "Python"], image: campusImg },
  { title: "Multivendor E-commerce", desc: "A marketplace project featuring product management, vendor workflows.", tech: ["Laravel", "PHP", "MySQL"], image: ecommerceImg },
  { title: "React Music Player", desc: "A music player interface focused on intuitive playback controls.", tech: ["React", "TypeScript"], image: musicImg },
  { title: "Developer Portfolio", desc: "A personal portfolio showcasing technical skills and projects.", tech: ["React", "Next.js", "TypeScript"], image: portfolioImg },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-bg-main">
      <div className="container mx-auto px-6">
        <span className="text-accent-violet text-[10px] tracking-[0.25em] uppercase">01 / Selected Work</span>
        <h2 className="text-4xl md:text-6xl font-bold mt-6 mb-20 tracking-tighter">Thoughtful engineering. <span className="text-text-secondary">Tangible outcomes.</span></h2>
        
        <div className="grid md:grid-cols-12 gap-6">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, rotateY: index % 2 === 0 ? 5 : -5, rotateX: 2 }}
              className={`group bg-bg-card rounded-xl border border-border hover:border-accent-violet/30 transition-all overflow-hidden ${index % 2 === 0 ? 'md:col-span-7' : 'md:col-span-5'}`}
            >
              <img src={project.image} alt={project.title} className="w-full h-64 object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="p-10">
                <div className="text-accent-blue/20 text-5xl font-bold mb-8">0{index + 1}</div>
                <h3 className="text-3xl font-semibold mb-4 group-hover:text-accent-cyan transition-colors">{project.title}</h3>
                <p className="text-text-secondary mb-10 leading-relaxed font-light">{project.desc}</p>
                <div className="flex gap-3">
                  {project.tech.map(t => <span key={t} className="px-4 py-1.5 bg-bg-main/50 rounded-full text-xs text-text-secondary border border-border/50">{t}</span>)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
