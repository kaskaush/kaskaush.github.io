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
                name: 'NodeJS',
                scale: '70%',
            },
            {
                name: 'Docker',
                scale: '70%',
            },
            {
                name: 'Kubernetes',
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
                    src: 'logos/byjus.svg',
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
                    src: 'logos/infosys.svg',
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
                    src: 'logos/ps.svg',
                    alt: 'Publicis Sapient',
                },
                totalExp: '2 years 5 months',
                roles: [
                    {
                        role: 'Senior Associate',
                        period: 'Jul 2018 - Jan 2021',
                    },
                ],
            },
            {
                company: 'oracle',
                image: {
                    src: 'logos/oracle.svg',
                    alt: 'Oracle',
                },
                totalExp: '9 months',
                roles: [
                    {
                        role: 'Senior Software Engineer',
                        period: 'Jan 2021 - Present',
                    },
                ],
            },
        ],
    },
    projects: [
        {
            iconName: 'users',
            title: "Byju's Class Scheduler",
            organization: "Byju's",
            description:
                'An application to manage student information, schedules and marks across the organization. Developed APIs to retrieve student data and designed UI/UX across the application.',
            technologies: ['ASP.NET Webforms', 'JavaScript', 'Bootstrap'],
        },
        {
            iconName: 'poll',
            title: "Byju's DMP",
            organization: "Byju's",
            description:
                'Designed several landing pages for campaigns under Digital Marketing Platform that gained a revenue boost of 30% and inbound traffic.',
            technologies: ['JavaScript', 'HTML5', 'CSS3', 'Bootstrap'],
        },
        {
            iconName: 'people-arrows',
            title: 'Talent Mapping Utility',
            organization: 'Infosys',
            description:
                'A utility for Talent Managers across the organization to identify and map required talent for a project. Users can filter talent based on tech stack and help Project Managers finding the right fit. Developed APIs to retrieve talent data and designed UI/UX across the application.',
            technologies: ['Java', 'Springboot', 'AngularJS'],
        },
        {
            iconName: 'database',
            title: 'DB Cluster Monitor',
            organization: 'Huawei',
            description:
                'A web application to monitor real time stats of a database cluster with nodes ranging from 3-25 nodes using informative graphs. Worked on micro-service architecture and built REST APIs that retrieve vital information from each node in a cluster. Also worked on UI/UX across the application.',
            technologies: ['Java', 'Springboot', 'Shell', 'Python', 'AngularJS'],
        },
        {
            iconName: 'project-diagram',
            title: 'DB Cluster Configurator',
            organization: 'Huawei',
            description:
                'An application to generate and deploy a database cluster for the given nodes. Engineers can create/retrieve/update/delete nodes in a cluster and deploy it immediately on to a network. This application can also be used to visualize a cluster and load balance it. Worked on core data model, load balancing algorithm and visualization.',
            technologies: ['Java', 'Swing'],
        },
        {
            iconName: 'server',
            organization: 'Huawei',
            title: 'Cluster Deployment Orchestrator',
            description:
                'A POC to deploy a database cluster on given nodes and perform a compartive analysis on Ansible and Puppet.',
            technologies: ['Python', 'Ansible', 'Puppet'],
        },
        {
            iconName: 'capsules',
            organization: 'Merck',
            title: 'Drug Manufacturing IoT',
            description:
                'Designed and built an admin portal to connect to and monitor drug manufacturing machines through IoT. Users can manage the machines remotely from anywhere in the world.',
            technologies: ['Java', 'Springboot', 'ReactJS'],
        },
        {
            iconName: 'hotel',
            title: 'Tech Stack Migration',
            organization: 'MGM Resorts International',
            description:
                'Handle tech stack migration from AngularJS to React for MGM Resorts International - official booking site for resorts/hotels/restaurants/shows.',
            technologies: ['AngularJS', 'ReactJS', 'NodeJS', 'Adobe AEM'],
        },
        {
            iconName: 'water',
            title: 'MGM Cabanas',
            organization: 'MGM Resorts International',
            description:
                'Design and build front-end for MGM Cabanas booking site from scratch that generated a revenue increase by 22%. Worked on webpack and lighthouse optimizations for the same.',
            technologies: ['ReactJS', 'NodeJS', 'Adobe AEM'],
        },
        {
            iconName: 'desktop',
            title: 'MGM Admin UI',
            organization: 'MGM Resorts International',
            description:
                'Worked on an inventory management portal that is used to configure / manage rooms, restaurants, shows inventory. Used micro-frontends to communicate with various modules within the application.',
            technologies: ['ReactJS', 'NodeJS', 'Micro-Frontend', 'Adobe AEM'],
        },
        {
            iconName: 'video',
            title: 'Video Keyword Extractor',
            organization: 'Oracle',
            description:
                'Worked on tech stack migration from Vanilla JS to NextJS of a keyword extraction application that visualizes the keywords from a video as a heatmap.',
            technologies: ['ReactJS', 'NodeJS', 'NextJS'],
        },
        {
            iconName: 'microchip',
            title: 'OA Provisioner',
            organization: 'Oracle',
            description:
                'Designed and developed a resource provisioning application from scratch that acts as a central service for product users to manage product provisioning and client requests.',
            technologies: ['Java', 'Springboot', 'ReactJS', 'NodeJS', 'Docker', 'Kubernetes'],
        },
        {
            iconName: 'atom',
            title: 'Rickcyclopedia',
            organization: 'Open Source',
            description: 'Designed and developed a character database for Rick and Morty using the Rick and Morty API.',
            technologies: ['ReactJS', 'Github Pages'],
        },
        {
            iconName: 'cubes',
            title: 'FE Essential Utils',
            organization: 'Open Source',
            description:
                'A small utility package that contains necessary tools to build front-end applications. Contains tools ranging from DOM Manipulation to Cookie management.',
            technologies: ['JavaScript', 'NPM'],
        },
    ],
    footer: {
        copyRight: {
            text: 'Copyright © 2020 Kaushik Kasibhatla. All rights reserved.',
        },
    },
};

export default context;
