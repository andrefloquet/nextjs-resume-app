'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation'

export async function PostsCreate(formData) {

    const post = {
        user_id: 2,
        title: formData.get('title'),
        body: formData.get('body')
    }

    const response = await fetch("http://localhost:8000/api/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
    });

    if (!response.ok) {
        throw new Error("Failed to submit form");
    }

    revalidatePath('/posts');

    redirect('/posts');
  };

  export async function PostsIndex() {
    
    const res = await fetch("http://127.0.0.1:8000/api/posts");
  
    if (!res.ok) {
      throw new Error("Failed to fetch posts");
    }
  
    return res.json();
  }