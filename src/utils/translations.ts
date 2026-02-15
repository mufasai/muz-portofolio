export type Language = 'id' | 'en';

export const translations = {
    id: {
        nav: {
            home: 'Beranda',
            projects: 'Proyek',
            skills: 'Keahlian',
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
