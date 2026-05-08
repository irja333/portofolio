import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code, ChevronRight, Download, Briefcase, GraduationCap, Award, Instagram, Link as LinkIcon } from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      desc: "Input data untuk membuat NIB (Nomor Induk Berusaha)."
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
      desc: "Mengajar pelajaran Informatika yang datang langsung kerumah siswa."
    },
    {
      title: "Administrasi",
      company: "Balai Prasarana Permukiman Wilayah Aceh",
      period: "Feb 2024 - Apr 2024",
      desc: "Bertugas di bagian sanitasi, mengolah data, merapikan serta mengarsipkan berkas-berkas."
    }
  ];

  // Data Pendidikan dari CV
  const education = {
    degree: "Pendidikan Teknologi Informasi",
    university: "Universitas Islam Negeri Ar-Raniry Banda Aceh",
    period: "Aug 2021 - Aug 2025",
    gpa: "3.57",
    journal: "Perancangan Aplikasi E-Katalog Genta Fiberglass Di Aceh Selatan Berbasis Web"
  };

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
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500 selection:text-white">
      
      {/* Navigation Bar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/80 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent cursor-pointer" onClick={() => scrollToSection('beranda')}>
            Irja<span className="text-cyan-400"> Zahidi</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {['Beranda', 'Tentang', 'Pengalaman', 'Hasil', 'Kontak'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-slate-300 hover:text-cyan-400 transition-colors text-sm font-medium tracking-wide"
              >
                {item}
              </button>
            ))}
            <a 
              href="/CV - IRJA ZAHIDI.pdf" 
              download="CV_Irja_Zahidi.pdf"
              className="px-5 py-2 rounded-full border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-slate-900 transition-all duration-300 text-sm font-semibold flex items-center gap-2"
            >
              <Download size={16} /> Unduh CV
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-slate-300 hover:text-cyan-400" onClick={toggleMenu}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-xl border-t border-slate-800 flex flex-col py-4 px-6 shadow-2xl">
            {['Beranda', 'Tentang', 'Pengalaman', 'Hasil', 'Kontak'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-left py-3 text-slate-300 hover:text-cyan-400 border-b border-slate-800/50 last:border-0"
              >
                {item}
              </button>
            ))}
            <a 
              href="/CV - IRJA ZAHIDI.pdf" 
              download="CV_Irja_Zahidi.pdf"
              className="mt-4 text-center py-3 rounded-full bg-cyan-500 text-slate-900 font-semibold flex items-center justify-center gap-2"
            >
              <Download size={18} /> Unduh CV
            </a>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main>
        
        {/* HERO SECTION */}
        <section id="beranda" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -z-10"></div>

          <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <div className="inline-block px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 text-cyan-400 text-sm font-medium">
                👋 Halo, Selamat Datang!
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight text-slate-100">
                Saya <br/>
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                  Irja Zahidi
                </span>
              </h1>
              <p className="text-lg md:text-xl text-slate-400 max-w-lg leading-relaxed">
                Lulusan Pendidikan Teknologi Informasi yang bersemangat dalam bidang teknologi, pengembangan web, pengolahan data, dan administrasi.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <button onClick={() => scrollToSection('karya')} className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center gap-2 group">
                  Lihat Hasil <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <a href="/CV - IRJA ZAHIDI.pdf" download="CV_Irja_Zahidi.pdf" className="px-6 py-3 rounded-full border-2 border-cyan-500/50 text-cyan-400 font-semibold hover:bg-cyan-500 hover:text-slate-900 transition-all duration-300 flex items-center gap-2 group">
                  <Download size={18} className="group-hover:-translate-y-1 transition-transform" /> Unduh CV
                </a>
              </div>
              <div className="flex gap-4 items-center pt-2">
                <a href="https://www.linkedin.com/in/irja-zahidi" target="_blank" rel="noreferrer" className="p-2 text-slate-400 hover:text-blue-500 transition-colors"><Linkedin size={24} /></a>
                <a href="https://www.instagram.com/irja.zahidi" target="_blank" rel="noreferrer" className="p-2 text-slate-400 hover:text-pink-500 transition-colors"><Instagram size={24} /></a>
                <a href="https://linktr.ee/irja_" target="_blank" rel="noreferrer" className="p-2 text-slate-400 hover:text-emerald-400 transition-colors"><LinkIcon size={24} /></a>
              </div>
            </div>

            {/* Hero Graphic */}
            <div className="relative flex justify-center items-center h-[400px] md:h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-slate-800/50 shadow-2xl flex items-center justify-center bg-slate-900">
                <img 
                  src="/IRJA-ZAHIDI.jpeg" 
                  alt="Foto Profil Irja Zahidi" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="absolute top-10 right-0 md:-right-10 bg-slate-800/80 backdrop-blur-sm px-6 py-3 rounded-2xl border border-slate-700 shadow-xl animate-bounce" style={{animationDuration: '3s'}}>
                <span className="text-cyan-400 font-bold">IT Education</span>
                <p className="text-xs text-slate-400">UIN Ar-Raniry</p>
              </div>
              <div className="absolute bottom-10 left-0 md:-left-10 bg-slate-800/80 backdrop-blur-sm px-6 py-3 rounded-2xl border border-slate-700 shadow-xl animate-bounce" style={{animationDuration: '4s'}}>
                <span className="text-purple-400 font-bold">Web Development</span>
                <p className="text-xs text-slate-400"> </p>
              </div>
            </div>
          </div>
        </section>

        {/* TENTANG SECTION */}
        <section id="tentang" className="py-24 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row gap-16 items-center">
              <div className="md:w-1/2 space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-100"><span className="text-cyan-400">Tentang Saya</span> </h2>
                <div className="w-20 h-1 bg-cyan-500 rounded-full"></div>
                <p className="text-slate-400 text-lg leading-relaxed">
                  Saya merupakan lulusan baru dari Program Studi Pendidikan Teknologi Informasi yang bersemangat dan berdedikasi tinggi dalam bidang teknologi dan pengembangan web. Selama masa studi, saya aktif terlibat dalam berbagai proyek pengembangan web serta menguasai dasar-dasar pemrograman.
                </p>
                <p className="text-slate-400 text-lg leading-relaxed">
                  Selain itu, saya mahir menggunakan Microsoft Office untuk keperluan administrasi dan pengolahan data, maupun media digital. Saya memiliki kemampuan untuk bekerja secara mandiri maupun dalam tim, serta berkomitmen untuk terus belajar, beradaptasi dengan perkembangan teknologi, dan memberikan kontribusi positif di dunia kerja.
                </p>
              </div>
              <div className="md:w-1/2 w-full">
                <h3 className="text-xl font-semibold text-slate-200 mb-6 flex items-center gap-2">
                  <Code size={20} className="text-cyan-400" /> Keahlian & Keterampilan
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <span 
                      key={index} 
                      className="px-4 py-2 bg-slate-800 text-slate-300 rounded-lg border border-slate-700 text-sm font-medium hover:border-cyan-500 hover:text-cyan-400 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PENGALAMAN & PENDIDIKAN SECTION */}
        <section id="pengalaman" className="py-24">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid lg:grid-cols-2 gap-16">
              
              {/* Pengalaman Kerja */}
              <div>
                <h2 className="text-3xl font-bold text-slate-100 mb-8 flex items-center gap-3">
                  <Briefcase className="text-cyan-400" size={32} /> Pengalaman Kerja
                </h2>
                <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
                  {experiences.map((exp, index) => (
                    <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-slate-900 group-hover:border-cyan-500 text-slate-500 group-hover:text-cyan-400 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm transition-colors relative z-10">
                        <Briefcase size={16} />
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-800/50 border border-slate-700/50 p-6 rounded-2xl group-hover:border-slate-500 transition-colors">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                          <h3 className="font-bold text-lg text-slate-200">{exp.title}</h3>
                          <span className="text-xs font-medium text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full">{exp.period}</span>
                        </div>
                        <h4 className="text-sm font-semibold text-slate-400 mb-3">{exp.company}</h4>
                        <p className="text-slate-400 text-sm leading-relaxed">{exp.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pendidikan & Organisasi */}
              <div>
                <h2 className="text-3xl font-bold text-slate-100 mb-8 flex items-center gap-3">
                  <GraduationCap className="text-cyan-400" size={32} /> Pendidikan
                </h2>
                <div className="bg-slate-800/40 border border-slate-700/50 p-8 rounded-2xl hover:border-slate-600 transition-colors mb-10">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-4">
                    <h3 className="text-xl font-bold text-slate-200">{education.degree}</h3>
                    <span className="text-sm font-medium text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full">{education.period}</span>
                  </div>
                  <h4 className="text-lg font-semibold text-slate-300 mb-2">{education.university}</h4>
                  <p className="text-cyan-400 font-medium mb-4">IPK: {education.gpa}</p>
                  <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
                    <span className="text-xs text-slate-500 block mb-1">Jurnal / Karya Ilmiah:</span>
                    <p className="text-slate-300 text-sm font-medium">{education.journal}</p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-100 mb-6 flex items-center gap-3 mt-12">
                   Organisasi & Relawan
                </h3>
                <div className="bg-slate-800/40 border border-slate-700/50 p-6 rounded-2xl">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-bold text-slate-200">Anggota Humas</h4>
                    <span className="text-xs text-cyan-400">Mar 2023 - Mar 2025</span>
                  </div>
                  <p className="text-sm text-slate-400 mb-3">Himpunan Pendidikan Teknologi Informasi</p>
                  <ul className="list-disc list-inside text-sm text-slate-400 space-y-1">
                    <li>Membantu masyarakat</li>
                    <li>Menggalang dana bencana alam</li>
                    <li>Bergotong Royong</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* KARYA / SERTIFIKAT SECTION */}
        <section id="karya" className="py-24 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="flex items-center gap-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-100"><span className="text-cyan-400">Jurnal & Sertifikasi</span> </h2>
              <div className="h-[1px] flex-1 bg-slate-700 ml-4 hidden sm:block"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Card Jurnal/Proyek */}
              <div className="group rounded-2xl overflow-hidden bg-slate-800 border border-slate-700 hover:border-slate-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10 flex flex-col">
                <div className={`h-48 w-full bg-gradient-to-br from-blue-600 to-cyan-500 relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-300 flex items-center justify-center">
                    <Code size={48} className="text-white/50 group-hover:scale-110 transition-transform" />
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <span className="text-xs font-bold text-cyan-400 mb-2 tracking-wider uppercase">Jurnal Web</span>
                  <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-cyan-400 transition-colors">Aplikasi E-Katalog Genta Fiberglass</h3>
                  <p className="text-slate-400 text-sm mb-6 flex-1">Perancangan aplikasi E-Katalog berbasis web yang dikembangkan untuk wilayah Aceh Selatan.</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    <span className="text-xs font-medium px-2.5 py-1 bg-slate-900 text-cyan-400 rounded-md border border-slate-700/50">Web App</span>
                    <span className="text-xs font-medium px-2.5 py-1 bg-slate-900 text-cyan-400 rounded-md border border-slate-700/50">E-Katalog</span>
                  </div>
                </div>
              </div>

              {/* Sertifikat Cards */}
              {certificates.map((cert, index) => (
                <div key={index} className="group rounded-2xl overflow-hidden bg-slate-800 border border-slate-700 hover:border-slate-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/10 flex flex-col">
                  <div className={`h-48 w-full bg-gradient-to-br ${index === 0 ? 'from-purple-600 to-pink-500' : 'from-emerald-600 to-teal-500'} relative overflow-hidden flex items-center justify-center`}>
                    <Award size={48} className="text-white/50 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <span className="text-xs font-bold text-purple-400 mb-2 tracking-wider uppercase">Sertifikat Profesional</span>
                    <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-purple-400 transition-colors">{cert.title}</h3>
                    <p className="text-slate-400 text-sm mb-4 flex-1">{cert.desc}</p>
                    <div className="pt-4 border-t border-slate-700 mt-auto">
                      <p className="text-xs text-slate-300 font-medium">{cert.issuer}</p>
                      <p className="text-xs text-slate-500 mt-1">{cert.period}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
          </div>
        </section>

        {/* KONTAK SECTION */}
        <section id="kontak" className="py-24">
          <div className="max-w-3xl mx-auto px-6 md:px-12 text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100"><span className="text-cyan-400">Mari Berkolaborasi</span> </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Saya selalu terbuka untuk mendiskusikan peluang kerja, pengembangan proyek, atau sekadar bertukar ide. Jangan ragu untuk menghubungi saya!
            </p>
            
            <div className="pt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
              <a 
                href="mailto:irjazahidi8@gmail.com" 
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold text-lg transition-colors shadow-lg shadow-cyan-500/25 w-full sm:w-auto justify-center"
              >
                <Mail size={24} /> Email Saya
              </a>
              <a 
                href="https://wa.me/6282275576880" 
                target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-transparent border-2 border-slate-700 hover:border-cyan-500 hover:text-cyan-400 text-slate-300 font-bold text-lg transition-colors w-full sm:w-auto justify-center"
              >
                WhatsApp Saya
              </a>
            </div>

            <div className="pt-16 flex justify-center gap-6">
              <a href="https://www.linkedin.com/in/irja-zahidi" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-blue-500 transition-colors bg-slate-900 p-4 rounded-full border border-slate-800 hover:border-blue-500"><Linkedin size={24} /></a>
              <a href="https://www.instagram.com/irja.zahidi" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-pink-500 transition-colors bg-slate-900 p-4 rounded-full border border-slate-800 hover:border-pink-500"><Instagram size={24} /></a>
              <a href="https://linktr.ee/irja_" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-emerald-400 transition-colors bg-slate-900 p-4 rounded-full border border-slate-800 hover:border-emerald-500"><LinkIcon size={24} /></a>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-slate-800 bg-slate-900/50">
        <p className="text-slate-500 text-sm">
          Dibuat dengan ❤️ oleh <span className="text-cyan-400 font-medium">Irja Zahidi</span> <br className="md:hidden" />
          © {new Date().getFullYear()} Seluruh hak cipta dilindungi.
        </p>
      </footer>

    </div>
  );
}
