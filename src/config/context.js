const context = {
    header: {
        logo: {
            titleLabel: 'Kaushik',
            subLabel: 'Kasibhatla.',
            ariaLabel: 'home',
        },
        navMenu: [
            {
                label: 'Work',
                ariaLabel: 'Work',
                url: '/work',
            },
            {
                label: 'Play',
                ariaLabel: 'Play',
                url: '/play',
            },
        ],
        socialLinks: [
            {
                type: 'email',
                url: 'mailto:kaushik.kasibhatla@gmail.com',
            },
            {
                type: 'linkedIn',
                url: 'https://in.linkedin.com/in/kaushik-kasibhatla',
            },
            {
                type: 'github',
                url: 'https://github.com/kaskaush/',
            },
        ],
    },
    hero: {
        title: 'Hello World!',
        description:
            "I'm a full-stack web developer focused on designing and developing efficient, scalabe and performant applications.",
    },
    about: {
        title: 'About',
        description:
            'Self directed individual with proven ability to deliver high quality product on time under minimal supervision. Well experienced in development of applications with end-to-end responsibility. Very committed and a capable programmer. Proven expertise in ramping up in new technologies. Able to apply design concepts and efficiently use data structures to solve the problem at hand.',
    },
    experience: {
        title: 'Experience',
        data: [
            {
                company: 'byjus',
                image: {
                    src: '/logos/byjus.svg',
                    alt: 'Byjus',
                },
                totalExp: '1 year',
                roles: [
                    {
                        role: 'Associate Software Developer',
                        period: 'Jan 2015 - Dec 2015',
                    },
                ],
            },
            {
                company: 'infosys',
                image: {
                    src: '/logos/infosys.svg',
                    alt: 'Infosys',
                },
                totalExp: '2 years 8 months',
                roles: [
                    {
                        role: 'Senior Systems Engineer',
                        period: 'Jan 2018 - Jul 2018',
                    },
                    {
                        role: 'Systems Engineer',
                        period: 'Dec 2015 - Dec 2017',
                    },
                ],
            },
            {
                company: 'publicis sapient',
                image: {
                    src: '/logos/ps.svg',
                    alt: 'Publicis Sapient',
                },
                totalExp: '2 years',
                roles: [
                    {
                        role: 'Senior Associate',
                        period: 'Jul 2018 - Present',
                    },
                ],
            },
        ],
    },
    footer: {
        copyRight: {
            text: 'Copyright © 2020 Kaushik Kasibhatla. All rights reserved.',
        },
    },
};

export default context;
