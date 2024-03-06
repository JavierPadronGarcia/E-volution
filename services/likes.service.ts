import { createClient } from '@/utils/supabase/client';
import { Like } from '@/app/types/types';

export const getAll = async (): Promise<Like[]> => {
  try {
    const supabase = createClient();
    let { data, error } = await supabase.from('user_post').select('*');
    if (error) {
      throw error;
    }
    return data as Like[];
  } catch (err) {
    throw err;
  }
}

export const getAllLikesOfTheUser = async (id: string): Promise<Like[]> => {
  try {
    const supabase = createClient();

    const { data, error } = await supabase
      .from('user_post')
      .select(`
        user_id,
        post_id,
        created_at,
        users(e_percentage)
      `)
      .eq('users.id', id);

    if (error) {
      throw error;
    }
    return data as Like[];
  } catch (err) {
    throw err;
  }
}