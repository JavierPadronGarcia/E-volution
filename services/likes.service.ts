import { createClient } from '@/utils/supabase/client';
import { Like } from '@/app/types/types';
import { type UUID } from 'crypto';

export const getAllLikesOfTheUser = async (user_id_param: UUID): Promise<Like[]> => {
  try {
    const supabase = createClient();

    const { data, error } = await supabase.rpc('get_likes_info', { user_id_param });

    if (error) {
      throw error;
    }
    return data as Like[];
  } catch (err) {
    throw err;
  }
}

export const likePost = async (user_id: UUID, post_id: UUID): Promise<boolean> => {
  try {
    const supabase = createClient();

    const { error } = await supabase
      .from('user_post')
      .insert([
        { user_id: user_id, post_id: post_id },
      ])
      .select();

    if (error) {
      throw error;
    }
    return true;
  } catch (err) {
    throw err;
  }
}

export const unLikePost = async (user_id: UUID, post_id: UUID): Promise<boolean> => {
  try {
    const supabase = createClient();

    const { error } = await supabase
      .from('user_post')
      .delete()
      .eq('user_id', user_id)
      .eq('post_id', post_id);

    if (error) {
      throw error;
    }
    return true;
  } catch (err) {
    throw err;
  }
}

export const getAllLikes = async () => {
  try {
    const supabase = createClient();

    const {data, error} = await  supabase.rpc('get_top_posts');
    if(error){
      throw error
    }
    return data as Like[];
  } catch (error) {
    throw error
  }
}