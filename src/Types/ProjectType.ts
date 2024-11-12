export interface Project {
    id: number;
    title: string;
    description: string;
    projectLink: string;
    sourceCodeLink: string;
    image: string;
    category: 'web' | 'android' | 'all'; 
}