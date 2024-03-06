import { createClient } from '@/utils/supabase/client';

export const getAll = async () => {
  try {
    const supabase = createClient();
    let { data, error } = await supabase
      .from('users_posts')
      .select('*')

    console.log(data, error)
    if (error) {
      throw error;
    }
    return data;
  } catch (err) {
    throw err;
  }
}

export const getAllLikesOfTheUser = async (id: string) => {
  try {
    const supabase = createClient();

    const { data, error } = await supabase
      .from('liked')
      .select(`
        user_id,
        post_id,
        users ( e_percentage, filename),
        auth.users (email)
      `)
      .eq('users.id', id);
    console.log(data)
    if (error) {
      throw error;
    }
  } catch (err) {
    throw err;
  }
}