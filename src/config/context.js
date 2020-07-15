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
    skills: {
        title: 'Skills',
        frontEnd: [
            {
                name: 'HTML5',
                scale: '95%',
            },
            {
                name: 'CSS3',
                scale: '95%',
            },
            {
                name: 'JavaScript',
                scale: '85%',
            },
            {
                name: 'React',
                scale: '80%',
            },
        ],
        backEnd: [
            {
                name: 'Java',
                scale: '65%',
            },
            {
                name: 'Springboot',
                scale: '60%',
            },
            {
                name: 'Python',
                scale: '60%',
            },
        ],
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
    projects: [
        {
            iconName: 'users',
            title: "Byju's Class Scheduler",
            description:
                'An application to manage student information, schedules and marks across the organization. Developed APIs to retrieve student data and designed UI/UX across the application.',
            technologies: ['ASP.NET Webforms', 'JavaScript', 'Bootstrap'],
        },
        {
            iconName: 'poll',
            title: "Byju's DMP",
            description:
                'Designed several landing pages for campaigns under Digital Marketing Platform that gained a revenue boost of 30% and inbound traffic.',
            technologies: ['JavaScript', 'HTML5', 'CSS3', 'Bootstrap'],
        },
        {
            iconName: 'people-arrows',
            title: 'Talent Mapping Utility',
            description:
                'A utility for Talent Managers across the organization to identify and map required talent for a project. Users can filter talent based on tech stack and help Project Managers finding the right fit. Developed APIs to retrieve talent data and designed UI/UX across the application.',
            technologies: ['Java', 'Springboot', 'AngularJS'],
        },
        {
            iconName: 'database',
            title: 'DB Cluster Monitor',
            description:
                'A web application to monitor real time stats of a database cluster with nodes ranging from 3-25 nodes using informative graphs. Worked on micro-service architecture and built REST APIs that retrieve vital information from each node in a cluster. Also worked on UI/UX across the application.',
            technologies: ['Java', 'Springboot', 'Shell', 'Python', 'AngularJS'],
        },
        {
            iconName: 'project-diagram',
            title: 'DB Cluster Configurator',
            description:
                'An application to generate and deploy a database cluster for the given nodes. Engineers can create/retrieve/update/delete nodes in a cluster and deploy it immediately on to a network. This application can also be used to visualize a cluster and load balance it. Worked on core data model, load balancing algorithm and visualization.',
            technologies: ['Java', 'Swing'],
        },
        {
            iconName: 'server',
            title: 'Cluster Deployment Orchestrator',
            description:
                'A POC to deploy a database cluster on given nodes and perform a compartive analysis on Ansible and Puppet.',
            technologies: ['Python', 'Ansible', 'Puppet'],
        },
    ],
    footer: {
        copyRight: {
            text: 'Copyright © 2020 Kaushik Kasibhatla. All rights reserved.',
        },
    },
};

export default context;
