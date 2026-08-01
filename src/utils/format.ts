import { STORE_CONFIG } from '../data/config';

export const formatIDR = (price: number): string => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        maximumFractionDigits: 0,
    }).format(price)
};

export const whatsappLink = (productName?: string): string => {
    let message = `Halo ${STORE_CONFIG.name}, saya mau tanya produknya.`;
    if (productName) {
        message = `Halo ${STORE_CONFIG.name}, saya mau pesan *${productName}*. Apakah masih tersedia?`
    }
    return `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
};