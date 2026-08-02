import { useState } from 'react';
import { PRODUCTS } from '../../data/products';
import type { Category, Product } from '../../types';
import { STORE_CONFIG } from '../../data/config';
import { formatIDR } from '../../utils/format';
import { useLanguage } from '../../context/LanguageContext';
import paxelIcon from '../../assets/icons/pexelMart.svg';
import { FadeIn } from '../ui/FadeIn';

export const ProductsSection = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('semua');
  const { language, t } = useLanguage();

  // Daftar Kategori Filter
  const categories: { id: Category; label: string }[] = [
    { id: 'semua', label: t.products.allMenu },
    { id: 'bandeng-presto', label: 'Bandeng Presto' },
    { id: 'pepes-bandeng-presto', label: 'Pepes Bandeng' },
    { id: 'ayam-ungkep', label: 'Ayam Ungkep' },
  ];

  const filteredProducts = activeCategory === 'semua'
    ? PRODUCTS
    : PRODUCTS.filter((product) => product.category === activeCategory);

  const handleOrderWhatsapp = (product: Product) => {
    const productName = product.name;
    const productUnit = language === 'en' && product.unitEn ? product.unitEn : product.unit;
    const message = `Halo *${STORE_CONFIG.name}*,\nSaya ingin menanyakan informasi promo/harga & pemesanan produk:\n- *${productName}* (${productUnit})\n\nApakah stok produk ini ready?`;
    const waUrl = `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
  };

  return (
    <section id="produk" className="py-20 bg-white text-black">
      <FadeIn className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-3xl font-bold text-black">
            {t.products.title}
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto">
            {t.products.subtitle}
          </p>

          <div className="flex flex-wrap justify-center gap-2.5 pt-6">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${activeCategory === cat.id
                    ? 'bg-[#ecffdb] text-black  shadow-xs scale-105'
                    : 'bg-gray-100/80 text-gray-700 hover:bg-gray-200'
                  }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {filteredProducts.map((product) => {
            const displayName = product.name;
            const displayDesc = language === 'en' && product.descriptionEn ? product.descriptionEn : product.description;
            const displayUnit = language === 'en' && product.unitEn ? product.unitEn : product.unit;

            return (
              <div
                key={product.id}
                className="w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(25%-1.5rem)] min-w-67.5 max-w-sm bg-[#f4fdec] rounded-3xl overflow-hidden shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-4/3 bg-gray-50 overflow-hidden">
                    <img
                      src={product.image}
                      alt={displayName}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {product.isBestSeller && (
                      <span className="absolute top-3 right-3 bg-amber-400 text-[11px] font-bold uppercase px-3 py-1 rounded-full shadow-xs flex items-center gap-1">
                          {t.products.bestSeller}
                      </span>
                    )}
                    <span className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md text-gray-900 border border-gray-200 text-xs px-3 py-1 rounded-xl font-bold shadow-xs">
                      {displayUnit}
                    </span>
                  </div>

                  <div className="p-6 space-y-2 text-left">
                    <h3 className="text-lg font-bold text-black group-hover:text-amber-800 transition-colors leading-snug">
                      {displayName}
                    </h3>
                    <p className="text-xs text-gray-700 line-clamp-3 leading-relaxed">
                      {displayDesc}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 space-y-3.5 text-left">
                  <div className="pt-3 border-t border-lime-200/60 flex items-center justify-between">
                    <div>
                      <span className="text-lg font-bold text-black">
                        {t.products.priceStarting} {formatIDR(product.price)}
                      </span>
                    </div>
                  </div>


                  <button
                  onClick={() => handleOrderWhatsapp(product)}
                  className="w-full inline-flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3 px-4 rounded-2xl shadow-xs hover:shadow-md transition-all duration-300 text-xs sm:text-sm cursor-pointer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48" className="shrink-0">
                    <path fill="#fff" d="M4.868,43.303l2.694-9.835C5.9,30.703,5.084,27.5,5.086,24.179C5.093,13.73,13.624,5.201,24.072,5.201c5.064,0.002,9.823,1.974,13.404,5.558c3.582,3.584,5.551,8.344,5.55,13.408C43.017,34.617,34.486,43.146,24.038,43.146c-3.191,0-6.315-0.806-9.081-2.339L4.868,43.303z"/>
                    <path fill="#25D366" d="M24.072,6.701c-9.638,0-17.478,7.84-17.485,17.478c-0.002,3.109,0.812,6.142,2.355,8.811l0.366,0.635l-1.597,5.834l5.968-1.564l0.617,0.366c2.585,1.534,5.539,2.344,8.552,2.346h0.008c9.637,0,17.477-7.84,17.484-17.479c0.003-4.669-1.813-9.06-5.116-12.363C33.123,8.522,28.735,6.703,24.072,6.701z"/>
                    <path fill="#fff" fillRule="evenodd" clipRule="evenodd" d="M18.175,13.916c-0.378-0.84-0.776-0.857-1.136-0.871c-0.294-0.012-0.631-0.012-0.967-0.012c-0.337,0-0.884,0.126-1.347,0.631c-0.463,0.505-1.769,1.727-1.769,4.212c0,2.485,1.811,4.887,2.064,5.223c0.252,0.336,3.504,5.589,8.625,7.606c4.256,1.677,5.122,1.343,6.048,1.258c0.926-0.084,2.989-1.221,3.41-2.4c0.421-1.179,0.421-2.189,0.295-2.4c-0.126-0.211-0.463-0.337-0.968-0.589c-0.505-0.252-2.989-1.474-3.452-1.643c-0.463-0.168-0.8-0.252-1.137,0.252c-0.337,0.505-1.305,1.643-1.6,1.979c-0.295,0.336-0.589,0.378-1.094,0.126c-0.505-0.252-2.134-0.786-4.065-2.508c-1.503-1.34-2.518-2.996-2.813-3.501c-0.294-0.505-0.031-0.778,0.221-1.029c0.227-0.226,0.505-0.589,0.757-0.884c0.252-0.295,0.336-0.505,0.505-0.842c0.168-0.337,0.084-0.631-0.042-0.884C19.984,18.423,18.618,14.901,18.175,13.916z"/>
                  </svg>
                  <span>{t.products.orderWa}</span>
                </button>


                  <div className="space-y-1.5 pt-1">
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider block text-center">
                      {t.products.orBuyVia}
                    </span>
                    <div className="grid grid-cols-1 gap-2">
                      <a
                        href={product.paxelUrl || STORE_CONFIG.marketplaces.paxel}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 bg-purple-50 hover:bg-purple-100 text-purple-800 border border-purple-200 font-bold py-2.5 px-2 rounded-xl text-[11px] transition-all duration-200 shadow-2xs hover:shadow-xs"
                        title="Beli di Paxel Market"
                      >
                        <img src={paxelIcon} alt="Paxel Market" className="w-5 h-5 object-contain shrink-0" />
                        <span>Paxel Market</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </FadeIn>
    </section>
  );
};
