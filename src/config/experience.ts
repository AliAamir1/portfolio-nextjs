export interface JobExperience {
  ocupation: string
  company: string
  asLink?: boolean
  location: string
  url?: string
  startDate: string
  endDate?: string | null
  description: string
}

export const JOB_EXPERIENCE = [
  {
    ocupation: 'Software Engineer',
    company: 'Appremon',
    url: 'https://appremon.com/',
    location: 'Wilmington, Delaware, United States · Remote',
    startDate: '2024-05-20',
    description: `Architected and developed a scalable React application to manage organizations, security sensors, and network configurations.
-Built a super admin panel with a dashboard for app management and real-time analytics.
-Developed and automated CI/CD pipelines for efficient deployment on AWS.`,
  },
  {
    ocupation: 'Full Stack Developer',
    company: 'Megaverse Technologiesr',
    url: 'https://megaverse.pk/',
    location: 'Lahore, Pakistan',
    startDate: '2023-09-20',
    endDate: '2024-05-20',
    description: `-Contributed to Project ALVANDA (React Application), emphasizing modular design, Redux, and Context API for state management.
-Demonstrated commitment to code quality, seamless API integration, UI responsiveness, and collaborative problem-solving.
-Frontend deployed on AWS Amplify; backend hosted on an EC2 instance with Elastic IP Address.
-Developed a React-Native application, Pure-Yoga, utilizing Redux and Context API for state management. Implemented multilingual support, themes, and maintained clean, reusable components.
-Explored Libraries like GoJS, React Flow, D3JS to render dynamic organizational trees and procedural graphs employed in ALVANDA.`,
  },
  {
    ocupation: 'Associate Software Engineer',
    company: 'Devsinc',
    url: 'https://www.devsinc.com/',
    location: 'Lahore, Pakistan',
    startDate: '2023-05-01',
    endDate: '2024-09-20',
    description: `-Engineered a modular and scalable component architecture for Bugzilla, a Node.js + ReactJS Bug Reporting application.
-Implemented scalable subscription models with refined design patterns.
-Deployed and hosted web applications seamlessly using Netlify, Heroku, and GoDaddy.
-Expertly translated intricate Figma blueprints into dynamic and user-centric interfaces.`,
  },
] satisfies JobExperience[]

