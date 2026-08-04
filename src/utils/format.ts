import { STORE_CONFIG } from '../data/config';

export const formatIDR = (price: number): string => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        maximumFractionDigits: 0,
    }).format(price)
};

export const whatsappLink = (productName?: string): string => {
    let message = `Halo ${STORE_CONFIG.name}, saya ingin menanyakan informasi produk.`;
    if (productName) {
        message = `Halo ${STORE_CONFIG.name},\n\nSaya ingin bertanya stok untuk produk:\n• ${productName}\n\nApakah produk ini ready?`;
    }
    return `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
};