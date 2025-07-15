export type Post = {
    id: number;
    username: string;
    title: string;
    content: string;
    imageUrl: string;
    likes: number;
};

export const fakePosts: Post[] = [
    {
        id:1,
        username: "balikci38",
        title: "Turna yakaladım",
        content: "Sabah erken çıktım, nehrin kenarında dev bir turna yakaladım",
        imageUrl: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?q=80&w=712&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        likes: 5,
    },
    {
        id:2,
        username: "marineQueen",
        title: "Lüfer Zamanı",
        content: "İstanbul Boğazı şu an tam zamanı. Lüfer bol bol geliyor.",
        imageUrl: "https://images.unsplash.com/photo-1535591273668-578e31182c4f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        likes: 9,
    },
    {
        id:3,
        username: "deepSeaHunter",
        title: "Akya avı",
        content: "Kaç açıklarında mükemmel akya yakaladım, 7 kiloydu.",
        imageUrl: "https://images.unsplash.com/photo-1578507065211-1c4e99a5fd24?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        likes: 12,
    },

]