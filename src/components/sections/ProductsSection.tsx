import { useState } from 'react';
import { PRODUCTS } from '../../data/products';
import type { Category, Product } from '../../types';
import { STORE_CONFIG } from '../../data/config';
import { MessageCircle, Sparkles } from 'lucide-react';
import { formatIDR } from '../../utils/format';
import { useLanguage } from '../../context/LanguageContext';
import tokopediaIcon from '../../assets/icons/Tokopedia.png';
import paxelIcon from '../../assets/icons/pexelMart.svg';

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

  // Filter produk berdasarkan kategori aktif
  const filteredProducts = activeCategory === 'semua'
    ? PRODUCTS
    : PRODUCTS.filter((product) => product.category === activeCategory);

  // Function untuk pesan produk langsung ke WhatsApp
  const handleOrderWhatsapp = (product: Product) => {
    const productName = product.name;
    const productUnit = language === 'en' && product.unitEn ? product.unitEn : product.unit;
    const message = `Halo *${STORE_CONFIG.name}*,\nSaya ingin menanyakan informasi promo/harga & pemesanan produk:\n- *${productName}* (${productUnit})\n\nApakah stok produk ini ready?`;
    const waUrl = `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
  };

  return (
    <section id="produk" className="py-20 bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-3xl font-bold text-black">
            {t.products.title}
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto">
            {t.products.subtitle}
          </p>

          {/* Filter Tab Buttons */}
          <div className="flex flex-wrap justify-center gap-2.5 pt-6">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${activeCategory === cat.id
                    ? 'bg-[#ecffdb] text-black border border-lime-300 shadow-xs scale-105'
                    : 'bg-gray-100/80 text-gray-700 hover:bg-gray-200 border border-gray-200'
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
                className="w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(25%-1.5rem)] min-w-67.5 max-w-sm bg-[#f4fdec] border border-lime-200/60 rounded-3xl overflow-hidden shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-4/3 bg-gray-50 overflow-hidden">
                    <img
                      src={product.image}
                      alt={displayName}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {product.isBestSeller && (
                      <span className="absolute top-3 right-3 bg-amber-400 text-black text-[11px] font-extrabold uppercase px-3 py-1 rounded-full shadow-xs flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5 text-black" /> {t.products.bestSeller}
                      </span>
                    )}
                    <span className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md text-gray-900 border border-gray-200 text-xs px-3 py-1 rounded-xl font-bold shadow-xs">
                      {displayUnit}
                    </span>
                  </div>

                  {/* Detail Produk */}
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
                    <MessageCircle className="w-4.5 h-4.5" />
                    <span>{t.products.orderWa}</span>
                  </button>


                  <div className="space-y-1.5 pt-1">
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider block text-center">
                      {t.products.orBuyVia}
                    </span>
                    <div className="grid grid-cols-2 gap-2">

                      {/* Tokopedia */}
                      <a
                        href={product.tokopediaUrl || STORE_CONFIG.marketplaces.tokopedia}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 font-bold py-2.5 px-2 rounded-xl text-[11px] transition-all duration-200 shadow-2xs hover:shadow-xs"
                        title="Beli di Tokopedia"
                      >
                        <img src={tokopediaIcon} alt="Tokopedia" className="w-4 h-4 object-contain shrink-0" />
                        <span>Tokopedia</span>
                      </a>

                      {/* Paxel */}
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

      </div>
    </section>
  );
};
