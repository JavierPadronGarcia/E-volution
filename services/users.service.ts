import { User } from '@/app/types/types';
import { createClient } from '@/utils/supabase/server';

export const getLoggedInUser = async () => {
  const supabase = createClient();

  const { data: { user } } = await supabase.auth.getUser();
  return user;
}

export const getUser = async (userId: string) => {
  const supabase = createClient();
  try {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('id', userId);

    if (error) throw error;

    return data[0] as User;

  } catch (error) {
    throw error;
  }
}