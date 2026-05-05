import Link from "next/link";

export default function GalleryPage() {
  const imagesBySection = {
    Sports: [
      { alt: "Running Race", src: "/images/sports_race.jpg" },
      { alt: "Sports Team Group", src: "/images/sports_team.jpg" },
      { alt: "School Sports Gathering", src: "/images/sports_gathering.jpg" }
    ],
    "Classroom Learning": [
      { alt: "Digital Learning Session", src: "/images/classroom1.jpg" },
      { alt: "Interactive Teaching", src: "/images/classroom2.jpg" }
    ],
    "Independence Day": [
      { alt: "Independence Day Celebration", src: "/images/independence1.jpg" },
      { alt: "Students Parade", src: "/images/independence2.jpg" },
      { alt: "Flag Hoisting Ceremony", src: "/images/independence3.jpg" },
      { alt: "National Anthem Assembly", src: "/images/independence4.jpg" }
    ],
    "School Trip and Visit": [
      { alt: "Beach Field Trip", src: "/images/trip1.jpg" },
      { alt: "Factory Visit Gate", src: "/images/trip2.jpg" },
      { alt: "Workshop Activity", src: "/images/trip3.jpg" },
      { alt: "New Year Carnival", src: "/images/trip4.jpg" }
    ]
  };

  return (
    <div className="min-h-screen bg-surface">
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-outline-variant/10">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-6 h-20">
          <div className="text-xl font-extrabold text-primary tracking-tighter">Z P Urdu School Asgani</div>
          <div className="hidden md:flex items-center space-x-8">
            <Link className="text-slate-600 font-semibold tracking-tight hover:text-primary transition-colors" href="/">Home</Link>
            <Link className="text-primary font-bold tracking-tight border-b-2 border-primary pb-1" href="/gallery">Gallery</Link>
            <Link className="text-slate-600 font-semibold tracking-tight hover:text-primary transition-colors" href="/#about">About</Link>
            <Link className="text-slate-600 font-semibold tracking-tight hover:text-primary transition-colors" href="/#academics">Academics</Link>
            <Link className="text-slate-600 font-semibold tracking-tight hover:text-primary transition-colors" href="/#management">Management</Link>
            <Link className="text-slate-600 font-semibold tracking-tight hover:text-primary transition-colors" href="/#admission">Admission</Link>
            <Link className="text-slate-600 font-semibold tracking-tight hover:text-primary transition-colors" href="/#contact">Contact</Link>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
        <header className="mb-24 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/5 text-primary rounded-full text-sm font-bold tracking-wide mb-6 uppercase">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            Visual Archives
          </div>
          <h1 className="text-5xl md:text-8xl font-extrabold text-on-background tracking-tighter mb-8 leading-[1]">Explore Our Learning</h1>
          <p className="text-on-surface-variant text-xl md:text-2xl max-w-3xl leading-relaxed opacity-80">A curated collection of moments that define our student journey, from classroom innovation to the spirit of competition.</p>
        </header>

        {Object.entries(imagesBySection).map(([section, images], i) => (
          <section key={section} className="mb-24">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 border-b border-outline-variant/30 pb-10">
              <div className="flex items-start gap-6">
                <span className={`w-1.5 h-16 rounded-full ${i % 3 === 0 ? 'bg-secondary' : i % 3 === 1 ? 'bg-primary' : 'bg-tertiary'}`}></span>
                <div>
                  <h2 className="text-4xl font-extrabold text-on-background tracking-tight">{section}</h2>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {images.length > 0 ? (
                images.map((img, idx) => (
                  <div key={idx} className="group relative aspect-square overflow-hidden rounded-2xl bg-white border border-outline-variant/30 shadow-sm transition-all duration-500 hover:shadow-xl hover:border-primary/40">
                    <img alt={img.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={img.src} referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6 backdrop-blur-[2px]">
                      <span className="text-white font-bold text-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{img.alt}</span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full py-20 bg-surface-container-low rounded-3xl border-2 border-dashed border-outline-variant/30 flex flex-col items-center justify-center text-center">
                   <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm">
                      <span className="material-symbols-outlined text-4xl text-primary opacity-40">photo_library</span>
                    </div>
                  <p className="text-on-surface-variant font-bold text-lg">Real photos for this section are coming soon!</p>
                  <p className="text-sm text-on-surface-variant/60">We are currently replacing AI images with authentic school photos.</p>
                </div>
              )}
            </div>
          </section>
        ))}
      </main>

      <footer className="bg-slate-950 text-white w-full py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-16 mb-20">
            <div className="max-w-md">
              <div className="text-3xl font-extrabold mb-6 tracking-tighter">Z P Urdu School Asgani</div>
              <p className="text-slate-400 text-lg leading-relaxed">Empowering students through education and shared experiences in Asgani. Join us in shaping the leaders of tomorrow.</p>
            </div>
            <div className="flex flex-wrap gap-x-20 gap-y-10">
              <div className="flex flex-col gap-5">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Navigation</span>
                <Link className="text-slate-300 hover:text-white transition-all" href="/">Home</Link>
                <Link className="text-white font-bold" href="/gallery">Gallery</Link>
                <Link className="text-slate-300 hover:text-white transition-all" href="/#about">About Us</Link>
              </div>
              <div className="flex flex-col gap-5">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Contact</span>
                <Link className="text-slate-300 hover:text-white transition-all" href="/#contact">Contact Us</Link>
              </div>
            </div>
          </div>
          <div className="pt-12 border-t border-white/10 text-slate-500 text-sm font-medium">
            © Z P Urdu School Asgani. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
