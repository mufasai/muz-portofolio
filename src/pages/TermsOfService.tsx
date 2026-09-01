import { Link } from 'react-router-dom';
import { ArrowLeft, Moon, Sun, Languages } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';

const TermsOfService = () => {
  const { language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const isIndonesian = language === 'id';

  return (
    <main className="min-h-screen bg-[#050505] text-foreground py-12 px-6 relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        {/* Navigation / Header */}
        <header className="flex justify-between items-center mb-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-orange-500 transition-colors group cursor-pointer"
          >
            <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
            {isIndonesian ? 'Kembali ke Beranda' : 'Back to Home'}
          </Link>

          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-orange-500 hover:border-orange-500/30 transition-all cursor-pointer"
              title={isIndonesian ? 'Ubah Tema' : 'Toggle Theme'}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Language Toggle */}
            <button
              onClick={() => setLanguage(language === 'en' ? 'id' : 'en')}
              className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-orange-500 hover:border-orange-500/30 transition-all cursor-pointer gap-1"
              title={isIndonesian ? 'Ubah Bahasa' : 'Change Language'}
            >
              <Languages size={18} />
              <span className="text-[10px] font-bold uppercase">{language}</span>
            </button>
          </div>
        </header>

        {/* Content Card */}
        <article className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-xl relative z-10">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2 tracking-tight bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">
            {isIndonesian ? 'Ketentuan Layanan' : 'Terms of Service'}
          </h1>
          <p className="text-xs text-muted-foreground mb-8">
            {isIndonesian ? 'Terakhir diperbarui: 28 Agustus 2026' : 'Last updated: August 28, 2026'}
          </p>

          {isIndonesian ? (
            <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
              <p>
                Dengan mengakses dan menggunakan situs web portofolio ini, Anda dianggap telah membaca, memahami, dan menyetujui Ketentuan Layanan ini. Jika Anda tidak menyetujui bagian mana pun dari ketentuan ini, silakan hentikan penggunaan situs web ini.
              </p>

              <h2 className="text-lg font-bold text-foreground mt-8">1. Deskripsi Layanan</h2>
              <p>
                Situs web ini merupakan portofolio pribadi Muhammad Musyafa Fadila yang menampilkan informasi mengenai biodata diri, keahlian teknologi, proyek yang dikerjakan, kegiatan organisasi, dan formulir untuk mengirim pesan kontak.
              </p>

              <h2 className="text-lg font-bold text-foreground mt-8">2. Kekayaan Intelektual</h2>
              <p>
                Seluruh konten di situs ini, termasuk namun tidak terbatas pada kode sumber, desain UI, logo, teks, dan gambar adalah milik sah pengembang (kecuali beberapa aset atau pustaka sumber terbuka yang tunduk pada lisensi masing-masing). Anda diizinkan untuk melihat dan berinteraksi dengan situs ini, namun dilarang keras menyalin, menjiplak, atau mendistribusikan ulang aset grafis dan identitas visual situs ini untuk kepentingan komersial tanpa izin tertulis.
              </p>

              <h2 className="text-lg font-bold text-foreground mt-8">3. Batasan Penggunaan</h2>
              <p>
                Dalam menggunakan situs ini, Anda setuju untuk tidak:
              </p>
              <ul className="list-disc list-inside space-y-1 pl-4">
                <li>Mengirim pesan spam, promosi yang tidak diminta, atau pesan kasar melalui Formulir Kontak.</li>
                <li>Mencoba merusak, mengganggu, atau meretas sistem keamanan situs web ini.</li>
                <li>Menggunakan bot atau skrip otomatis untuk membombardir formulir kiriman kontak.</li>
              </ul>

              <h2 className="text-lg font-bold text-foreground mt-8">4. Batasan Tanggung Jawab</h2>
              <p>
                Situs web ini disediakan "apa adanya" (*as is*) tanpa jaminan bahwa situs ini akan selalu dapat diakses tanpa gangguan atau bebas dari kesalahan teknis. Saya tidak bertanggung jawab atas kerugian tidak langsung yang timbul dari ketidakmampuan Anda mengakses atau menggunakan situs ini.
              </p>

              <h2 className="text-lg font-bold text-foreground mt-8">5. Hukum yang Berlaku</h2>
              <p>
                Ketentuan Layanan ini dan penggunaan Anda atas situs web ini diatur dan ditafsirkan sesuai dengan hukum Republik Indonesia. Setiap perselisihan yang timbul akan diselesaikan secara musyawarah mufakat.
              </p>

              <h2 className="text-lg font-bold text-foreground mt-8">6. Hubungi Saya</h2>
              <p>
                Jika Anda memiliki pertanyaan tentang Ketentuan Layanan ini, Anda dapat menghubungi saya melalui formulir kontak di beranda atau mengirimkan email ke <a href="mailto:" className="text-orange-500 hover:underline">musafadil03@gmail.com</a>.
              </p>
            </div>
          ) : (
            <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
              <p>
                By accessing and using this portfolio website, you are deemed to have read, understood, and agreed to be bound by these Terms of Service. If you do not agree to any part of these terms, please discontinue using this website.
              </p>

              <h2 className="text-lg font-bold text-foreground mt-8">1. Description of Service</h2>
              <p>
                This website is a personal portfolio of Muhammad Musyafa Fadila showcasing information regarding bio, tech stacks, projects, organization activities, and a form to submit inquiries.
              </p>

              <h2 className="text-lg font-bold text-foreground mt-8">2. Intellectual Property</h2>
              <p>
                All content on this site, including but not limited to source code, UI designs, logos, texts, and images is the legal property of the developer (except for certain open-source assets or libraries subject to their respective licenses). You are permitted to view and interact with this site, but copying, duplicating, or redistributing the graphic assets and visual identity of this site for commercial purposes is strictly prohibited without written consent.
              </p>

              <h2 className="text-lg font-bold text-foreground mt-8">3. Prohibited Conduct</h2>
              <p>
                In using this site, you agree not to:
              </p>
              <ul className="list-disc list-inside space-y-1 pl-4">
                <li>Send spam messages, unsolicited promotions, or abusive texts through the Contact Form.</li>
                <li>Attempt to disrupt, bypass, or compromise the security system of this website.</li>
                <li>Use bots or automated scripts to bombard the contact submission form.</li>
              </ul>

              <h2 className="text-lg font-bold text-foreground mt-8">4. Limitation of Liability</h2>
              <p>
                This website is provided on an "as is" and "as available" basis without any warranty that it will always be accessible uninterrupted or free from technical errors. I shall not be liable for any indirect damages arising from your inability to access or use this site.
              </p>

              <h2 className="text-lg font-bold text-foreground mt-8">5. Governing Law</h2>
              <p>
                These Terms of Service and your use of this website shall be governed by and construed in accordance with the laws of the Republic of Indonesia. Any disputes arising shall be resolved amicably through discussion.
              </p>

              <h2 className="text-lg font-bold text-foreground mt-8">6. Contact Me</h2>
              <p>
                If you have any questions regarding these Terms of Service, feel free to reach out via the contact form on the homepage or via email at <a href="mailto:" className="text-orange-500 hover:underline"></a>.
              </p>
            </div>
          )}
        </article>
      </div>
    </main>
  );
};

export default TermsOfService;
