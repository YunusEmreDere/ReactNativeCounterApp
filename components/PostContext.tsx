import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useContext, useEffect, useState } from "react";
import { Post, fakePosts } from './fakePosts';

type PostContextType = {
    posts: Post[];
    addPost: (newPost : Post) => void;
    likePost: (id: number) => void;
    syncLikes:() =>Promise<void>;
};

const PostContext = createContext<PostContextType | undefined>(undefined);


export const PostProvider =  ({ children}: {children: React.ReactNode}) => {
    const [posts, setPost] = useState<Post[]>(fakePosts);

    useEffect(() => {
    const loadPosts = async() =>{
        const saved = await AsyncStorage.getItem("posts");
        if(saved) {
            setPost(JSON.parse(saved));
        }else{
            setPost(fakePosts);
            await AsyncStorage.setItem("posts", JSON.stringify(fakePosts));
        }
    };
    loadPosts();
},[])

const savePost = async (data: Post[]) => {
    await AsyncStorage.setItem("posts", JSON.stringify(data));
};

const addPost=(newPost : Post) => {
    const updated = [newPost, ...posts];
    setPost(updated);
    savePost(updated);
}

    const likePost = async (id: number) => {
        const updated = posts.map((post) => 
        post.id === id ? {...post, likes: post.likes + 1}: post
    );
        setPost(updated);
        savePost(updated);
    
        const likesMap: {[key: number] : number} = {};
        updated.forEach((post) => {
            likesMap[post.id] = post.likes;
        });

        await AsyncStorage.setItem("likes", JSON.stringify(likesMap));
    
    };
    


    const syncLikes = async () => {
    const saved = await AsyncStorage.getItem("likes");
    if (saved) {
        const parsedLikes = JSON.parse(saved);
        const updated = posts.map((post) => ({
            ...post,
            likes: parsedLikes[post.id] ?? post.likes,
        }));
        setPost(updated);
        savePost(updated);
    }
};


    return (
        <PostContext.Provider value={{ syncLikes ,posts, addPost, likePost }}>
            {children}
        </PostContext.Provider>
    );
};

export const usePost = () => {
    const context = useContext(PostContext);
    if (!context) {
        throw new Error("usePost must be used within a PostProvider");
    }
    return context;
};