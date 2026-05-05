import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-xl shadow-sm border-b border-surface-variant/20">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-6 h-20">
          <div className="text-xl font-extrabold text-primary tracking-tight">
            Z P Urdu School Asgani
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a className="text-primary font-bold tracking-tight transition-colors border-b-2 border-primary py-1" href="#home">Home</a>
            <Link className="text-on-surface-variant font-semibold tracking-tight hover:text-primary transition-colors py-1" href="/gallery">Gallery</Link>
            <a className="text-on-surface-variant font-semibold tracking-tight hover:text-primary transition-colors py-1" href="#about">About</a>
            <a className="text-on-surface-variant font-semibold tracking-tight hover:text-primary transition-colors py-1" href="#academics">Academics</a>
            <a className="text-on-surface-variant font-semibold tracking-tight hover:text-primary transition-colors py-1" href="#management">Management</a>
            <a className="text-on-surface-variant font-semibold tracking-tight hover:text-primary transition-colors py-1" href="#admission">Admission</a>
            <a className="text-on-surface-variant font-semibold tracking-tight hover:text-primary transition-colors py-1" href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-[90vh] min-h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img alt="Z P Urdu School Asgani Building" className="w-full h-full object-cover scale-105" src="/images/school_building.jpg" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80 z-1"></div>
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
          <span className="inline-block px-4 py-1.5 mb-8 bg-white/10 text-white font-bold text-xs tracking-widest rounded-full uppercase backdrop-blur-md border border-white/20">Established Excellence</span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-8 tracking-tighter text-white leading-tight">
            Z P Urdu School Asgani
          </h1>
          <p className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto text-white/80 font-medium mb-12">
            Providing a nurturing environment where tradition meets modern academic excellence for every student.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#about" className="bg-primary hover:bg-primary-container text-white px-8 py-4 rounded-lg font-bold shadow-2xl transition-all hover:translate-y-[-2px] inline-block">Discover Our Vision</a>
            <a className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/30 px-8 py-4 rounded-lg font-bold shadow-lg transition-all hover:translate-y-[-2px] inline-block" href="#contact">Contact Us</a>
          </div>
        </div>
      </section>

      {/* What School Offers Section */}
      <section className="py-24 px-6 bg-white border-b border-surface-variant/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-extrabold text-on-surface mb-6 leading-tight">Empowering Students for a Brighter Future</h2>
            <div className="h-1.5 w-20 bg-primary mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-surface-container-lowest p-10 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-outline-variant/50 hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <span className="material-symbols-outlined text-primary group-hover:text-white text-3xl">school</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Regular Classes</h3>
              <p className="text-on-surface-variant leading-relaxed">Consistent daily learning schedules focused on core curriculum and character development through interactive sessions.</p>
            </div>
            <div className="bg-surface-container-lowest p-10 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-outline-variant/50 hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                <span className="material-symbols-outlined text-secondary group-hover:text-white text-3xl">verified_user</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Qualified Teachers</h3>
              <p className="text-on-surface-variant leading-relaxed">Qualified educators with decades of combined experience in foundational education and child psychology.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Academics Section */}
      <section className="relative py-24 px-6 overflow-hidden" id="academics">
        <div className="absolute inset-0 z-0 bg-slate-950">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-slate-900 to-black z-0"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-white tracking-tight">Academic Excellence</h2>
            <div className="h-1.5 w-20 bg-primary mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all group flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-white">Primary Section</h3>
                  <span className="text-4xl font-black text-white/10 group-hover:text-primary transition-colors">01</span>
                </div>
                <p className="mb-10 text-lg text-white/70 leading-relaxed font-medium">Grades 1st to 4th focused on establishing strong literacy, numeracy, and social foundations in an Urdu medium environment.</p>
              </div>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-white font-medium">
                  <span className="material-symbols-outlined text-primary text-xl">check_circle</span>URDU, ENGLISH, MARATHI, MATHS
                </li>
                <li className="flex items-center gap-3 text-white font-medium">
                  <span className="material-symbols-outlined text-primary text-xl">check_circle</span>ENVIRONMENTAL, DRAWING.
                </li>
              </ul>
            </div>
            <div className="p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all group flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-white">Upper Primary Section</h3>
                  <span className="text-4xl font-black text-white/10 group-hover:text-tertiary-fixed-dim transition-colors">02</span>
                </div>
                <p className="mb-10 text-lg text-white/70 leading-relaxed font-medium">Grades 5th to 8th where students transition to more complex concepts and subject learning.</p>
              </div>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-white font-medium">
                  <span className="material-symbols-outlined text-tertiary-fixed-dim text-xl">check_circle</span>URDU, ENGLISH, HINDI, MARATHI.
                </li>
                <li className="flex items-center gap-3 text-white font-medium">
                  <span className="material-symbols-outlined text-tertiary-fixed-dim text-xl">check_circle</span>MATHS, SCIENCE, SOCIAL SCIENCE.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Management Section */}
      <section className="py-24 px-6 bg-surface-container-low" id="management">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-extrabold text-on-surface mb-6">Our Leadership</h2>
            <p className="text-on-surface-variant font-medium">Guided by experienced educators committed to student growth.</p>
            <div className="h-1.5 w-20 bg-primary mx-auto rounded-full mt-6"></div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Principal Card */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-outline-variant/30 hover:shadow-2xl transition-all duration-500 group">
              <div className="aspect-square overflow-hidden bg-surface-container-high">
                <img alt="Principal Noor Mohammad" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="/images/principal.jpg" referrerPolicy="no-referrer" />
              </div>
              <div className="p-6">
                <p className="text-primary font-bold text-[10px] uppercase tracking-widest mb-1">Principal</p>
                <h3 className="text-lg font-extrabold text-on-surface leading-tight mb-2">Noor Mohammad Abdul Sattar Chougle</h3>
                <div className="flex gap-2 mb-4">
                  <span className="bg-surface-container px-2 py-1 rounded text-[10px] font-bold text-on-surface-variant">BA, B.ED</span>
                </div>
                <p className="text-on-surface-variant text-sm leading-relaxed">31 years of academic excellence and visionary leadership.</p>
              </div>
            </div>
            {/* Teacher Card 2 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-outline-variant/30 hover:shadow-2xl transition-all duration-500 group">
              <div className="aspect-square overflow-hidden bg-surface-container-high">
                <img alt="Senior Teacher Rafiqua" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="/images/rafiqua.jpg" referrerPolicy="no-referrer" />
              </div>
              <div className="p-6">
                <p className="text-secondary font-bold text-[10px] uppercase tracking-widest mb-1">Senior Teacher</p>
                <h3 className="text-lg font-extrabold text-on-surface leading-tight mb-2">Rafiqua Noor Mohammad Chougle</h3>
                <div className="flex gap-2 mb-4">
                  <span className="bg-surface-container px-2 py-1 rounded text-[10px] font-bold text-on-surface-variant">BA, B.ED</span>
                </div>
                <p className="text-on-surface-variant text-sm leading-relaxed">29 years exp. Specialized in foundational pedagogy.</p>
              </div>
            </div>
            {/* Teacher Card 3 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-outline-variant/30 hover:shadow-2xl transition-all duration-500 group">
              <div className="aspect-square overflow-hidden bg-surface-container-high">
                <img alt="Educator Shagufta" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="/images/shagufta.jpg" referrerPolicy="no-referrer" />
              </div>
              <div className="p-6">
                <p className="text-tertiary font-bold text-[10px] uppercase tracking-widest mb-1">Educator</p>
                <h3 className="text-lg font-extrabold text-on-surface leading-tight mb-2">Shagufta Adam Shah</h3>
                <div className="flex gap-2 mb-4">
                  <span className="bg-surface-container px-2 py-1 rounded text-[10px] font-bold text-on-surface-variant">SSC, D.ED</span>
                </div>
                <p className="text-on-surface-variant text-sm leading-relaxed">31 years exp. Expert in primary education standards.</p>
              </div>
            </div>
            {/* Teacher Card 4 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-outline-variant/30 hover:shadow-2xl transition-all duration-500 group">
              <div className="aspect-square overflow-hidden bg-surface-container-high">
                <img alt="Educator Zareena" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="/images/zareena.jpg" referrerPolicy="no-referrer" />
              </div>
              <div className="p-6">
                <p className="text-primary-container font-bold text-[10px] uppercase tracking-widest mb-1">Educator</p>
                <h3 className="text-lg font-extrabold text-on-surface leading-tight mb-2">Zareena Bandri</h3>
                <div className="flex gap-2 mb-4">
                  <span className="bg-surface-container px-2 py-1 rounded text-[10px] font-bold text-on-surface-variant">SSC, D.ED</span>
                </div>
                <p className="text-on-surface-variant text-sm leading-relaxed">31 years exp. Dedicated to nurturing young minds with care.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-24 px-6 bg-primary text-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
              <span className="material-symbols-outlined text-4xl">visibility</span>
            </div>
            <h2 className="text-4xl font-extrabold tracking-tight">Our Vision</h2>
            <p className="text-xl leading-relaxed opacity-90 font-medium">
              To be a beacon of inclusive education, where every child from the community has access to quality learning, fostering a future generation that is both intellectually capable and ethically grounded.
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-lg rounded-[2rem] p-8 md:p-12 border border-white/10 shadow-2xl">
            <div className="flex items-center gap-6 mb-10">
              <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center">
                <span className="material-symbols-outlined text-3xl">track_changes</span>
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight">Our Mission</h2>
            </div>
            <ul className="space-y-8">
              <li className="flex gap-6">
                <span className="text-white/30 font-black text-2xl shrink-0">01.</span>
                <p className="opacity-90 font-medium leading-relaxed">Provide holistic development through academic and extracurricular integration in a safe environment.</p>
              </li>
              <li className="flex gap-6">
                <span className="text-white/30 font-black text-2xl shrink-0">02.</span>
                <p className="opacity-90 font-medium leading-relaxed">Maintain a completely free education model for social equity, ensuring no child is left behind.</p>
              </li>
              <li className="flex gap-6">
                <span className="text-white/30 font-black text-2xl shrink-0">03.</span>
                <p className="opacity-90 font-medium leading-relaxed">Create an innovative learning environment that prepares students for the challenges of tomorrow.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Admission Section */}
      <section className="py-24 px-6 bg-white" id="admission">
        <div className="max-w-7xl mx-auto">
          <div className="bg-surface-container-lowest rounded-[2.5rem] p-8 md:p-16 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-outline-variant/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 hidden lg:block">
              <span className="bg-secondary text-white px-6 py-2 rounded-full font-extrabold text-sm tracking-widest animate-pulse uppercase shadow-xl shadow-secondary/20">Free Education</span>
            </div>
            <div className="max-w-4xl">
              <h2 className="text-3xl md:text-5xl font-extrabold text-on-surface mb-12">Join Our Community</h2>
              <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
                <div className="space-y-12">
                  <div>
                    <h4 className="font-bold text-primary mb-4 flex items-center gap-3 text-sm uppercase tracking-widest">
                      <span className="material-symbols-outlined text-xl">event</span> Admission Period
                    </h4>
                    <p className="text-3xl text-on-surface font-extrabold">April - May</p>
                    <p className="text-on-surface-variant font-semibold mt-1 italic">(Every Academic Year)</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-4 flex items-center gap-3 text-sm uppercase tracking-widest">
                      <span className="material-symbols-outlined text-xl">payments</span> Fee Structure
                    </h4>
                    <div className="p-6 bg-surface-container-low rounded-2xl border border-outline-variant/30 text-center">
                      <p className="text-secondary font-black text-2xl uppercase tracking-tight">ALL SERVICES ARE COMPLETELY FREE</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-6 flex items-center gap-3 text-sm uppercase tracking-widest">
                    <span className="material-symbols-outlined text-xl">description</span> Required Documents
                  </h4>
                  <ul className="space-y-5">
                    <li className="flex items-center gap-4 text-on-surface-variant font-bold">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-primary text-xl">description</span>
                      </div>
                      Original Birth Certificate
                    </li>
                    <li className="flex items-center gap-4 text-on-surface-variant font-bold">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-primary text-xl">id_card</span>
                      </div>
                      Aadhaar Card Copy
                    </li>
                    <li className="flex items-center gap-4 text-on-surface-variant font-bold">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-primary text-xl">photo_camera</span>
                      </div>
                      2 Passport Size Photos
                    </li>
                    <li className="flex items-center gap-4 text-on-surface-variant font-bold">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-primary text-xl">edit_note</span>
                      </div>
                      Completed Admission Form
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 bg-surface-container-low" id="about">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold mb-10 tracking-tight">About Z P Urdu School Asgani</h2>
          <div className="text-lg text-on-surface-variant leading-relaxed font-medium space-y-8">
            <p>
              Our school is more than just an educational institution; it is a community of learners, educators, and parents dedicated to nurturing the next generation. We focus on academic excellence, character building, and creating an environment where students feel safe to explore and learn.
            </p>
            <p>
              With a team of dedicated teachers and a curriculum designed to foster both intellectual and emotional growth, we strive to ensure that every student who passes through our doors is prepared for a bright and successful future.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-6 bg-white" id="contact">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-16 lg:grid-cols-2 items-start">
            <div>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">Get in Touch</h2>
              <p className="text-on-surface-variant text-lg font-medium mb-10 leading-relaxed max-w-lg">We are here to answer any questions you may have about our school, admissions, or programs.</p>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary text-2xl">location_on</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">Address</h4>
                    <p className="text-on-surface-variant font-medium leading-relaxed">
                      Asgani Village, Taluka - Khed,<br />District Ratnagiri , Maharashtra<br />
                      <span className="text-primary font-bold">Pincode: 415709</span>
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary text-2xl">call</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">Phone</h4>
                    <p className="text-on-surface-variant font-bold text-lg">+91 7773947129</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary text-2xl">mail</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">Email</h4>
                    <p className="text-on-surface-variant font-bold text-lg">asganiurdu@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-low p-8 md:p-12 rounded-3xl border border-outline-variant/40 shadow-xl">
              <h3 className="text-2xl font-extrabold mb-8 flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">schedule</span> Office Hours
              </h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-outline-variant/30 pb-4">
                  <span className="font-bold">Monday - Thursday</span>
                  <span className="text-on-surface-variant font-bold">9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between items-center border-b border-outline-variant/30 pb-4">
                  <span className="font-bold">Friday &amp; Saturday</span>
                  <span className="text-on-surface-variant font-bold">8:00 AM - 11:30 AM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-bold">Sunday</span>
                  <span className="text-error font-extrabold uppercase tracking-widest text-xs">Closed</span>
                </div>
              </div>
              <div className="mt-12 p-6 bg-primary/5 rounded-2xl border border-primary/10">
                <p className="text-primary font-bold text-center text-sm">For emergency inquiries, please contact our office phone number directly.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white/50 py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-xl font-extrabold text-white tracking-tight">
              Z P Urdu School Asgani
            </div>
            <div className="flex flex-wrap justify-center gap-8 font-bold text-xs tracking-widest uppercase">
              <a className="hover:text-white transition-colors" href="#about">About</a>
              <a className="hover:text-white transition-colors" href="#academics">Academics</a>
              <a className="hover:text-white transition-colors" href="#management">Management</a>
              <a className="hover:text-white transition-colors" href="#contact">Contact</a>
            </div>
            <div className="text-xs font-medium">
              © 2024 Z P Urdu School Asgani. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
