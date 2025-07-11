import Image from 'next/image';

const partners = [
  { src: "https://res.cloudinary.com/djxoeyk1a/image/upload/v1742012914/electric_pe_1_gdmtb2.png", alt: "ElectricPe" },
  { src: "https://res.cloudinary.com/djxoeyk1a/image/upload/v1742012961/l_t_1_bsdgwu.png", alt: "L&T" },
  { src: "https://res.cloudinary.com/djxoeyk1a/image/upload/v1742013025/lynk_1_vwvaiz.png", alt: "Lynk" },
  { src: "https://res.cloudinary.com/djxoeyk1a/image/upload/v1742013096/paytm_1_egtib2.png", alt: "Paytm" },
  { src: "https://res.cloudinary.com/djxoeyk1a/image/upload/v1742013162/swiggy_1_xcphdu.png", alt: "Swiggy" },
  { src: "https://res.cloudinary.com/djxoeyk1a/image/upload/v1742013201/udaan_1_g88rwv.png", alt: "Udaan" },
  { src: "https://res.cloudinary.com/djxoeyk1a/image/upload/v1742013237/zepto_1_bp4xy1.png", alt: "Zepto" },
];

const allPartners = [...partners, ...partners, ...partners, ...partners];

export default function PartnersSection() {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-headline font-bold mb-4">Trusted by Industry Leaders</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Partnering with 100+ organizations to deliver exceptional HR solutions</p>
        </div>
      </div>
      <div className="partners-logo-slider">
        <div className="slide-track">
          {allPartners.map((partner, index) => (
            <div key={index} className="slide" title={partner.alt}>
              <Image 
                src={partner.src}
                height={50}
                width={150}
                alt={partner.alt}
                style={{ objectFit: 'contain' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
