export interface Student {
    id: number;
    name: string;
    age: number;
    momName: string;
    isSNI: boolean;
}

export const students: Student[] = [
    {
        id: 1,
        name: 'Horváth Ádám',
        age: 14,
        momName: 'Fehér Zsuzsanna',
        isSNI: true
    },
    {
        id: 2,
        name: 'Kocsubur Géza',
        age: 16,
        momName: 'Barokk Lilla',
        isSNI: false
    },
    {
        id: 3,
        name: 'Kiss Andrea',
        age: 14,
        momName: 'Kiss Andrea',
        isSNI: true
    },
    {
        id: 4,
        name: 'Fazekas Katalin',
        age: 14,
        momName: 'Fazekas Mária',
        isSNI: false
    },
    {
        id: 5,
        name: 'Kovács Máté',
        age: 15,
        momName: 'Tóth Enikő',
        isSNI: false
    },
];