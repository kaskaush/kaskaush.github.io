const context = {
    header: {
        logo: {
            titleLabel: 'Kaushik',
            subLabel: 'Kasibhatla.',
            ariaLabel: 'home',
        },
        navMenu: [
            {
                label: 'About',
                ariaLabel: 'about',
                url: 'about',
            },
            {
                label: 'Skills',
                ariaLabel: 'skills',
                url: 'skills',
            },
            {
                label: 'Experience',
                ariaLabel: 'experience',
                url: 'experience',
            },
            {
                label: 'Work',
                ariaLabel: 'work',
                url: 'work',
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
            {
                type: 'instagram',
                url: 'https://www.instagram.com/kaushikkasibhatla/',
            },
        ],
    },
    hero: {
        careerStart: '27/01/2015',
        title: 'Hello there!',
        description:
            "<p>I'm Kaushik Kasibhatla, a full-stack web developer based out of Bengaluru, India with {num_years} years of experience, focused on designing and developing efficient, scalabe and performant applications. Currently, I'm building tools that monitor the entire network infrastructure at <span style='color:#e94560'>IBM Cloud</span>.</p><br/><p style='font-weight:600;color:#e94560'>#programmer #gamer #explorer #foodie</p>",
    },
    skills: {
        title: 'Tech I Know',
        list: [
            {
                name: 'javascript',
            },
            {
                name: 'java',
            },
            {
                name: 'go',
            },
            {
                name: 'react',
            },
            {
                name: 'nodejs',
            },
            {
                name: 'spring',
            },
            {
                name: 'docker',
            },
            {
                name: 'kubernetes',
            },
        ],
    },
    experience: {
        title: "Where I've worked",
        data: [
            {
                company: 'byjus',
                image: {
                    src: 'logos/byjus.svg',
                    alt: 'Byjus',
                },
                start: '27/01/2015',
                end: '15/12/2015',
            },
            {
                company: 'infosys',
                image: {
                    src: 'logos/infosys.svg',
                    alt: 'Infosys',
                },
                start: '21/12/2015',
                end: '16/07/2018',
            },
            {
                company: 'publicis sapient',
                image: {
                    src: 'logos/ps.svg',
                    alt: 'Publicis Sapient',
                },
                start: '18/07/2018',
                end: '15/01/2021',
            },
            {
                company: 'oracle',
                image: {
                    src: 'logos/oracle.svg',
                    alt: 'Oracle',
                },
                start: '18/01/2021',
                end: '19/06/2022',
            },
            {
                company: 'ibm_cloud',
                image: {
                    src: 'logos/ibm_cloud.svg',
                    alt: 'IBM Cloud',
                },
                start: '23/06/2022',
                end: '',
            },
        ],
    },
    projects: [
        {
            iconName: 'network-wired',
            title: 'Oculus Network Monitoring',
            organization: 'IBM Cloud',
            description:
                'Ingest, process and analyze huge volumes of logs and metrics for 80K+ devices across 60 datacenters in the world. Worked on an alerting platform for network engineers that sift through millions of logs and generate meaningful alerts.',
            technologies: ['Golang', 'Telegraf', 'InfluxDB', 'Kapacitor', 'Python', 'IBM Cloud', 'Nomad', 'Docker'],
        },
        {
            iconName: 'chart-line',
            title: 'Apprise Analytics',
            organization: 'Oracle',
            description:
                'Developed an analytics instrumentation application that replaces the capabilities of Google Analytics/Kissmetrics in current products. Developed script that can track page visits, user details, session details automatically on the client.',
            technologies: ['Java', 'Springboot', 'ReactJS', 'Elastic', 'Oracle Cloud', 'Docker', 'Kubernetes'],
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
            iconName: 'desktop',
            title: 'MGM Admin UI',
            organization: 'MGM Resorts International',
            description:
                'Worked on an inventory management portal that is used to configure / manage rooms, restaurants, shows inventory. Used micro-frontends to communicate with various modules within the application.',
            technologies: ['ReactJS', 'NodeJS', 'Micro-Frontend', 'Adobe AEM'],
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
            iconName: 'hotel',
            title: 'Tech Stack Migration',
            organization: 'MGM Resorts International',
            description:
                'Handle tech stack migration from AngularJS to React for MGM Resorts International - official booking site for resorts/hotels/restaurants/shows.',
            technologies: ['AngularJS', 'ReactJS', 'NodeJS', 'Adobe AEM'],
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
            iconName: 'server',
            organization: 'Huawei',
            title: 'Cluster Deployment Orchestrator',
            description:
                'A POC to deploy a database cluster on given nodes and perform a compartive analysis on Ansible and Puppet.',
            technologies: ['Python', 'Ansible', 'Puppet'],
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
            iconName: 'database',
            title: 'DB Cluster Monitor',
            organization: 'Huawei',
            description:
                'A web application to monitor real time stats of a database cluster with nodes ranging from 3-25 nodes using informative graphs. Worked on micro-service architecture and built REST APIs that retrieve vital information from each node in a cluster. Also worked on UI/UX across the application.',
            technologies: ['Java', 'Springboot', 'Shell', 'Python', 'AngularJS'],
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
            iconName: 'poll',
            title: 'Digital Marketing Platform',
            organization: "Byju's",
            description:
                'Designed several landing pages for campaigns under Digital Marketing Platform that gained a revenue boost of 30% and inbound traffic.',
            technologies: ['JavaScript', 'HTML5', 'CSS3', 'Bootstrap'],
        },

        {
            iconName: 'users',
            title: 'Class Scheduler',
            organization: "Byju's",
            description:
                'An application to manage student information, schedules and marks across the organization. Developed APIs to retrieve student data and worked on UI/UX across the application.',
            technologies: ['ASP.NET Webforms', 'JavaScript', 'Bootstrap'],
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
            text: 'Copyright © 2024 Kaushik Kasibhatla. All rights reserved.',
        },
    },
};

export default context;
