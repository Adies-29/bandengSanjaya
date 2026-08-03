import type { Product } from "../types";
import bandeng5Img from '../assets/images/bandeng-presto-5.webp';
import bandengImg from '../assets/images/bandeng-presto.webp';
import pepesImg from '../assets/images/pepes-bandeng.webp';
import ayamUngkepImg from '../assets/images/Ayam-ungkep.webp';

export const PRODUCTS: Product[] = [
    {
        id: '1',
        name: 'Bandeng Presto (Kemasan 1kg)',
        nameEn: 'Presto Milkfish (1kg Pack)',
        category: 'bandeng-presto',
        price: 133000,
        description: 'Bandeng duri lunak dengan bumbu rempah meresap. Kemasan vacuum higienis isi 5-6 ekor, komplit dengan sambal khas. Penyajian: digoreng tepung/telur atau dikukus.',
        descriptionEn: 'Soft-bone pressure-cooked milkfish infused with spices. Hygienic vacuum pack with 5-6 fish, complete with chili sauce. Serve fried or steamed.',
        image: bandeng5Img,
        unit: '1 kg (isi 5-6 ekor)',
        unitEn: '1 kg (5-6 pcs)',
        isBestSeller: true,
        paxelUrl: "https://buyer.paxelmarket.co/product/PRD1JJ92U4FL/PRD1JJ92U4FL"
    },
    {
        id: '2',
        name: 'Bandeng Presto (Isi 2)',
        nameEn: 'Presto Milkfish (2 pcs)',
        category: 'bandeng-presto',
        price: 58000,
        description: 'Bandeng duri lunak lezat isi 2 ekor kemasan vacuum higienis. Tulang & duri empuk dari kepala sampai ekor, aman dikonsumsi anak-anak.',
        descriptionEn: 'Delicious soft-bone milkfish 2 pcs in hygienic vacuum pack. Tender soft bones from head to tail, safe for kids.',
        image: bandengImg,
        unit: 'Kemasan Isi 2',
        unitEn: 'Pack of 2',
        isBestSeller: true,
        paxelUrl: "https://buyer.paxelmarket.co/product/PRD1JJ92UBZL/PRD1JJ92UBZL"
    },
    {
        id: '3',
        name: 'Pepes Bandeng Presto',
        nameEn: 'Steamed Spiced Milkfish (Pepes)',
        category: 'pepes-bandeng-presto',
        price: 38000,
        description: 'Pepes bandeng presto bumbu melimpah aromatik dibungkus daun pisang segar. Cita rasa manis gurih khas dengan bumbu meresap sampai ke dalam.',
        descriptionEn: 'Presto milkfish wrapped in fresh banana leaves with rich aromatic herbs. Authentic savory & sweet flavor infused deep inside.',
        image: pepesImg,
        unit: 'Kemasan Isi 1',
        unitEn: 'Pack of 1',
        isBestSeller: false,
        paxelUrl: "https://buyer.paxelmarket.co/product/PRD1JJ92UA3I/PRD1JJ92UA3I"
    },
    {
        id: '4',
        name: 'Ayam Ungkep Pejantan',
        nameEn: 'Seasoned Free-Range Chicken (Ungkep)',
        category: 'ayam-ungkep',
        price: 70000,
        description: '1 ekor ayam pejantan utuh yang diungkep dengan bumbu rempah pilihan melimpah. Daging empuk gurih, siap digoreng atau dikukus kapan saja.',
        descriptionEn: '1 whole free-range rooster braised in rich selected traditional spices. Tender & flavorful meat, ready to fry or steam anytime.',
        image: ayamUngkepImg,
        unit: '1 Ekor Utuh',
        unitEn: '1 Whole Chicken',
        isBestSeller: true,
        paxelUrl: "https://buyer.paxelmarket.co/product/PRD1JJ92UU31/PRD1JJ92UU31"
    },
];