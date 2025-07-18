type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Daily Payroll Trivia',
    description:
      'Daily payroll trivia web app built with React, Next.js, and AI',
    link: 'https://triviaaa.dev',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'project1',
  },
  {
    name: 'diabase.app',
    description: 'Boulder problem identification game',
    link: 'https://diabase.app/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project2',
  },

]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Shaw Inc.',
    title: 'Payroll Specialist',
    start: '2024',
    end: 'Present',
    link: 'https://google.com',
    id: 'work1',
  },
  {
    company: 'Shaw Inc.',
    title: 'Payroll Coordinator',
    start: '2024',
    end: '2024',
    link: 'https://google.com',
    id: 'work2',
  },
  {
    company: 'Pennsylvania Department of Revenue',
    title: 'Trust Valuation Specialist',
    start: '2022',
    end: '2024',
    link: 'https://google.com',
    id: 'work3',
  },

    {
    company: 'Pennsylvania Department of Revenue',
    title: 'Tax Account Collections Technician',
    start: '2020',
    end: '2022',
    link: 'https://google.com',
    id: 'work4',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring Payroll Anomalies',
    description: 'Developing tools with AI to identify anomalies',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'Why I left my job to start my own company',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
  {
    title: 'What I learned from my first year of freelancing',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/chrisbell709',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/thisischrisbell',
  },
]

export const EMAIL = 'chrisbell709@gmail.com'
