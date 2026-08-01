import type { Product } from "../types";
import bandeng5Img from '../assets/images/bandeng-presto-5.png';
import bandengImg from '../assets/images/bandeng-presto.png';
import pepesImg from '../assets/images/pepes-bandeng.png';
import ayamUngkepImg from '../assets/images/Ayam-ungkep.png';

export const PRODUCTS: Product[] = [
    {
        id: '1',
        name: 'Bandeng Presto (Kemasan 1kg)',
        category: 'bandeng-presto',
        price: 133000,
        description: 'Bandeng duri lunak dengan bumbu rempah meresap. Kemasan vacuum higienis isi 5-6 ekor, komplit dengan sambal khas. Penyajian: digoreng tepung/telur atau dikukus.',
        image: bandeng5Img,
        unit: '1 kg (isi 5-6 ekor)',
        isBestSeller: true,
        paxelUrl: "https://buyer.paxelmarket.co/product/PRD1JJ92U4FL/PRD1JJ92U4FL"
    },
    {
        id: '2',
        name: 'Bandeng Presto (Isi 2)',
        category: 'bandeng-presto',
        price: 58000,
        description: 'Bandeng duri lunak lezat isi 2 ekor kemasan vacuum higienis. Tulang & duri empuk dari kepala sampai ekor, aman dikonsumsi anak-anak.',
        image: bandengImg,
        unit: 'Kemasan Isi 2',
        isBestSeller: true,
        paxelUrl: "https://buyer.paxelmarket.co/product/PRD1JJ92UBZL/PRD1JJ92UBZL"
    },
    {
        id: '3',
        name: 'Pepes Bandeng Presto',
        category: 'pepes-bandeng-presto',
        price: 38000,
        description: 'Pepes bandeng presto bumbu melimpah aromatik dibungkus daun pisang segar. Cita rasa manis gurih khas dengan bumbu meresap sampai ke dalam.',
        image: pepesImg,
        unit: 'Kemasan Isi 1',
        isBestSeller: false,
        paxelUrl: "https://buyer.paxelmarket.co/product/PRD1JJ92UA3I/PRD1JJ92UA3I"
    },
    {
        id: '4',
        name: 'Ayam Ungkep Pejantan',
        category: 'ayam-ungkep',
        price: 70000,
        description: '1 ekor ayam pejantan utuh yang diungkep dengan bumbu rempah pilihan melimpah. Daging empuk gurih, siap digoreng atau dikukus kapan saja.',
        image: ayamUngkepImg,
        unit: '1 Ekor Utuh',
        isBestSeller: true,
        paxelUrl: "https://buyer.paxelmarket.co/product/PRD1JJ92UU31/PRD1JJ92UU31"
    },
];