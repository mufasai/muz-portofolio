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
            highlight: 'Unggulan',
            description: 'Beberapa project saya sendiri yang menunjukkan keahlian saya dalam membuat karya digital.',
            viewProject: 'Lihat Proyek',
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
            categories: {
                all: 'Semua',
                competition: 'Lomba',
                seminar: 'Seminar & Workshop',
                certification: 'Sertifikasi',
            },
            items: [
                {
                    title: 'Juara 1 Web Development Competition',
                    category: 'competition',
                    date: 'Okt 2024',
                    description: 'Memenangkan juara pertama dalam kategori Best Innovation dengan membangun platform kolaboratif berbasis AI.',
                    image: '/activity_lomba.png'
                },
                {
                    title: 'Narasumber di Tech Forum 2024',
                    category: 'seminar',
                    date: 'Mar 2025',
                    description: 'Menjadi pembicara dan membagikan materi mengenai praktik terbaik pengembangan frontend menggunakan modern React dan Tailwind.',
                    image: '/activity_seminar.png'
                },
                {
                    title: 'Professional Developer Certification',
                    category: 'certification',
                    date: 'Mei 2025',
                    description: 'Sertifikasi resmi untuk keahlian rekayasa perangkat lunak tingkat lanjut.',
                    image: '/activity_sertifikasi.png'
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
            featured: 'Featured',
            highlight: 'Projects',
            description: 'Some of my own projects that demonstrate my skills in creating digital works.',
            viewProject: 'View Project',
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
            categories: {
                all: 'All',
                competition: 'Competition',
                seminar: 'Seminar & Workshop',
                certification: 'Certification',
            },
            items: [
                {
                    title: '1st Place Web Development Competition',
                    category: 'competition',
                    date: 'Oct 2024',
                    description: 'Won first place in the Best Innovation category by building an AI-powered collaborative platform.',
                    image: '/activity_lomba.png'
                },
                {
                    title: 'Speaker at Tech Forum 2024',
                    category: 'seminar',
                    date: 'Mar 2025',
                    description: 'Spoke and shared materials on frontend development best practices using modern React and Tailwind.',
                    image: '/activity_seminar.png'
                },
                {
                    title: 'Professional Developer Certification',
                    category: 'certification',
                    date: 'May 2025',
                    description: 'Official certification verifying advanced software engineering capabilities.',
                    image: '/activity_sertifikasi.png'
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
