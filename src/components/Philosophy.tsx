export default function Philosophy() {
  const points = [
    { num: "01", title: "Thoughtful Architecture", desc: "Build maintainable, modular applications with clear separation of concerns." },
    { num: "02", title: "Seamless Experiences", desc: "Create responsive interfaces that are intuitive, accessible, and enjoyable to use." },
    { num: "03", title: "Reliable Systems", desc: "Develop practical backend services, APIs, and database-driven applications." }
  ];
  return (
    <section className="py-24 bg-bg-main border-y border-border">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">Beyond writing code.</h2>
        <p className="text-xl text-text-secondary mb-16 max-w-2xl">Great software is built where thoughtful engineering meets intuitive design.</p>
        <div className="grid md:grid-cols-3 gap-8">
          {points.map(p => (
            <div key={p.num} className="p-8 border-l border-border hover:border-accent-violet transition-colors">
              <span className="text-accent-violet font-mono text-sm">{p.num}</span>
              <h3 className="text-xl font-semibold mt-2 mb-4">{p.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
