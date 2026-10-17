export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-bg-section border-t border-border">
      <div className="container mx-auto px-6 max-w-xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 tracking-tighter">
          Let's build something <span className="text-accent-violet">meaningful</span>.
        </h2>
        <form className="grid gap-6 p-8 bg-bg-card rounded-xl border border-border">
          <div className="space-y-2">
            <label htmlFor="name" className="text-xs text-text-secondary uppercase tracking-widest">Name</label>
            <input id="name" type="text" placeholder="Your Name" className="w-full p-4 bg-bg-main border border-border rounded-lg focus:border-accent-violet outline-none transition-colors" required />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-xs text-text-secondary uppercase tracking-widest">Email</label>
            <input id="email" type="email" placeholder="Your Email" className="w-full p-4 bg-bg-main border border-border rounded-lg focus:border-accent-violet outline-none transition-colors" required />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-xs text-text-secondary uppercase tracking-widest">Message</label>
            <textarea id="message" placeholder="Your Message" className="w-full p-4 bg-bg-main border border-border rounded-lg h-32 focus:border-accent-violet outline-none transition-colors" required></textarea>
          </div>
          <button type="submit" className="px-8 py-4 bg-accent-violet text-white rounded-lg font-semibold hover:opacity-90 transition-opacity mt-2">
            Send Message
          </button>
        </form>

        <div className="mt-12 flex justify-center items-center gap-8">
          {/* GitHub Logo */}
          <a
            href="https://github.com/tademf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-3 rounded-full border border-border bg-bg-card text-text-secondary hover:text-white hover:border-accent-violet hover:scale-110 transition-all duration-300"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
          </a>

          {/* LinkedIn Logo */}
          <a
            href="https://www.linkedin.com/in/tadesse-undefined-9a7582444/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-3 rounded-full border border-border bg-bg-card text-text-secondary hover:text-white hover:border-[#0A66C2] hover:scale-110 transition-all duration-300"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.53 1.53 0 1 0 0-3.06 1.53 1.53 0 0 0 0 3.06m1.39 9.74v-8.37H5.07v8.37h2.78z" />
            </svg>
          </a>

          {/* Telegram Logo */}
          <a
            href="https://t.me/Ttdmf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
            className="p-3 rounded-full border border-border bg-bg-card text-text-secondary hover:text-white hover:border-[#229ED9] hover:scale-110 transition-all duration-300"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
            </svg>
          </a>

          {/* Gmail Logo */}
          <a
            href="mailto:tadessemersha2025@gmail.com"
            aria-label="Gmail"
            className="p-3 rounded-full border border-border bg-bg-card text-text-secondary hover:text-white hover:border-[#EA4335] hover:scale-110 transition-all duration-300"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
