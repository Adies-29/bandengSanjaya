export type Category = 'semua' | 'bandeng-presto' | 'ayam-ungkep' | 'otak-otak-bandeng' | 'pepes-bandeng-presto'

export interface Product {
    id: string;
    name: string;
    nameEn?: string;
    category: Category;
    price: number;
    description: string;
    descriptionEn?: string;
    image: string;
    isBestSeller?: boolean;
    unit: string;
    unitEn?: string;
    shopeeUrl?: string;
    tokopediaUrl?: string;
    paxelUrl?: string;
}

export interface Testimoni {
    id: string;
    name?: string;
    comment: string;
    rating: string;
}