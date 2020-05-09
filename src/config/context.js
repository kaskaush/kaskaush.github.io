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
    footer: {
        copyRight: {
            text: 'Copyright © 2020 Kaushik Kasibhatla. All rights reserved.',
        },
    },
};

export default context;
