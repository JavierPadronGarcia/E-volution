
import { createClient } from '@/utils/supabase/client';
import { Post } from '@/app/types/types';
import { type UUID } from 'crypto';

export async function getAllPosts() {

  try {
    const supabase = createClient();
    const { data, error } = await supabase.from('posts')
      .select('*, users!posts_user_id_fkey(name, filename)');
    if (error) {
      throw error;
    }
    return data as Post[];
  } catch (error: any) {
    console.error('Error fetching posts:', error.message);
    throw error;
  }
}

export async function getPostById(id: number) {
  try {
    const supabase = createClient();
    const { data, error } = await supabase.from('posts').select('*').eq('id', id).single();
    if (error) {
      throw error;
    }
    return data;
  } catch (error: any) {
    console.error('Error fetching post by id:', error.message);
    throw error;
  }
}

export async function addPost(newPost: Post) {
  try {
    const supabase = createClient();
    const { data, error } = await supabase.from('posts').insert(newPost).select();
    if (error) {
      throw error;
    }
    return data;
  } catch (error: any) {
    console.error('Error adding post:', error.message);
    throw error;
  }
}

export async function updatePost(id: number, updatedPost: Post) {
  try {
    const supabase = createClient();
    const { data, error } = await supabase.from('posts').update(updatedPost).eq('id', id);
    if (error) {
      throw error;
    }
    console.log("Post updated successfully:", data);
    return data;
  } catch (error: any) {
    console.error('Error updating post:', error.message);
    throw error;
  }
}

export async function deletePost(id: UUID) {
  try {
    const supabase = createClient();
    const { data, error } = await supabase.from('posts').delete().eq('id', id);
    if (error) {
      throw error;
    }
    return data;
  } catch (error: any) {
    console.error('Error deleting post:', error.message);
    throw error;
  }
}