import { User } from '@/app/types/types';
import { createClient } from '@/utils/supabase/client';
import { type UUID } from 'crypto';

export const getLoggedInUser = async () => {
  const supabase = createClient();

  const { data: { user } } = await supabase.auth.getUser();
  return user;
}

export const getUser = async (userId: UUID) => {
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

export const addUser = async (userId: UUID, user_name: string) => {
  const supabase = createClient();
  try {
    const { data, error } = await supabase.from('users')
      .insert([
        { id: userId, name: user_name },
      ])

    if (error) throw error;

    return data;
  } catch (err) {
    throw err
  }
}

export async function updateUser(id: UUID, updatedUser: User) {
  try {
    const supabase = createClient();
    const { data, error } = await supabase.from('users').update(updatedUser).eq('id', id);
    if (error) {
      throw error;
    }
    console.log("User updated successfully:", data);
    return data;
  } catch (error: any) {
    console.error('Error updating user:', error.message);
    throw error;
  }
}

export async function updatePercentage(id: UUID, percentage: number) {
  try {
    const supabase = createClient();
    const { data, error } = await supabase.from('users').update({ e_percentage: percentage }).eq('id', id);
    if (error){
      throw error;
    }
    console.log('Percentage updated:',data);
    return data;
  } catch (error: any) {
    console.error('Error  updating user percentage: ', error.message);
    throw error;
  }
}