import { motion, useMotionTemplate, useMotionValue, useSpring } from "motion/react";
import { useRef } from "react";

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useMotionTemplate`${mouseY}deg`, { damping: 20, stiffness: 100 });
  const rotateY = useSpring(useMotionTemplate`${mouseX}deg`, { damping: 20, stiffness: 100 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 20;
    const y = (e.clientY - top - height / 2) / 20;
    mouseX.set(x);
    mouseY.set(-y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section className="min-h-screen flex items-center pt-32 pb-24 overflow-hidden" ref={containerRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7"
        >
          <span className="text-accent-violet font-semibold tracking-[0.25em] text-[10px] uppercase">Software Engineer · Full-Stack Developer</span>
          <h1 className="text-6xl md:text-[5rem] font-bold mt-8 leading-[0.9] tracking-tighter">
            Engineering ideas into <span className="bg-linear-to-r from-accent-violet via-accent-blue to-accent-cyan bg-clip-text text-transparent">exceptional</span> digital experiences.
          </h1>
          <p className="mt-10 text-xl text-text-secondary max-w-xl leading-relaxed font-light">
            I design and build thoughtful digital products, combining elegant interfaces with reliable engineering.
          </p>
          <div className="mt-12 flex flex-wrap gap-6">
            <motion.a href="#projects" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="group px-8 py-4 bg-text-primary text-bg-main rounded-full font-semibold hover:bg-text-secondary transition-all flex items-center gap-2">
              Explore Work 
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </motion.a>
            <motion.a href="#contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-8 py-4 border border-border rounded-full font-semibold hover:border-text-primary transition-colors">Let's Connect</motion.a>
          </div>
        </motion.div>
        
        <motion.div
          style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
          className="lg:col-span-5 relative aspect-square rounded-full bg-bg-card overflow-hidden group"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.15),transparent_70%)]"></div>
          {/* Profile Photo */}
          <img 
            src="/src/assets/images/profile_photo.jpg" 
            alt="Tadesse Mersha" 
            className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500" 
          />
        </motion.div>
      </div>
    </section>
  );
}
