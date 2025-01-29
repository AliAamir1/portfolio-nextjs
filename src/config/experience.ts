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
    ocupation: 'Senior Software Engineer',
    company: 'Dopetech',
    url: 'https://www.dopetech.com/',
    location: 'United States · Remote',
    startDate: '2024-08-05',
    description: `
    At DopeTech, I contribute to the full-stack development of Tow123,
    a live market application serving thousands of users. 
    My work involves building and optimizing features using React, 
    React Native, Node.js (Express), MongoDB, and real-time communication with Socket.IO and Redis. 
    I collaborate closely with the Project Manager to define sprints, architect scalable solutions, 
    and ensure timely delivery for investor presentations. 
    The platform continuously evolves with new functionalities, 
    leveraging TypeScript and JavaScript to maintain efficiency and competitiveness.`

  },
  {
    ocupation: 'Software Engineer',
    company: 'Appremon',
    url: 'https://appremon.com/',
    location: 'Wilmington, Delaware, United States · Remote',
    startDate: '2024-05-10',
    endDate: '2024-11-20',
    description: `Architected and developed a scalable React application to manage organizations, security sensors, and network configurations.
-Built a super admin panel with a dashboard for app management and real-time analytics.
-Developed and automated CI/CD pipelines for efficient deployment on AWS.`,
  },
  {
    ocupation: 'Full Stack Developer',
    company: 'Megaverse Technologies',
    url: 'https://megaverse.pk/',
    location: 'Lahore, Pakistan',
    startDate: '2023-05-02',
    endDate: '2024-05-18',
    description: `At Megaverse, I worked on diverse projects, contributing to the development of scalable and user-centric applications across various domains. From building a B2B SaaS platform with React to developing a comprehensive fitness application in React Native and integrating AI-driven recommendations in a travel guide, my role spanned frontend and backend technologies. I played a key role in implementing core functionalities, refining features based on stakeholder feedback, and ensuring seamless user experiences. Working across multiple projects enhanced my ability to adapt to different requirements, optimize performance, and deliver high-quality solutions`,
  },
] satisfies JobExperience[]

