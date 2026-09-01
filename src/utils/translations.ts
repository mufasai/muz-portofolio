export type Language = 'id' | 'en';

export const translations = {
    id: {
        nav: {
            home: 'Beranda',
            projects: 'Proyek',
            skills: 'Keahlian',
            activities: 'Kegiatan',
            contact: 'Kontak',
            hireMe: 'Rekrut Saya',
        },
        hero: {
            available: 'Tersedia untuk freelance',
            title: 'Membangun Pengalaman',
            digital: 'Digital',
            description: 'Saya adalah seorang developer yang berfokus pada pembuatan web dan mobile yang interaktif serta modern.',
            viewWork: 'Lihat Karya Saya',
            experience: 'Tahun Pengalaman',
        },
        projects: {
            featured: 'Proyek',
            highlight: 'Pribadi',
            description: 'Beberapa project saya sendiri yang menunjukkan keahlian saya dalam membuat karya digital.',
            viewProject: 'Lihat Proyek',
            projectsLabel: 'Proyek',
            items: [
                {
                    title: "BahLink - UMKM Financial Tracking & AI Insight",
                    category: "Mobile Application",
                    image: "/bahlink_mockup.png",
                    description: "Aplikasi mobile pelacak keuangan & omzet UMKM dengan pencatatan transaksi cerdas, pantauan arus kas berbasis AI, dan evaluasi kesehatan finansial BahScore.",
                    tech: ["React Native", "Tailwind CSS", "TypeScript", "AI Analytics"],
                    link: "",
                    mockupType: "cover",
                    screens: ["/bahlink_expense.png", "/bahlink_dashboard.png", "/bahlink_score.png"],
                    screenTitles: ["Tren Pengeluaran", "Dashboard & Aksi Cepat", "BahScore & AI Insight"]
                },
                {
                    title: "Tudoo Task Tracker",
                    category: "Web Application",
                    image: "/tudoo_mockup.png",
                    description: "Platform cerdas untuk tracking proyek dan tugas secara modern, dilengkapi visualisasi Kanban board, kalender jadwal, dan kolaborasi tim real-time.",
                    tech: ["Next JS", "Node.js", "Tailwind", "Supabase"],
                    link: "https://task-tracker.muzzie.my.id/",
                    mockupType: "cover",
                    screenType: "web",
                    screens: ["/tudoo_dashboard.png", "/tudoo_kanban.png", "/tudoo_calendar.png"],
                    screenTitles: ["Dashboard Utama", "Kanban Task Board", "Kalender Jadwal"]
                },
                {
                    title: "MUZ AI - Intelligent Chat & Code Generator",
                    category: "Web Application",
                    image: "/ai.png",
                    description: "Platform AI-powered berbasis web yang menggabungkan chat interface dengan code generation capabilities.",
                    tech: ["ReactJS", "ExpressJS", "Tailwind"],
                    link: "https://ai.muzzie.my.id",
                    mockupType: "laptop"
                }
            ]
        },
        skills: {
            title: 'Keahlian &',
            highlight: 'Teknologi',
            description: 'Berikut adalah techstack yang saya gunakan.',
            completedProjects: 'Proyek Selesai',
        },
        workExperience: {
            title: 'Pengalaman',
            highlight: 'Kerja',
            description: 'Perjalanan karir saya dalam membangun solusi digital yang berdampak.',
            experiences: [
                {
                    company: 'PT. Smartelco Solution Teknologi',
                    position: 'Software Developer',
                    period: 'Des 2024 - Sekarang',
                    location: 'Kontrak',
                    description: [
                        'Mengembangkan dan memelihara fitur frontend dan backend untuk sistem internal perusahaan.',
                        'Membangun dan mengintegrasikan komponen frontend dengan REST API backend.',
                        'Mengembangkan layanan backend menggunakan Rust dan berkolaborasi dengan tim lintas fungsi.',
                    ],
                },
                {
                    company: 'PT. Cakra Radha Mustika',
                    position: 'Intern Mobile Dev dan Front End Web',
                    period: 'Apr 2022 - Sept 2022',
                    location: 'Jakarta, Indonesia',
                    description: [
                        'Slicing UI Mobile Chakra Reward',
                        'Slicing UI dan Integrasi API CRM',
                        'Melakukan optimasi performa website dan SEO.',
                    ],
                },
            ],
        },
        activities: {
            title: 'Kegiatan &',
            highlight: 'Dokumentasi',
            description: 'Kumpulan kegiatan, perlombaan, dan sertifikasi yang saya ikuti dalam perjalanan profesional saya.',
            readArticle: 'Baca Artikel',
            categories: {
                all: 'Semua',
                competition: 'Lomba',
                seminar: 'Seminar & Workshop',
                certification: 'Sertifikasi',
            },
            items: [
                {
                    title: 'Hackathon Bank Indonesia',
                    category: 'competition',
                    date: 'Agustus 2026',
                    description: 'Meraih Juara 2 dalam Mini Hackathon yang diselenggarakan oleh Bank Indonesia Purwokerto sebagai bagian dari Pekan QRIS Nasional 2026 dengan mengembangkan "Bahlink", sebuah aplikasi mobile untuk mempermudah pelacakan keuangan pelaku usaha UMKM.',
                    image: '/kejuaran_BI.JPG',
                    objectPosition: 'center 58%'
                },
                {
                    title: 'Indonesian Essay of Accounting Competition (INESCO)',
                    category: 'competition',
                    date: 'Maret 2025',
                    description: 'Meraih Juara 3 dalam kompetisi esai tingkat nasional INESCO UMP 2025. Mengembangkan ide aplikasi "Eco Nyong", platform digital inovatif pengolah limbah tekstil dan pakaian bekas berbasis kearifan lokal Banyumas.',
                    image: '/inesco.png',
                    objectPosition: 'center',
                    link: 'https://purwokerto.telkomuniversity.ac.id/mahasiswa-telkom-university-purwokerto-menjuarai-lomba-essay-dengan-aplikasi-atasi-limbah-textil/'
                },
                {
                    title: 'Pembicara di SMK Telkom Purwokerto',
                    category: 'seminar',
                    date: 'Juli 2025',
                    description: 'Menjadi pembicara mengenai lanskap industri IT, tren tech stack yang digunakan di dunia kerja, serta memberi arahan dan motivasi kepada para siswa untuk mengejar passion serta kata hati mereka.',
                    image: '/speaker_smk_telkom_clean.jpg',
                    video: '/40d3aaaf-8b52-46c0-8e4a-6007bffade68.MP4',
                    objectPosition: 'center 40%'
                },
                {
                    title: 'Microsoft Certified: Azure AI Fundamentals',
                    category: 'certification',
                    date: 'Maret 2026',
                    description: 'Sertifikasi resmi dari Microsoft yang memvalidasi pemahaman dasar tentang konsep kecerdasan buatan (AI) dan machine learning serta layanan Microsoft Azure.',
                    image: '/azure_ai_fundamental.png',
                    objectPosition: 'center 15%'
                }
            ]
        },
        contact: {
            title: 'Mari Bekerja',
            highlight: 'Sama',
            description: 'Punya ide proyek? Ayo diskusikan dan wujudkan ide hebat Anda.',
            emailLabel: 'Email Saya',
            callLabel: 'Hubungi Saya',
            locationLabel: 'Lokasi',
            nameLabel: 'NAMA',
            subjectLabel: 'SUBJEK',
            namePlaceholder: 'Nama Anda',
            emailPlaceholder: 'Email Anda',
            messagePlaceholder: 'Pesan Anda',
            sendButton: 'Kirim Pesan',
        },
        footer: {
            rights: 'Hak Cipta Dilindungi.',
        },
    },
    en: {
        nav: {
            home: 'Home',
            projects: 'Projects',
            skills: 'Skills',
            activities: 'Activities',
            contact: 'Contact',
            hireMe: 'Hire Me',
        },
        hero: {
            available: 'Available for freelance',
            title: 'Building Digital',
            digital: 'Experiences.',
            description: 'I am a developer focused on creating interactive and modern web and mobile applications.',
            viewWork: 'View My Work',
            experience: 'Years of Experience',
        },
        projects: {
            featured: 'Personal',
            highlight: 'Projects',
            description: 'Some of my own projects that demonstrate my skills in creating digital works.',
            viewProject: 'View Project',
            projectsLabel: 'Projects',
            items: [
                {
                    title: "BahLink - UMKM Financial Tracking & AI Insight",
                    category: "Mobile Application",
                    image: "/bahlink_mockup.png",
                    description: "Smart mobile financial tracking app for MSMEs featuring instant transaction logging, AI-driven cash flow insights, and BahScore financial health evaluation.",
                    tech: ["React Native", "Tailwind CSS", "TypeScript", "AI Analytics"],
                    link: "",
                    mockupType: "cover",
                    screens: ["/bahlink_expense.png", "/bahlink_dashboard.png", "/bahlink_score.png"],
                    screenTitles: ["Expense Trend", "Dashboard & Quick Actions", "BahScore & AI Insight"]
                },
                {
                    title: "Tudoo Task Tracker",
                    category: "Web Application",
                    image: "/tudoo_mockup.png",
                    description: "Modern web platform for task and project management, featuring visual Kanban boards, calendar scheduling, and real-time team collaboration.",
                    tech: ["Next JS", "Node.js", "Tailwind", "Supabase"],
                    link: "https://task-tracker.muzzie.my.id/",
                    mockupType: "cover",
                    screenType: "web",
                    screens: ["/tudoo_dashboard.png", "/tudoo_kanban.png", "/tudoo_calendar.png"],
                    screenTitles: ["Dashboard Overview", "Kanban Task Board", "Calendar Schedule"]
                },
                {
                    title: "MUZ AI - Intelligent Chat & Code Generator",
                    category: "Web Application",
                    image: "/ai.png",
                    description: "Web-based AI platform integrating an intuitive conversational chat interface with intelligent code generation capabilities.",
                    tech: ["ReactJS", "ExpressJS", "Tailwind"],
                    link: "https://ai.muzzie.my.id",
                    mockupType: "laptop"
                }
            ]
        },
        skills: {
            title: 'Skills &',
            highlight: 'Technologies',
            description: 'Here are the tech stacks I use.',
            completedProjects: 'Completed Projects',
        },
        workExperience: {
            title: 'Work',
            highlight: 'Experience',
            description: 'My career journey in building impactful digital solutions.',
            experiences: [
                {
                    company: 'PT. Smartelco Solution Teknologi',
                    position: 'Software Developer',
                    period: 'Dec 2024 - Present',
                    location: 'Contract',
                    description: [
                        'Developed and maintained frontend and backend features for internal company systems.',
                        'Built and integrated frontend components with backend REST APIs.',
                        'Developed backend services using Rust and collaborated with cross-functional teams.',
                    ],
                },
                {
                    company: 'PT. Cakra Radha Mustika',
                    position: 'Intern Mobile Dev and Front End Web',
                    period: 'Apr 2022 - Sept 2022',
                    location: 'Jakarta, Indonesia',
                    description: [
                        'UI Slicing for Chakra Reward Mobile App',
                        'UI Slicing and CRM API Integration',
                        'Website performance optimization and SEO.',
                    ],
                },
            ],
        },
        activities: {
            title: 'Activities &',
            highlight: 'Documentation',
            description: 'A collection of activities, competitions, and certifications I have participated in during my professional journey.',
            readArticle: 'Read Article',
            categories: {
                all: 'All',
                competition: 'Competition',
                seminar: 'Seminar & Workshop',
                certification: 'Certification',
            },
            items: [
                {
                    title: 'Hackathon Bank Indonesia',
                    category: 'competition',
                    date: 'August 2026',
                    description: 'Achieved 2nd Place in the Mini Hackathon organized by Bank Indonesia Purwokerto as part of the National QRIS Week (Pekan QRIS Nasional) 2026 by developing "Bahlink", a mobile application designed for financial tracking of MSME businesses.',
                    image: '/kejuaran_BI.JPG',
                    objectPosition: 'center 58%'
                },
                {
                    title: 'Indonesian Essay of Accounting Competition (INESCO)',
                    category: 'competition',
                    date: 'March 2025',
                    description: 'Achieved 3rd Place in the national essay competition INESCO UMP 2025. Developed the "Eco Nyong" app concept, a digital platform for textile and fashion waste management merging environmental care and Banyumas local wisdom.',
                    image: '/inesco.png',
                    objectPosition: 'center',
                    link: 'https://purwokerto.telkomuniversity.ac.id/mahasiswa-telkom-university-purwokerto-menjuarai-lomba-essay-dengan-aplikasi-atasi-limbah-textil/'
                },
                {
                    title: 'Speaker at SMK Telkom Purwokerto',
                    category: 'seminar',
                    date: 'July 2025',
                    description: 'Guest speaker discussing the IT industry landscape, relevant tech stacks used in the professional world, and inspiring students to pursue their passion and true calling in tech.',
                    image: '/speaker_smk_telkom_clean.jpg',
                    video: '/40d3aaaf-8b52-46c0-8e4a-6007bffade68.MP4',
                    objectPosition: 'center 40%'
                },
                {
                    title: 'Microsoft Certified: Azure AI Fundamentals',
                    category: 'certification',
                    date: 'March 2026',
                    description: 'Official Microsoft certification validating foundational knowledge of machine learning, AI concepts, and related Microsoft Azure services.',
                    image: '/azure_ai_fundamental.png',
                    objectPosition: 'center 15%'
                }
            ]
        },
        contact: {
            title: 'Let\'s Work',
            highlight: 'Together',
            description: 'Have a project idea? Let\'s discuss and bring your great ideas to life.',
            emailLabel: 'Email Me',
            callLabel: 'Call Me',
            locationLabel: 'Location',
            nameLabel: 'NAME',
            subjectLabel: 'SUBJECT',
            namePlaceholder: 'Your Name',
            emailPlaceholder: 'Your Email',
            messagePlaceholder: 'Your Message',
            sendButton: 'Send Message',
        },
        footer: {
            rights: 'All Rights Reserved.',
        },
    },
};
