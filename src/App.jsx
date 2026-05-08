import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code, ChevronRight, Download, Briefcase, GraduationCap, Award, Instagram, Link as LinkIcon, Phone, MapPin, CalendarDays, Home, Terminal, Sparkles } from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // State untuk efek mengetik (Typing Effect)
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const roles = ["Web Developer", "Data Analyst", "IT Administrator", "Tech Enthusiast"];

  // Handle Scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle Typing Effect
  useEffect(() => {
    let timer = setTimeout(() => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500); // Tunggu sebelum menghapus
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Data Keahlian dari CV
  const skills = [
    "Web Development", "Data Entry", "Data Analysis", "Artificial Intelligence", 
    "Creative Design", "Microsoft Office", "Computer Operator", "Data Management", 
    "Administration", "Teamwork"
  ];

  // Data Pengalaman Kerja dari CV
  const experiences = [
    {
      title: "Data Entry",
      company: "Lembaga Pendamping Proses Produk Halal YSPDI Robbani",
      period: "Feb 2026 - Sekarang",
      desc: "Bertugas untuk menginput data untuk membuat Sertifikat Halal."
    },
    {
      title: "Guru Informatika",
      company: "SMP Negeri 8 Banda Aceh",
      period: "Jan 2025 - Mar 2025",
      desc: "Menyusun perangkat pembelajaran dan mengajarkan materi pelajaran Informatika."
    },
    {
      title: "Tentor Les Private",
      company: "Les Private BNA",
      period: "Jun 2024 - Jul 2024",
      desc: "Mengajar pelajaran Informatika yang datang langsung kerumah murid-murid."
    },
    {
      title: "Administrasi",
      company: "Balai Prasarana Permukiman Wilayah Aceh",
      period: "Feb 2024 - Apr 2024",
      desc: "Bertugas di bagian sanitasi, mengolah data, merapikan serta mengarsipkan berkas-berkas."
    }
  ];

  // Data Pendidikan Lengkap (Universitas hingga SD)
  const educationHistory = [
    {
      degree: "Pendidikan Teknologi Informasi",
      institution: "Universitas Islam Negeri Ar-Raniry Banda Aceh",
      period: "Aug 2021 - Aug 2025",
      gpa: "3.57",
      journal: "Perancangan Aplikasi E-Katalog Genta Fiberglass Di Aceh Selatan Berbasis Web",
      type: "university"
    },
    {
      degree: "Sekolah Menengah Atas",
      institution: "MAN 2 Aceh Selatan",
      period: "2018 - 2021",
      type: "school"
    },
    {
      degree: "Sekolah Menengah Pertama",
      institution: "MTsN 2 Aceh Selatan",
      period: "2015 - 2018",
      type: "school"
    },
    {
      degree: "Sekolah Dasar",
      institution: "MIN 16 Aceh Selatan",
      period: "2009 - 2015",
      type: "school"
    }
  ];

  // Data Sertifikat dari CV
  const certificates = [
    {
      title: "Web Development Junior",
      issuer: "Lembaga Sertifikasi Profesi Teknologi Digital",
      period: "Sep 2025 - Sep 2028",
      desc: "Membuat dan mengembangkan website dengan menyusun fungsi yang terorganisasi dan rapi."
    },
    {
      title: "Basic Data Science",
      issuer: "BPVP Banda Aceh",
      period: "Feb 2026",
      desc: "Mempelajari cara mengolah data-data Excel menggunakan Google Colab."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500 selection:text-white relative z-0 overflow-x-hidden">
      
      {/* Background Tech Grid Overlay */}
      <div className="fixed inset-0 z-[-1] opacity-20 pointer-events-none bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      {/* Navigation Bar */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-slate-950/80 backdrop-blur-lg border-b border-white/10 shadow-lg py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="text-2xl font-black tracking-tighter bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent cursor-pointer hover:scale-105 transition-transform" onClick={() => scrollToSection('beranda')}>
            Irja<span className="text-slate-100 font-light">Zahidi.</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1 items-center bg-slate-900/50 p-1 rounded-full border border-slate-800/50 backdrop-blur-md">
            {['Beranda', 'Tentang', 'Pengalaman', 'Hasil', 'Kontak'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="px-5 py-2 text-slate-300 hover:text-cyan-400 hover:bg-slate-800 rounded-full transition-all text-sm font-medium tracking-wide"
              >
                {item}
              </button>
            ))}
            <a 
              href="/CV - IRJA ZAHIDI.pdf" 
              download="CV_Irja_Zahidi.pdf"
              className="ml-2 px-5 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300 text-sm font-semibold flex items-center gap-2"
            >
              <Download size={16} /> CV
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2 bg-slate-800 rounded-full text-cyan-400 hover:bg-slate-700 transition-colors border border-slate-700" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-slate-950/95 backdrop-blur-2xl border-t border-slate-800 flex flex-col py-6 px-6 shadow-2xl animate-fade-in-up">
            {['Beranda', 'Tentang', 'Pengalaman', 'Hasil', 'Kontak'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-left py-4 px-4 rounded-xl text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 transition-colors font-medium mb-1"
              >
                {item}
              </button>
            ))}
            <a 
              href="/CV - IRJA ZAHIDI.pdf" 
              download="CV_Irja_Zahidi.pdf"
              className="mt-6 text-center py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25"
            >
              <Download size={20} /> Unduh Curriculum Vitae
            </a>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main>
        
        {/* HERO SECTION */}
        <section id="beranda" className="min-h-screen flex items-center pt-20 relative">
          {/* Animated Background Orbs */}
          <div className="absolute top-1/4 left-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>

          <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Hero Text */}
            <div className="space-y-8 z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 backdrop-blur-md border border-cyan-500/30 text-cyan-400 text-sm font-medium shadow-[0_0_15px_rgba(6,182,212,0.15)]">
                <Sparkles size={16} className="text-yellow-400" />
                <span>Selamat Datang di Portofolio Saya</span>
              </div>
              
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-slate-100">
                  Hai, Saya <br/>
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                    Irja Zahidi
                  </span>
                </h1>
                
                {/* Typing Effect Subtitle */}
                <h2 className="text-2xl md:text-3xl font-semibold text-slate-300 h-10 flex items-center gap-2">
                  <Terminal size={28} className="text-cyan-400" />
                  <span>{text}</span>
                  <span className="w-[3px] h-8 bg-cyan-400 animate-pulse"></span>
                </h2>
              </div>

              <p className="text-lg text-slate-400 max-w-lg leading-relaxed">
                Lulusan Pendidikan Teknologi Informasi yang bersemangat dalam mengubah ide menjadi solusi digital melalui pengembangan web dan pengolahan data.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <button onClick={() => scrollToSection('hasil')} className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 group">
                  Lihat Hasil Karya <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <div className="flex gap-4 items-center px-4">
                  {[
                    { icon: Linkedin, url: "https://www.linkedin.com/in/irja-zahidi", color: "hover:text-blue-400 hover:border-blue-400 hover:bg-blue-400/10" },
                    { icon: Instagram, url: "https://www.instagram.com/irja.zahidi", color: "hover:text-pink-400 hover:border-pink-400 hover:bg-pink-400/10" },
                    { icon: LinkIcon, url: "https://linktr.ee/irja_", color: "hover:text-emerald-400 hover:border-emerald-400 hover:bg-emerald-400/10" }
                  ].map((social, idx) => (
                    <a key={idx} href={social.url} target="_blank" rel="noreferrer" className={`p-3 rounded-full border border-slate-700 bg-slate-900/50 backdrop-blur-sm text-slate-400 transition-all duration-300 ${social.color}`}>
                      <social.icon size={22} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Hero Graphic */}
            <div className="relative flex justify-center items-center h-[400px] md:h-[500px] lg:h-[600px] z-10">
              {/* Outer Glowing Ring */}
              <div className="absolute w-[320px] h-[320px] md:w-[420px] md:h-[420px] rounded-full border border-cyan-500/20 border-dashed animate-[spin_20s_linear_infinite]"></div>
              <div className="absolute w-[360px] h-[360px] md:w-[460px] md:h-[460px] rounded-full border border-purple-500/20 border-dotted animate-[spin_25s_linear_infinite_reverse]"></div>
              
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full p-2 bg-gradient-to-tr from-cyan-500 via-blue-500 to-purple-600 shadow-[0_0_40px_rgba(6,182,212,0.3)] hover:scale-105 transition-transform duration-500">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-slate-950 bg-slate-900">
                  <img 
                    src="/IRJA-ZAHIDI.jpeg" 
                    alt="Foto Profil Irja Zahidi" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
              
              {/* Floating Badges */}
              <div className="absolute top-10 right-0 md:-right-4 bg-slate-900/90 backdrop-blur-md px-6 py-3 rounded-2xl border border-cyan-500/30 shadow-[0_0_20px_rgba(6,182,212,0.15)] animate-[bounce_4s_ease-in-out_infinite]">
                <div className="flex items-center gap-3">
                  <GraduationCap className="text-cyan-400" size={24} />
                  <div>
                    <span className="text-slate-100 font-bold block text-sm">IT Education</span>
                    <span className="text-xs text-slate-400">UIN Ar-Raniry</span>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-10 left-0 md:-left-4 bg-slate-900/90 backdrop-blur-md px-6 py-3 rounded-2xl border border-purple-500/30 shadow-[0_0_20px_rgba(168,85,247,0.15)] animate-[bounce_5s_ease-in-out_infinite]" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-3">
                  <Code className="text-purple-400" size={24} />
                  <div>
                    <span className="text-slate-100 font-bold block text-sm">Web Dev</span>
                    <span className="text-xs text-slate-400">Front-End Focus</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TENTANG SECTION */}
        <section id="tentang" className="py-24 relative">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row gap-16 items-center">
              
              <div className="md:w-1/2 space-y-6">
                <div className="inline-flex items-center gap-2">
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-100">Profil <span className="text-cyan-400">Pribadi</span></h2>
                </div>
                <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-transparent rounded-full"></div>
                
                <div className="bg-slate-900/40 border border-slate-800/50 p-6 md:p-8 rounded-3xl backdrop-blur-sm hover:border-cyan-500/30 transition-colors duration-500 shadow-xl">
                  <p className="text-slate-300 text-lg leading-relaxed mb-4">
                    Saya merupakan lulusan baru dari Program Studi Pendidikan Teknologi Informasi yang bersemangat dan berdedikasi tinggi dalam bidang teknologi dan pengembangan web. Selama masa studi, saya aktif terlibat dalam berbagai proyek pengembangan web serta menguasai dasar-dasar pemrograman.
                  </p>
                  <p className="text-slate-300 text-lg leading-relaxed">
                    Selain itu, saya mahir menggunakan Microsoft Office untuk keperluan administrasi dan pengolahan data, maupun media digital. Saya memiliki kemampuan untuk bekerja secara mandiri maupun dalam tim, serta berkomitmen untuk terus belajar, beradaptasi dengan perkembangan teknologi, dan memberikan kontribusi positif di dunia kerja.
                  </p>
                  
                  {/* Informasi Pribadi */}
                  <div className="mt-8 pt-6 border-t border-slate-800">
                    <ul className="grid sm:grid-cols-2 gap-4">
                      <li className="flex items-center gap-3 bg-slate-950/50 p-3 rounded-xl border border-slate-800 hover:border-cyan-500/50 transition-colors group">
                        <div className="p-2 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                          <CalendarDays size={20} className="text-cyan-400" />
                        </div>
                        <div>
                          <span className="block text-xs text-slate-500 font-medium mb-0.5">Tanggal Lahir</span>
                          <span className="text-sm font-semibold text-slate-200">05 Des 2003</span>
                        </div>
                      </li>
                      <li className="flex items-center gap-3 bg-slate-950/50 p-3 rounded-xl border border-slate-800 hover:border-blue-500/50 transition-colors group">
                        <div className="p-2 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                          <MapPin size={20} className="text-blue-400" />
                        </div>
                        <div>
                          <span className="block text-xs text-slate-500 font-medium mb-0.5">Domisili</span>
                          <span className="text-sm font-semibold text-slate-200">Banda Aceh</span>
                        </div>
                      </li>
                      <li className="flex items-center gap-3 bg-slate-950/50 p-3 rounded-xl border border-slate-800 hover:border-purple-500/50 transition-colors group sm:col-span-2">
                        <div className="p-2 bg-purple-500/10 rounded-lg group-hover:bg-purple-500/20 transition-colors">
                          <Home size={20} className="text-purple-400" />
                        </div>
                        <div>
                          <span className="block text-xs text-slate-500 font-medium mb-0.5">Daerah Asal</span>
                          <span className="text-sm font-semibold text-slate-200">Aceh Selatan, Aceh, Indonesia</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="md:w-1/2 w-full">
                <h3 className="text-2xl font-bold text-slate-100 mb-8 flex items-center gap-3">
                  <Code className="text-cyan-400 bg-cyan-500/10 p-2 rounded-lg" size={40} /> 
                  Keahlian Utama
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <span 
                      key={index} 
                      className="px-5 py-3 bg-slate-900 border border-slate-800 text-slate-300 rounded-xl text-sm font-medium hover:-translate-y-1 hover:scale-105 hover:bg-cyan-500/10 hover:border-cyan-400/50 hover:text-cyan-300 hover:shadow-[0_0_15px_rgba(6,182,212,0.2)] transition-all duration-300 cursor-default flex items-center gap-2"
                    >
                      <Sparkles size={14} className="text-slate-600 opacity-50" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PENGALAMAN & PENDIDIKAN SECTION */}
        <section id="pengalaman" className="py-24 bg-slate-900/30 relative">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
              
              {/* Pengalaman Kerja */}
              <div>
                <div className="inline-flex items-center gap-2 mb-10">
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-100">Jejak <span className="text-cyan-400">Karir</span></h2>
                </div>
                
                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-[1.4rem] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-cyan-500 before:via-purple-500 before:to-transparent">
                  {experiences.map((exp, index) => (
                    <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                      {/* Timeline Dot */}
                      <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-slate-950 bg-slate-800 group-hover:bg-cyan-500 text-slate-400 group-hover:text-slate-950 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-all duration-300 relative z-10 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.6)] group-hover:scale-110">
                        <Briefcase size={20} />
                      </div>
                      
                      {/* Experience Card */}
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-slate-900 border border-slate-800 p-6 md:p-8 rounded-3xl hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-1">
                        <div className="flex flex-col gap-2 mb-4">
                          <span className="text-xs font-bold text-cyan-400 bg-cyan-500/10 px-3 py-1.5 rounded-full w-fit tracking-wide">{exp.period}</span>
                          <h3 className="font-bold text-xl text-slate-100">{exp.title}</h3>
                        </div>
                        <h4 className="text-sm font-semibold text-slate-400 mb-4 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                          {exp.company}
                        </h4>
                        <p className="text-slate-400 text-sm leading-relaxed">{exp.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pendidikan */}
              <div>
                <div className="inline-flex items-center gap-2 mb-10">
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-100">Latar Belakang <span className="text-cyan-400">Akademis</span></h2>
                </div>
                
                <div className="space-y-6 mb-12">
                  {educationHistory.map((edu, index) => (
                    <div key={index} className={`relative p-6 md:p-8 rounded-3xl overflow-hidden transition-all duration-300 group hover:-translate-y-1 ${edu.type === 'university' ? 'bg-gradient-to-br from-slate-900 to-slate-800 border border-cyan-500/30 shadow-lg shadow-cyan-500/5' : 'bg-slate-900 border border-slate-800 hover:border-slate-600'}`}>
                      
                      {/* Hover Highlight for Univ */}
                      {edu.type === 'university' && (
                         <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-colors duration-500"></div>
                      )}

                      <div className="relative z-10 flex flex-col sm:flex-row justify-between sm:items-start mb-4 gap-4">
                        <div>
                          <h3 className={`font-bold mb-1 ${edu.type === 'university' ? 'text-2xl text-slate-100 group-hover:text-cyan-400 transition-colors' : 'text-lg text-slate-200'}`}>
                            {edu.degree}
                          </h3>
                          <h4 className="text-slate-400 font-medium flex items-center gap-2">
                            {edu.type === 'university' && <GraduationCap size={16} className="text-cyan-500" />}
                            {edu.institution}
                          </h4>
                        </div>
                        <span className={`text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap ${edu.type === 'university' ? 'text-cyan-900 bg-cyan-400' : 'text-slate-400 bg-slate-800'}`}>
                          {edu.period}
                        </span>
                      </div>
                      
                      {edu.type === 'university' && (
                        <div className="relative z-10 mt-6 space-y-4">
                          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-950/50 border border-slate-800">
                            <Award size={16} className="text-yellow-400" />
                            <span className="text-slate-300 font-medium text-sm">IPK: <span className="text-white">{edu.gpa}</span></span>
                          </div>
                          <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800/80 group-hover:border-cyan-500/30 transition-colors">
                            <span className="flex items-center gap-2 text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-2">
                              <Code size={14} /> Jurnal Ilmiah
                            </span>
                            <p className="text-slate-300 text-sm font-medium italic">"{edu.journal}"</p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Organisasi */}
                <h3 className="text-2xl font-bold text-slate-100 mb-6 flex items-center gap-3">
                  <span className="p-2 bg-purple-500/10 rounded-xl text-purple-400">
                    <Briefcase size={24} />
                  </span>
                  Organisasi & Relawan
                </h3>
                <div className="bg-slate-900 border border-slate-800 hover:border-purple-500/30 p-8 rounded-3xl transition-colors group">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 gap-2">
                    <h4 className="font-bold text-xl text-slate-200 group-hover:text-purple-400 transition-colors">Anggota Humas</h4>
                    <span className="text-xs font-bold text-purple-400 bg-purple-500/10 px-3 py-1.5 rounded-full w-fit">Mar 2023 - Mar 2025</span>
                  </div>
                  <p className="text-slate-400 font-medium mb-4 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div>
                    Himpunan Pendidikan Teknologi Informasi
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-3 mt-4">
                    {["Membantu masyarakat", "Menggalang dana bencana alam", "Bergotong Royong"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-slate-400 bg-slate-950/50 px-4 py-2 rounded-lg border border-slate-800">
                        <Sparkles size={14} className="text-purple-400 shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* HASIL / SERTIFIKAT SECTION */}
        <section id="hasil" className="py-24 relative">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="flex items-center gap-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-100">Etalase <span className="text-cyan-400">Karya & Pencapaian</span></h2>
              <div className="h-[1px] flex-1 bg-gradient-to-r from-slate-700 to-transparent ml-4 hidden sm:block"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Card Jurnal/Proyek */}
              <a 
                href="https://ojs.trigunadharma.ac.id/index.php/jsi/article/view/11696" 
                target="_blank" 
                rel="noreferrer" 
                className="group rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-cyan-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(6,182,212,0.3)] flex flex-col h-full"
              >
                <div className="h-56 w-full bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden flex items-center justify-center group-hover:from-blue-600 group-hover:to-cyan-500 transition-colors duration-500">
                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 text-white/10 group-hover:text-white/30 transition-colors">
                    <ExternalLink size={80} />
                  </div>
                  <div className="z-10 flex flex-col items-center gap-3">
                    <div className="p-4 bg-slate-950/50 backdrop-blur-md rounded-2xl border border-white/10 group-hover:scale-110 transition-transform duration-500 shadow-xl">
                      <Code size={40} className="text-cyan-400 group-hover:text-white" />
                    </div>
                    <span className="opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 text-white font-bold tracking-widest text-sm bg-black/30 px-4 py-1.5 rounded-full backdrop-blur-sm">BACA JURNAL</span>
                  </div>
                </div>
                
                <div className="p-8 flex-1 flex flex-col relative bg-slate-900">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-black text-cyan-400 tracking-widest uppercase bg-cyan-500/10 px-3 py-1 rounded-full">Jurnal Web</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-100 mb-4 group-hover:text-cyan-400 transition-colors leading-snug">Aplikasi E-Katalog Genta Fiberglass</h3>
                  <p className="text-slate-400 text-sm mb-8 flex-1 leading-relaxed">Perancangan aplikasi E-Katalog berbasis web yang dikembangkan untuk mempermudah digitalisasi di wilayah Aceh Selatan.</p>
                  <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-800">
                    {["Web App", "E-Katalog", "UI/UX"].map(tag => (
                      <span key={tag} className="text-xs font-semibold px-3 py-1.5 bg-slate-950 text-slate-300 rounded-lg border border-slate-800">{tag}</span>
                    ))}
                  </div>
                </div>
              </a>

              {/* Sertifikat Cards */}
              {certificates.map((cert, index) => (
                <div key={index} className="group rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-purple-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(168,85,247,0.3)] flex flex-col h-full">
                  <div className={`h-56 w-full bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden flex items-center justify-center ${index === 0 ? 'group-hover:from-purple-600 group-hover:to-pink-500' : 'group-hover:from-emerald-600 group-hover:to-teal-500'} transition-colors duration-500`}>
                    <div className="z-10 flex flex-col items-center gap-3">
                      <div className="p-4 bg-slate-950/50 backdrop-blur-md rounded-2xl border border-white/10 group-hover:scale-110 transition-transform duration-500 shadow-xl">
                        <Award size={40} className={`${index === 0 ? 'text-purple-400' : 'text-emerald-400'} group-hover:text-white`} />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8 flex-1 flex flex-col bg-slate-900">
                    <div className="mb-4">
                      <span className={`text-xs font-black tracking-widest uppercase px-3 py-1 rounded-full ${index === 0 ? 'text-purple-400 bg-purple-500/10' : 'text-emerald-400 bg-emerald-500/10'}`}>Sertifikat Resmi</span>
                    </div>
                    <h3 className={`text-xl font-bold text-slate-100 mb-4 transition-colors leading-snug ${index === 0 ? 'group-hover:text-purple-400' : 'group-hover:text-emerald-400'}`}>{cert.title}</h3>
                    <p className="text-slate-400 text-sm mb-8 flex-1 leading-relaxed">{cert.desc}</p>
                    <div className="pt-4 border-t border-slate-800 mt-auto flex justify-between items-end">
                      <div>
                        <p className="text-xs text-slate-500 font-medium mb-1">Diterbitkan Oleh</p>
                        <p className="text-sm text-slate-200 font-semibold">{cert.issuer}</p>
                      </div>
                      <span className="text-xs font-bold text-slate-500 bg-slate-950 px-2 py-1 rounded-md">{cert.period.split(' ')[1] || cert.period}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
          </div>
        </section>

        {/* KONTAK SECTION */}
        <section id="kontak" className="py-24 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none"></div>

          <div className="max-w-4xl mx-auto px-6 md:px-12 text-center space-y-10 relative z-10">
            <span className="text-cyan-400 font-semibold tracking-wider uppercase text-sm block mb-2">Tertarik Bekerja Sama?</span>
            <h2 className="text-4xl md:text-6xl font-black text-slate-100 tracking-tight">Mari <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Berkolaborasi</span></h2>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Saat ini saya sedang terbuka untuk peluang kerja baru. Baik Anda memiliki pertanyaan, penawaran proyek, atau sekadar ingin menyapa, saya akan berusaha merespons secepatnya!
            </p>
            
            <div className="pt-8 flex flex-col sm:flex-row justify-center items-center gap-6">
              <a 
                href="mailto:irjazahidi8@gmail.com" 
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-slate-100 hover:bg-white text-slate-950 font-bold text-lg hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] w-full sm:w-auto justify-center group"
              >
                <Mail size={24} className="group-hover:animate-bounce" /> Kirim Email
              </a>
              <a 
                href="https://wa.me/6282275576880" 
                target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-slate-900 border border-slate-700 hover:border-cyan-500 hover:bg-cyan-500/10 text-slate-100 font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg w-full sm:w-auto justify-center group"
              >
                <Phone size={24} className="text-cyan-400 group-hover:rotate-12 transition-transform" /> Hubungi WhatsApp
              </a>
            </div>

            <div className="pt-20 flex justify-center gap-6">
              {[
                { icon: Linkedin, url: "https://www.linkedin.com/in/irja-zahidi", hoverClass: "hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2]" },
                { icon: Instagram, url: "https://www.instagram.com/irja.zahidi", hoverClass: "hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:text-white hover:border-transparent" },
                { icon: LinkIcon, url: "https://linktr.ee/irja_", hoverClass: "hover:bg-[#43E660] hover:text-slate-900 hover:border-[#43E660]" }
              ].map((social, idx) => (
                <a key={idx} href={social.url} target="_blank" rel="noreferrer" className={`p-4 rounded-full bg-slate-900 border border-slate-800 text-slate-400 transition-all duration-300 shadow-lg hover:-translate-y-2 ${social.hoverClass}`}>
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="py-10 text-center border-t border-slate-800/50 bg-slate-950 relative z-10">
        <p className="text-slate-500 text-sm font-medium">
          Dirancang & Dibangun dengan ❤️ oleh <span className="text-cyan-400 font-bold hover:underline cursor-pointer">Irja Zahidi</span> <br className="md:hidden mt-2" />
          <span className="hidden md:inline"> | </span> © {new Date().getFullYear()} Seluruh hak cipta dilindungi.
        </p>
      </footer>

    </div>
  );
}
