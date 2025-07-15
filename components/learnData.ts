export type LearnItem = {
    id: number;
    title: string;
    description: string;
    link: string;
};

export type LearnCategory = {
    category: string;
    items: LearnItem[];
}

export const learnData: LearnCategory[] = [
  {
    category: "Balık Türleri",
    items: [
      {
        id: 1,
        title: "Tatlı Su Balıkları",
        description: "Tatlı sularda yaşayan balık türlerini keşfedin.",
        link: "https://www.example.com/tatli-su-baliklari",
      },
      {
        id: 2,
        title: "Deniz balıkçılığı rehberi",
        description: "Başlangıç seviyesi deniz balıkçılığı bilgileri.",
        link: "https://www.example.com/deniz-balikciligi",
      },
    ],
  },
  {
    category: "Düğüm Türleri",
    items: [
      {
        id: 3,
        title: "İğne Bağlama Düğümü",
        description: "Olta iğnesi bağlama teknikleri.",
        link: "https://www.example.com/igne-dugumu",
      },
      {
        id: 4,
        title: "Rapala Düğümü",
        description: "Rapala bağlama için özel düğüm.",
        link: "https://www.example.com/rapala-dugumu",
      },
    ],
  },
];


