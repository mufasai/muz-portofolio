import { Link } from 'react-router-dom';
import { ArrowLeft, Moon, Sun, Languages } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';

const PrivacyPolicy = () => {
  const { language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const isIndonesian = language === 'id';

  return (
    <main className="min-h-screen bg-[#050505] text-foreground py-12 px-6 relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-[120px] pointer-events-none" />

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
            {isIndonesian ? 'Kebijakan Privasi' : 'Privacy Policy'}
          </h1>
          <p className="text-xs text-muted-foreground mb-8">
            {isIndonesian ? 'Terakhir diperbarui: 28 Agustus 2026' : 'Last updated: August 28, 2026'}
          </p>

          {isIndonesian ? (
            <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
              <p>
                Selamat datang di situs portofolio saya. Privasi Anda sangat penting bagi saya. Kebijakan Privasi ini menjelaskan bagaimana saya mengelola, mengumpulkan, dan melindungi informasi Anda saat mengunjungi situs ini.
              </p>

              <h2 className="text-lg font-bold text-foreground mt-8">1. Informasi yang Kami Kumpulkan</h2>
              <p>
                Saya tidak menggunakan cookie pelacak pihak ketiga atau alat pengumpulan data otomatis untuk mengidentifikasi profil Anda secara pribadi. Namun, situs ini memiliki Formulir Kontak yang mengumpulkan informasi berikut secara sukarela dari Anda:
              </p>
              <ul className="list-disc list-inside space-y-1 pl-4">
                <li>Nama Anda</li>
                <li>Alamat email Anda</li>
                <li>Subjek pesan Anda</li>
                <li>Isi pesan yang Anda tulis</li>
              </ul>

              <h2 className="text-lg font-bold text-foreground mt-8">2. Penggunaan Informasi</h2>
              <p>
                Informasi yang Anda kirimkan melalui Formulir Kontak hanya digunakan untuk:
              </p>
              <ul className="list-disc list-inside space-y-1 pl-4">
                <li>Menanggapi pertanyaan, umpan balik, atau tawaran kerja sama dari Anda.</li>
                <li>Menghubungi Anda kembali terkait pesan yang Anda kirim.</li>
              </ul>
              <p>
                Informasi Anda dikirim secara aman menggunakan layanan pihak ketiga <strong>EmailJS</strong> dan tidak akan pernah dijual, disewakan, atau dibagikan kepada pihak lain untuk tujuan pemasaran.
              </p>

              <h2 className="text-lg font-bold text-foreground mt-8">3. Penyimpanan Data</h2>
              <p>
                Saya hanya menyimpan pesan kontak Anda selama diperlukan untuk tujuan komunikasi bisnis. Jika Anda ingin pesan Anda dihapus dari catatan korespondensi saya, silakan hubungi saya secara langsung untuk meminta penghapusan.
              </p>

              <h2 className="text-lg font-bold text-foreground mt-8">4. Keamanan Data</h2>
              <p>
                Keamanan data Anda adalah prioritas saya. Meskipun tidak ada transmisi data di internet yang 100% aman, saya menggunakan koneksi HTTPS terenkripsi (SSL) untuk melindungi data Anda saat dikirim dari browser Anda ke server formulir.
              </p>

              <h2 className="text-lg font-bold text-foreground mt-8">5. Tautan Pihak Ketiga</h2>
              <p>
                Situs ini mungkin berisi tautan ke situs eksternal (seperti GitHub, LinkedIn, atau artikel berita eksternal). Saya tidak bertanggung jawab atas kebijakan privasi atau konten dari situs pihak ketiga tersebut. Kami menyarankan Anda membaca kebijakan privasi mereka secara mandiri.
              </p>

              <h2 className="text-lg font-bold text-foreground mt-8">6. Hubungi Saya</h2>
              <p>
                Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini, silakan hubungi saya melalui formulir kontak di halaman beranda atau melalui email langsung ke <a href="mailto:musafadil03@gmail.com" className="text-orange-500 hover:underline">musafadil03@gmail.com</a>.
              </p>
            </div>
          ) : (
            <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
              <p>
                Welcome to my portfolio website. Your privacy is of utmost importance to me. This Privacy Policy explains how I manage, collect, and protect your information when you visit this website.
              </p>

              <h2 className="text-lg font-bold text-foreground mt-8">1. Information We Collect</h2>
              <p>
                I do not use third-party tracking cookies or automated profiling tools to identify you personally. However, this website features a Contact Form that collects the following information voluntarily provided by you:
              </p>
              <ul className="list-disc list-inside space-y-1 pl-4">
                <li>Your Name</li>
                <li>Your Email address</li>
                <li>The Subject of your message</li>
                <li>The Content of your message</li>
              </ul>

              <h2 className="text-lg font-bold text-foreground mt-8">2. How We Use Your Information</h2>
              <p>
                The information you submit through the Contact Form is strictly used to:
              </p>
              <ul className="list-disc list-inside space-y-1 pl-4">
                <li>Respond to your inquiries, business proposals, or feedback.</li>
                <li>Contact you regarding the message you sent.</li>
              </ul>
              <p>
                Your information is transmitted securely using the <strong>EmailJS</strong> third-party service and will never be sold, leased, or shared with anyone else for marketing purposes.
              </p>

              <h2 className="text-lg font-bold text-foreground mt-8">3. Data Retention</h2>
              <p>
                I only retain your contact messages for as long as necessary for business communication purposes. If you wish to have your messages deleted from my email records, please contact me directly to request deletion.
              </p>

              <h2 className="text-lg font-bold text-foreground mt-8">4. Data Security</h2>
              <p>
                The security of your data is my priority. While no internet transmission is 100% secure, this website is protected by an encrypted HTTPS (SSL) connection to secure your data in transit from your browser to the form server.
              </p>

              <h2 className="text-lg font-bold text-foreground mt-8">5. Third-Party Links</h2>
              <p>
                This website may contain links to external websites (such as GitHub, LinkedIn, or external news articles). I am not responsible for the privacy practices or contents of those third-party sites. I encourage you to read their respective privacy policies.
              </p>

              <h2 className="text-lg font-bold text-foreground mt-8">6. Contact Me</h2>
              <p>
                If you have any questions about this Privacy Policy, feel free to contact me using the contact form on the home page or via email at <a href="mailto:musafadil03@gmail.com" className="text-orange-500 hover:underline">musafadil03@gmail.com</a>.
              </p>
            </div>
          )}
        </article>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
