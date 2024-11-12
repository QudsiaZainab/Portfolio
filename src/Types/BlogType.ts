export interface Blog {
    id: number;
    title: string;
    description: string;
    image: string;
    category: 'web' | 'android' | 'all'; 
}