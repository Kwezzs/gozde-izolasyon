// app/data.ts

export interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface Contact {
  name: string;
  phone: string;
  telLink: string;
}

export interface SiteData {
  company: {
    name: string;
    tagline: string;
    location: string;
  };
  services: Service[];
  contacts: Contact[];
}

export const siteData: SiteData = {
  company: {
    name: "Gözde İzolasyon",
    tagline: "Güvenilir, Sağlam ve Uzun Ömürlü Yalıtım Çözümleri",
    location: "Kayseri"
  },
  services: [
    { id: 1, title: "Su Yalıtımı", description: "Binalarınızı neme ve suya karşı kesin olarak koruyoruz.", image: "/su_yalıtım.jpg" },
    { id: 2, title: "Çatı İzolasyonu", description: "Çatılarınız için zorlu hava şartlarına dayanıklı çözümler.", image: "/çatı_izolasyon.jpg" },
    { id: 3, title: "Temel Yalıtımı", description: "Bina temellerini nemden ve korozyondan koruyan sistemler.", image: "/yer_izolasyon.jpg" },
    { id: 4, title: "Perde Beton Yalıtımı", description: "Toprak altı duvarlarda su sızdırmazlığını sağlayan uygulamalar.", image: "/perde-beton.jpg" },
    { id: 5, title: "Teras Yalıtımı", description: "Açık teraslarınızda su sızıntılarını ve ısı kayıplarını önler.", image: "/teras-yalıtım.jpg" },
    { id: 6, title: "Çatı Tamirat & Tadilat", description: "Mevcut çatıların onarımı, bakımı ve yenilenmesi işlemleri.", image: "/çatı_tamirat.jpg" }
  ],
  contacts: [
    { name: "Cuma SÖYLER", phone: "0535 879 98 30", telLink: "tel:+905358799830" },
    { name: "Osman SÖYLER", phone: "0531 868 38 46", telLink: "tel:+905318683846" }
  ]
};