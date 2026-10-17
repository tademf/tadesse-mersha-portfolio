export default function TechStrip() {
  const techs = ["React", "Next.js", "TypeScript", "Django", "Laravel", "Python", "PHP"];
  return (
    <section className="py-10 border-b border-border bg-bg-main">
      <div className="container mx-auto px-6 text-center text-text-secondary">
        <div className="flex flex-wrap justify-center gap-8 text-lg font-medium">
          {techs.map((tech) => <span key={tech}>{tech}</span>)}
        </div>
      </div>
    </section>
  );
}
