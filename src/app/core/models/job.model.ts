export interface Job {
    id: number;
    title: string;
    company: string;
    location: string;
    salary: string;
    category: string;
    jobType: 'Full time' | 'Part time' | 'Remote';
    description: string;
    requirements: string[];
    postedAt: string;
}