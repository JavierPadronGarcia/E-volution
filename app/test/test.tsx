
import { createClient } from '@/utils/supabase/client';

type Post = {
    title: string,
    description: string,
    filename: string,
    user_id: string
}

export async function getAllPosts() {
    
  try {
    const supabase = createClient();
    const { data, error } = await supabase.from('Post').select('*');
    if (error) {
      throw error;
    }
    return data;
  } catch (error:any) {
    console.error('Error fetching posts:', error.message);
    throw error;
  }
}

export async function getPostById(id:number) {
    try {
        const supabase = createClient();
        const { data, error } = await supabase.from('Post').select('*').eq('id', id).single();
      if (error) {
        throw error;
      }
      return data;
    } catch (error:any) {
      console.error('Error fetching post by id:', error.message);
      throw error;
    }
  }

export async function addPost(newPost:Post) {
  try {
    const supabase = createClient();
    const { data, error } = await supabase.from('Post').insert(newPost);
    if (error) {
      throw error;
    }
    console.log("Post added successfully:", data);
    return data;
  } catch (error:any) {
    console.error('Error adding post:', error.message);
    throw error;
  }
}

export async function updatePost(id:number, updatedPost:Post) {
    try {
        const supabase = createClient();
        const { data, error } = await supabase.from('Post').update(updatedPost).eq('id', id);
      if (error) {
        throw error;
      }
      console.log("Post updated successfully:", data);
      return data;
    } catch (error:any) {
      console.error('Error updating post:', error.message);
      throw error;
    }
  }

  export async function deletePost(id:number) {
    try {
        const supabase = createClient();
        const { data, error } = await supabase.from('Post').delete().eq('id', id);
      if (error) {
        throw error;
      }
      console.log("Post deleted successfully:", data);
      return data;
    } catch (error:any) {
      console.error('Error deleting post:', error.message);
      throw error;
    }
  }

