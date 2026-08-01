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
    { id: 1, title: "Arduaz Çatı", description: "Çatılarınızı arduaz kaplamalarımızla zorlu hava koşullarına karşı dayanıklı ve estetik bir zırhla koruma altına alıyoruz.", image: "/Arduaz_çatı.jpg" },
    { id: 2, title: "Membran Çatı", description: "Su sızıntısı riskini tamamen ortadan kaldıran membran uygulamalarımızla çatılarınıza kusursuz bir su yalıtımı sağlıyoruz.", image: "/Membran_çatı.jpg" },
    { id: 3, title: "Perde Membran", description: "Toprak altında kalan perde duvarlarınızı yeraltı sularına ve rutubete karşı membran yalıtımıyla kesin olarak güvenceye alıyoruz.", image: "/Perde_membran.jpg" },
    { id: 4, title: "Shingle Çatı", description: "Hafif, şık ve uzun ömürlü shingle kaplamalarımızla çatılarınıza hem modern bir görünüm hem de güçlü bir koruma kazandırıyoruz.", image: "/Shingle_çatı.jpg" },
    { id: 5, title: "Temel Bohçalama", description: "Binanızın temelini yeraltı sularından korumak için bohçalama yöntemiyle tamamen sarıyor, yapınızın taşıyıcı sistemini güvenceye alıyoruz.", image: "/Temel_bohçalama.jpg" },
    { id: 6, title: "Çatı Tamirat & Tadilat", description: "Mevcut çatıların onarımı, bakımı ve yenilenmesi işlemleri.", image: "/çatı_tamirat.jpg" }
  ],
  contacts: [
    { name: "Cuma SÖYLER", phone: "0535 879 98 30", telLink: "tel:+905358799830" },
    { name: "Osman SÖYLER", phone: "0531 868 38 46", telLink: "tel:+905318683846" }
  ]
};