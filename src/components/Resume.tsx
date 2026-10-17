export default function Resume() {
  return (
    <section id="resume" className="py-24 bg-bg-main text-center">
      <div className="container mx-auto px-6 max-w-xl p-12 bg-bg-card rounded-2xl border border-border">
        <h2 className="text-3xl font-bold mb-6">Want to know more about my journey?</h2>
        <a href="/cv/tadesse-mersha-cv.pdf" className="px-8 py-4 bg-accent-violet text-white rounded-full font-semibold hover:opacity-90 transition-opacity">Download CV</a>
        <p className="mt-4 text-text-secondary text-sm">Place your real CV file at /public/cv/tadesse-mersha-cv.pdf</p>
      </div>
    </section>
  );
}
