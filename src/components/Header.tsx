import { motion } from "motion/react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-bg-main/80 backdrop-blur-md border-b border-border z-50">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="rounded-full overflow-hidden w-10 h-10 flex items-center justify-center bg-bg-card border border-border">
          <img src="a803117d-33a8-45b8-a9e9-1ac45e39cfa0.png" alt="Logo" className="w-full h-full object-cover" />
        </a>
        <div className="hidden md:flex gap-8 text-text-secondary font-medium text-sm tracking-wide">
          <a href="/" className="hover:text-text-primary transition-colors">Home</a>
          <a href="#about" className="hover:text-text-primary transition-colors">About</a>
          <a href="#projects" className="hover:text-text-primary transition-colors">Projects</a>
          <a href="#skills" className="hover:text-text-primary transition-colors">Skills</a>
          <a href="#contact" className="hover:text-text-primary transition-colors">Contact</a>
        </div>
        <a href="#resume" className="px-5 py-2 text-sm border border-border rounded-full hover:bg-border transition-colors">Download CV</a>
      </nav>
    </header>
  );
}
